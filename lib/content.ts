import {
  Flame,
  Heater,
  Home,
  PhoneCall,
  ShieldCheck,
  Droplets,
  Wrench
} from "lucide-react";

export const phoneNumber = "(604) 943-5959";
export const textNumber = "(778) 908-3283";
export const emailAddress = "david@groveplumbing.ca";
export const websiteUrl = "https://www.groveplumbing.ca";
export const serviceHours =
  "Regular hours: 8am to 8pm, Monday to Saturday. Emergency on-call support available after hours.";

export const trustSignals = [
  "Licensed and insured work",
  "Red Seal certified team",
  "Family-owned in South Delta",
  "Serving Ladner, Tsawwassen, and North Delta"
];

export const services = [
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    shortTitle: "Plumbing",
    icon: Wrench,
    summary:
      "Leaking taps, running toilets, and fixture replacements handled cleanly and quickly.",
    intro:
      "From a dripping tap to a larger plumbing repair, Grove helps homeowners get practical fixes without the runaround.",
    problems: [
      "Leaking taps, toilets, pipes, and shutoffs",
      "Low water pressure or noisy plumbing",
      "Fixture replacements and small renovations",
      "Older home plumbing concerns"
    ],
    included: [
      "Troubleshooting and clear recommendations",
      "Repairs, replacements, and tidy installations",
      "Fixture, valve, and supply line work",
      "Helpful advice for preventing repeat issues"
    ]
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    shortTitle: "Drains",
    icon: Droplets,
    summary:
      "Slow drains, kitchen clogs, and recurring backups cleared with practical next steps.",
    intro:
      "Slow drains and backups can turn stressful quickly. Grove clears the issue and helps you understand what caused it.",
    problems: [
      "Kitchen, bathroom, and laundry clogs",
      "Slow tubs, showers, and sinks",
      "Backups and unpleasant drain smells",
      "Recurring drainage problems"
    ],
    included: [
      "Drain assessment and clearing",
      "Practical maintenance recommendations",
      "Support for urgent backups",
      "Straightforward next steps for deeper issues"
    ]
  },
  {
    slug: "water-heater-repair-installation",
    title: "Water Heater Repair & Installation",
    shortTitle: "Water Heaters",
    icon: Heater,
    summary:
      "No hot water, leaking tanks, and replacement installs for reliable hot water again.",
    intro:
      "Whether you have no hot water or an aging tank, Grove can help you choose the right next step for your home.",
    problems: [
      "No hot water or inconsistent temperature",
      "Leaking tanks or valves",
      "Older systems nearing replacement",
      "Pilot light and performance concerns"
    ],
    included: [
      "Water heater troubleshooting",
      "Repair recommendations where sensible",
      "Tank replacement and installation planning",
      "Guidance on capacity and efficiency"
    ]
  },
  {
    slug: "heating-services",
    title: "Heating Services",
    shortTitle: "Heating",
    icon: Home,
    summary:
      "Cold rooms, noisy systems, and heating repairs to keep your home comfortable.",
    intro:
      "Grove brings practical heating support for homeowners who want clear answers and steady service.",
    problems: [
      "Heating performance concerns",
      "Unusual sounds or uneven warmth",
      "Maintenance and seasonal checks",
      "System troubleshooting"
    ],
    included: [
      "Heating system assessment",
      "Repair and maintenance support",
      "Clear options before work begins",
      "Friendly help for older homes and systems"
    ]
  },
  {
    slug: "gas-fitting",
    title: "Gas Fitting",
    shortTitle: "Gas Fitting",
    icon: Flame,
    summary:
      "Licensed gas line installs, appliance hookups, and safety checks for home upgrades.",
    intro:
      "Gas work needs proper experience and attention. Grove supports safe, licensed gas fitting for local homeowners.",
    problems: [
      "Gas appliance connections",
      "Gas line changes or additions",
      "Outdoor gas hookups",
      "Safety concerns and service planning"
    ],
    included: [
      "Licensed gas fitting work",
      "Appliance connection support",
      "Clear safety-minded recommendations",
      "Coordination for planned upgrades"
    ]
  },
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumbing",
    shortTitle: "Emergency",
    icon: PhoneCall,
    summary:
      "Urgent leaks, backups, and no-hot-water calls with fast local response.",
    intro:
      "When plumbing problems cannot wait, Grove makes it easy to call and request urgent help.",
    problems: [
      "Burst pipes and active leaks",
      "Drain backups",
      "No hot water",
      "Overflowing toilets or urgent fixture issues"
    ],
    included: [
      "Urgent triage by phone",
      "Priority service requests",
      "Temporary protection where needed",
      "Follow-up repair recommendations"
    ]
  }
];

export const serviceAreas = [
  {
    slug: "ladner",
    name: "Ladner",
    intro:
      "Local plumbing, heating, gas, and drain service for Ladner homes, townhomes, and small properties.",
    nearby: "Tsawwassen, North Delta, Tilbury, and South Delta"
  },
  {
    slug: "tsawwassen",
    name: "Tsawwassen",
    intro:
      "Friendly, dependable service for Tsawwassen homeowners who want clear communication and tidy work.",
    nearby: "Ladner, Boundary Bay, Beach Grove, and North Delta"
  },
  {
    slug: "north-delta",
    name: "North Delta",
    intro:
      "Practical plumbing and mechanical support for North Delta homes, from repairs to urgent service requests.",
    nearby: "Ladner, Tsawwassen, Sunshine Hills, and Delta"
  }
];

export const testimonials = [
  {
    name: "Sarah M.",
    location: "Ladner",
    quote:
      "A leaking shutoff under our kitchen sink was soaking the cabinet. Grove fixed it the same afternoon and everything has stayed dry since."
  },
  {
    name: "Rob T.",
    location: "Tsawwassen",
    quote:
      "Our kitchen drain kept clogging every few weeks. They cleared the blockage properly, explained what caused it, and it has drained normally ever since."
  },
  {
    name: "Jennifer L.",
    location: "North Delta",
    quote:
      "We had no hot water two days before family arrived. Grove walked us through options and replaced the tank quickly, so we were back to normal by the next evening."
  }
];

export const homeFaqs = [
  {
    question: "What areas do you serve?",
    answer:
      "Grove serves Ladner, Tsawwassen, North Delta, and nearby South Delta communities."
  },
  {
    question: "Can I request service online?",
    answer:
      "Yes. Request service online, choose your preferred date and time, and Grove will follow up to confirm your appointment."
  },
  {
    question: "Do you handle heating and gas work too?",
    answer:
      "Yes. Grove supports plumbing, drains, water heaters, heating, gas fitting, and urgent plumbing issues."
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Grove provides licensed and insured work with Red Seal certified experience."
  }
];

export const whyGrove = [
  {
    title: "Local Service You Can Rely On",
    body:
      "A grounded South Delta presence with service built around real homes, real schedules, and clear communication."
  },
  {
    title: "Practical Recommendations",
    body:
      "Straightforward options before work begins, so homeowners understand the fix and the next step."
  },
  {
    title: "Certified Experience",
    body:
      "Licensed and insured work backed by Red Seal certified experience across plumbing, heating, and gas."
  }
];

export const badgeIcon = ShieldCheck;
