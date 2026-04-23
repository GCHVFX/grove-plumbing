const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const root = process.cwd();
const lockPath = path.join(root, ".next-dev.lock.json");
const nextCachePath = path.join(root, ".next", "cache");

function isPidAlive(pid) {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readLock() {
  try {
    if (!fs.existsSync(lockPath)) return null;
    return JSON.parse(fs.readFileSync(lockPath, "utf8"));
  } catch {
    return null;
  }
}

function removeLockIfOwned() {
  const lock = readLock();
  if (lock && lock.ownerPid === process.pid) {
    fs.rmSync(lockPath, { force: true });
  }
}

function setupCleanupHandlers() {
  const exitSignals = ["SIGINT", "SIGTERM", "SIGHUP"];

  for (const signal of exitSignals) {
    process.on(signal, () => {
      removeLockIfOwned();
      process.exit(0);
    });
  }

  process.on("exit", () => {
    removeLockIfOwned();
  });

  process.on("uncaughtException", (error) => {
    console.error(error);
    removeLockIfOwned();
    process.exit(1);
  });
}

function ensureSingleDevServer() {
  const existing = readLock();
  if (existing && isPidAlive(existing.ownerPid)) {
    console.error(
      `Another dev server is already running (pid ${existing.ownerPid}). Stop it before starting a new one.`
    );
    process.exit(1);
  }

  if (existing && !isPidAlive(existing.ownerPid)) {
    fs.rmSync(lockPath, { force: true });
  }

  const lock = {
    ownerPid: process.pid,
    createdAt: new Date().toISOString(),
    cwd: root
  };
  fs.writeFileSync(lockPath, JSON.stringify(lock, null, 2), "utf8");
}

function clearStaleNextCache() {
  fs.rmSync(nextCachePath, { recursive: true, force: true });
}

function startNextDev() {
  const args = ["dev", ...process.argv.slice(2)];
  const nextCli = require.resolve("next/dist/bin/next");

  const child = spawn(process.execPath, [nextCli, ...args], {
    stdio: "inherit",
    env: process.env
  });

  child.on("error", (error) => {
    console.error(error);
    removeLockIfOwned();
    process.exit(1);
  });

  child.on("exit", (code) => {
    removeLockIfOwned();
    process.exit(code ?? 0);
  });
}

setupCleanupHandlers();
ensureSingleDevServer();
clearStaleNextCache();
startNextDev();
