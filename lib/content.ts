import {
  Flame,
  Heater,
  Home,
  PhoneCall,
  ShieldCheck,
  ShowerHead,
  Droplets,
  Wrench
} from "lucide-react";

export const phoneNumber = "(604) 555-0198";
export const emailAddress = "hello@groveplumbing.ca";

export const trustSignals = [
  "Licensed and insured",
  "Red Seal certified",
  "Local and family-owned",
  "Serving South Delta"
];

export const services = [
  {
    slug: "plumbing-services",
    title: "Plumbing Services",
    shortTitle: "Plumbing",
    icon: Wrench,
    summary:
      "Reliable repairs, replacements, and fixture installations for South Delta homes.",
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
      "Help for slow drains, clogs, backups, and recurring drainage issues.",
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
      "Repair, replacement, and installation support when hot water becomes unreliable.",
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
      "Home heating support, repairs, and maintenance for dependable comfort.",
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
      "Licensed gas line and appliance connection work handled with care.",
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
      "Urgent help for leaks, bursts, backups, and no-hot-water situations.",
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
      "Grove sorted out a leaking shutoff and explained exactly what was going on. The work was clean, quick, and easy to understand."
  },
  {
    name: "Rob T.",
    location: "Tsawwassen",
    quote:
      "We had a slow kitchen drain that kept coming back. They cleared it properly and gave us useful advice instead of a sales pitch."
  },
  {
    name: "Jennifer L.",
    location: "North Delta",
    quote:
      "Our water heater quit on a busy week. Grove helped us understand the options and got the replacement handled professionally."
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
      "Yes. Use the request service flow to share the problem, choose a preferred date and time window, and Grove will follow up to confirm."
  },
  {
    question: "Do you handle heating and gas work too?",
    answer:
      "Yes. Grove supports plumbing, drains, water heaters, heating, gas fitting, and urgent plumbing issues."
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. The demo highlights licensed and insured work, along with Red Seal certified experience."
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
