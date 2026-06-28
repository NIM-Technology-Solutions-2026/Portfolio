/**
 * All editable site content lives here. Replace these exports with
 * database / CMS / API calls later without touching any UI component.
 */

export const company = {
  name: "NIM Technology Solutions",
  shortName: "NIM",
  // New brand tagline (encodes the two core values: quality + service)
  tagline: "Engineered for quality. Built around service.",
  email: "nimtechsol@gmail.com",
  phone: "+91 9309873430",
  address:
    "Plot 6, Tulsi Nagar, Kalwaghe Layout, Buldhana 443001, Maharashtra, India",
  addressLines: [
    "Plot 6, Tulsi Nagar, Kalwaghe Layout",
    "Buldhana 443001, Maharashtra, India",
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "5", label: "Cities running our GIS platform" },
  { value: "100%", label: "Custom-built, never templated" },
  { value: "2", label: "Sectors served — government & private" },
  { value: "End-to-end", label: "Build, deploy, and support" },
];

export const services = [
  {
    id: "01",
    title: "Custom Software Development",
    body: "Bespoke systems designed around your exact workflow — not off-the-shelf software you have to bend your process to fit.",
  },
  {
    id: "02",
    title: "Web Application Development",
    body: "Fast, secure, scalable web platforms and internal tools built on modern, maintainable foundations.",
  },
  {
    id: "03",
    title: "Mobile App Development",
    body: "Native and cross-platform apps for Android and iOS, designed for real-world reliability in the field.",
  },
  {
    id: "04",
    title: "Government & Public-Sector Systems",
    body: "Citizen-facing portals and administrative platforms built to the security and accountability standards public bodies require.",
  },
  {
    id: "05",
    title: "Enterprise & ERP Systems",
    body: "Integrated systems that connect finance, operations, and people across the whole organisation.",
  },
  {
    id: "06",
    title: "Cloud & DevOps",
    body: "Cloud architecture, deployment automation, and infrastructure that keeps your systems available and cost-aware.",
  },
  {
    id: "07",
    title: "API Development & Integration",
    body: "We connect your systems to payment gateways, identity providers, and third-party services through clean, documented APIs.",
  },
  {
    id: "08",
    title: "Data Engineering & Analytics",
    body: "Database design, reporting dashboards, and MIS that turn raw operational data into decisions.",
  },
  {
    id: "09",
    title: "Cybersecurity & Compliance",
    body: "Secure-by-design development, access control, audit trails, and data-protection practices from day one.",
  },
  {
    id: "10",
    title: "AI & Machine Learning",
    body: "Practical AI — document processing, prediction, and automation applied where it measurably saves time.",
  },
  {
    id: "11",
    title: "UI / UX Design",
    body: "Interfaces that ordinary people and busy officials can use without training.",
  },
  {
    id: "12",
    title: "Maintenance & Support",
    body: "Ongoing service, monitoring, and SLAs — because a system is only as good as the support behind it.",
  },
];

export const industries = [
  {
    name: "Government & Public Sector",
    body: "Citizen services, scheme administration, and internal platforms built for accountability.",
  },
  {
    name: "Insurance",
    body: "Policy, premium, and claims systems that handle real money with full audit trails.",
  },
  {
    name: "Banking & Financial Services",
    body: "Secure, compliant tools for institutions where trust is non-negotiable.",
  },
  {
    name: "Healthcare",
    body: "Records, scheduling, and care-coordination systems that protect sensitive data.",
  },
  {
    name: "Education",
    body: "Administration, enrollment, and learning platforms for institutions of any size.",
  },
  {
    name: "Manufacturing",
    body: "Operations, inventory, and process systems that keep production moving.",
  },
  {
    name: "Retail & E-commerce",
    body: "Storefronts, order management, and analytics that scale with demand.",
  },
  {
    name: "Logistics & Supply Chain",
    body: "Tracking, routing, and coordination across complex, moving operations.",
  },
];

export const whyUs = [
  {
    title: "Quality you can audit",
    body: "Clean code, documentation, and testing on every build — so the system holds up long after launch.",
  },
  {
    title: "Service that does not stop at delivery",
    body: "We stay on after go-live with monitoring, updates, and support your team can actually reach.",
  },
  {
    title: "Proven in the public sector",
    body: "Our GIS platform runs live across five cities, handling real citizens, real money, and real accountability.",
  },
  {
    title: "Security and compliance first",
    body: "Access control, audit trails, and data protection are built in from the first commit, not bolted on later.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We learn your workflow, constraints, and goals before writing a line of code.",
  },
  {
    step: "02",
    title: "Design",
    body: "Architecture, data model, and interface are planned and signed off with you.",
  },
  {
    step: "03",
    title: "Build",
    body: "We develop in reviewable increments so you see progress, not a black box.",
  },
  {
    step: "04",
    title: "Deploy",
    body: "Tested, secured, and rolled out — to one site or many — with zero-surprise launches.",
  },
  {
    step: "05",
    title: "Support",
    body: "We maintain, monitor, and improve the system under a clear service agreement.",
  },
];

export const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Java", ".NET",
  "PostgreSQL", "MySQL", "MongoDB", "REST & GraphQL", "AWS", "Azure",
  "Docker", "Kubernetes", "React Native",
];

export const commitments = [
  {
    title: "Secure development lifecycle",
    body: "Security reviewed at every stage — from design and code review to deployment hardening.",
  },
  {
    title: "Data protection & privacy",
    body: "Sensitive citizen and business data handled with encryption, access control, and clear retention rules.",
  },
  {
    title: "Auditability & accountability",
    body: "Every critical action is logged, traceable, and reportable for inspection.",
  },
];

// Replace with real client feedback before launch.
export const testimonials = [
  {
    quote:
      "The platform handles our scheme end to end, and the team is reachable whenever we need them. Replace this with your real client quote.",
    name: "Project Lead",
    role: "Municipal GIS Programme (sample placeholder)",
  },
  {
    quote:
      "Delivery was on time and the system has been dependable since launch. Replace this with your real client quote.",
    name: "Department Head",
    role: "Government Organisation (sample placeholder)",
  },
];

export type Project = {
  slug: string;
  name: string;
  short: string;
  sector: string;
  summary: string;
  highlights: { label: string; value: string }[];
  features: string[];
};

// Add future projects by appending objects here — the listing page and
// detail pages update automatically.
export const projects: Project[] = [
  {
    slug: "government-insurance-scheme",
    name: "Government Insurance Scheme (GIS) Platform",
    short: "GIS Platform",
    sector: "Government · Insurance",
    summary:
      "Five city governments adopted our GIS platform to run their public insurance schemes end to end. Each deployment was custom built to that organisation, while sharing one secure, maintained core — so improvements reach every city.",
    highlights: [
      { label: "Cities deployed", value: "5" },
      { label: "Build type", value: "Custom" },
      { label: "Sector", value: "Government" },
    ],
    features: [
      "Beneficiary enrollment with identity verification (KYC)",
      "Policy and scheme management across multiple programmes",
      "Premium collection with integrated payment gateways",
      "Claims intake, review, and multi-level approval workflows",
      "Role-based access for officials, clerks, and administrators",
      "Document upload, verification, and secure storage",
      "Live dashboards and MIS reports for decision-makers",
      "Full audit trails and compliance logging",
      "Multi-city architecture from a single, shared codebase",
      "Automated SMS and email notifications",
      "Grievance and support module for citizens",
      "Government-grade data security and access control",
    ],
  },
];
