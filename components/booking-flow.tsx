"use client";

import { CalendarCheck, CheckCircle2, Clock, UserRound, Wrench } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui";
import { services } from "@/lib/content";

const timeWindows = [
  "Morning, 8 AM to 11 AM",
  "Midday, 11 AM to 2 PM",
  "Afternoon, 2 PM to 5 PM",
  "First available"
];

const steps = [
  { label: "Service", icon: Wrench },
  { label: "Date", icon: CalendarCheck },
  { label: "Time", icon: Clock },
  { label: "Details", icon: UserRound }
];

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(services[0].title);
  const [date, setDate] = useState("");
  const [window, setWindow] = useState(timeWindows[0]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canContinue = useMemo(() => {
    if (step === 1) return Boolean(date);
    if (step === 3) return Boolean(name && contact);
    return true;
  }, [contact, date, name, step]);

  if (submitted) {
    return (
      <div className="rounded-md border border-grove-100 bg-white p-6 shadow-soft md:p-8">
        <div className="grid h-14 w-14 place-items-center rounded-md bg-grove-50 text-grove-700">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mt-6 text-3xl font-black text-pipe">Request received</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Thanks, {name || "there"}. Grove has your service request and will
          follow up shortly to confirm appointment timing.
        </p>
        <div className="mt-6 grid gap-3 rounded-md bg-grove-50 p-5 text-sm text-slate-700">
          <p>
            <strong className="text-pipe">Service:</strong> {selectedService}
          </p>
          <p>
            <strong className="text-pipe">Preferred date:</strong> {date}
          </p>
          <p>
            <strong className="text-pipe">Time window:</strong> {window}
          </p>
          {notes ? (
            <p>
              <strong className="text-pipe">Notes:</strong> {notes}
            </p>
          ) : null}
        </div>
        <Button
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setStep(0);
          }}
        >
          Start another request
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-grove-100 bg-white p-5 shadow-soft md:p-8">
      <div className="grid grid-cols-4 gap-2">
        {steps.map((item, index) => {
          const Icon = item.icon;
          const active = index <= step;
          return (
            <div
              key={item.label}
              className={`rounded-md border p-3 text-center ${
                active
                  ? "border-grove-300 bg-grove-50 text-grove-800"
                  : "border-slate-200 bg-slate-50 text-slate-500"
              }`}
            >
              <Icon className="mx-auto h-5 w-5" />
              <span className="mt-2 block text-xs font-black">{item.label}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        {step === 0 ? (
          <div>
            <h2 className="text-2xl font-black text-pipe">What do you need help with?</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {services.map((service) => (
                <button
                  key={service.slug}
                  className={`focus-ring rounded-md border p-4 text-left transition ${
                    selectedService === service.title
                      ? "border-grove-600 bg-grove-50"
                      : "border-grove-100 bg-white hover:border-grove-300"
                  }`}
                  onClick={() => setSelectedService(service.title)}
                >
                  <span className="font-black text-pipe">{service.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-700">
                    {service.summary}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div>
            <h2 className="text-2xl font-black text-pipe">Choose a preferred date</h2>
            <p className="mt-2 leading-7 text-slate-700">
              Pick the day that works best. Grove will follow up to confirm
              availability.
            </p>
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="focus-ring mt-5 min-h-12 w-full rounded-md border border-grove-200 bg-white px-4 text-pipe"
            />
          </div>
        ) : null}

        {step === 2 ? (
          <div>
            <h2 className="text-2xl font-black text-pipe">Choose a time window</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {timeWindows.map((item) => (
                <button
                  key={item}
                  className={`focus-ring rounded-md border p-4 text-left font-bold ${
                    window === item
                      ? "border-grove-600 bg-grove-50 text-pipe"
                      : "border-grove-100 bg-white text-slate-700"
                  }`}
                  onClick={() => setWindow(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div>
            <h2 className="text-2xl font-black text-pipe">Tell us how to reach you</h2>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-sm font-bold text-pipe">
                Name
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="focus-ring min-h-12 rounded-md border border-grove-200 px-4 font-normal"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-pipe">
                Phone or email
                <input
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  className="focus-ring min-h-12 rounded-md border border-grove-200 px-4 font-normal"
                  placeholder="Best way to contact you"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-pipe">
                What is going on?
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  className="focus-ring min-h-28 rounded-md border border-grove-200 px-4 py-3 font-normal"
                  placeholder="Tell us about the problem, access notes, or timing needs."
                />
              </label>
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <Button
          variant="secondary"
          onClick={() => setStep((value) => Math.max(0, value - 1))}
          disabled={step === 0}
          className={step === 0 ? "opacity-50" : ""}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (step === 3) {
              setSubmitted(true);
              return;
            }
            setStep((value) => Math.min(3, value + 1));
          }}
          disabled={!canContinue}
          className={!canContinue ? "opacity-50" : ""}
        >
          {step === 3 ? "Send request" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
