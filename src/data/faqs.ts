export interface FAQItem {
  id: string;
  category: "General" | "Construction" | "Quotes and Process";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "gen-1",
    category: "General",
    question: "What is the primary business of GG Construction Co.?",
    answer:
      "GG Construction Co. is strictly a building construction company. We specialize in low-rise construction projects including residential homes, builder floors, shops, small offices, and building renovations up to approximately 4–5 floors.",
  },
  {
    id: "gen-2",
    category: "General",
    question: "Where has GG Construction Co. completed construction projects?",
    answer:
      "GG Construction Co. has carried out construction work across Rohini, Pitampura and nearby areas of Delhi. You can reach our team directly at +91 98110 34825 or by email at gunjan29gupta@gmail.com.",
  },
  {
    id: "gen-3",
    category: "General",
    question: "What is the maximum typical building height or scale you construct?",
    answer:
      "Our typical building scale is low-rise structures up to approximately 4–5 floors maximum (e.g., G+3 or G+4 floors). We focus on practical residential and small commercial buildings and do not undertake skyscrapers or large infrastructure megaprojects.",
  },
  {
    id: "con-1",
    category: "Construction",
    question: "What construction services do you provide for residential builder floors?",
    answer:
      "We provide complete building construction: soil compaction, foundation footing excavation, plinth beam casting with DPC, RCC column-beam framing, slab pours, red brick or AAC block masonry, electrical conduit routing, plumbing lines, cement plastering, and terrace waterproofing.",
  },
  {
    id: "con-2",
    category: "Construction",
    question: "How do you ensure structural concrete strength during slab casting?",
    answer:
      "We verify reinforcement rebar binding against structural specifications, ensure adequate concrete cover, use mechanical vibrators during pours, and enforce standard 14 to 21-day pond curing for optimal compressive strength.",
  },
  {
    id: "con-3",
    category: "Construction",
    question: "Can GG Construction Co. construct commercial shops and office spaces?",
    answer:
      "Yes. We construct low-rise commercial premises including ground-floor retail shops and upper-floor office floors designed for commercial floor loadings, wide shop frontages, and accessible stairs.",
  },
  {
    id: "con-4",
    category: "Construction",
    question: "Can you help with vertical floor additions or renovation work?",
    answer:
      "Yes. We regularly undertake structural floor additions (such as adding an upper floor to an existing residential building) and renovations. We evaluate existing foundations and often use lightweight AAC blocks to reduce dead-load on lower levels.",
  },
  {
    id: "con-5",
    category: "Construction",
    question: "How is construction supervised day to day on site?",
    answer:
      "Every active project receives dedicated on-site supervision. Our experienced site supervisor monitors rebar placement, concrete mixing ratios, brick alignment, and curing periods daily to ensure quality workmanship.",
  },
  {
    id: "qp-1",
    category: "Quotes and Process",
    question: "How can I request a quotation for building construction?",
    answer:
      "You can submit your project details through our website quotation form at /get-a-quote, call us directly at +91 98110 34825, or email gunjan29gupta@gmail.com. Provide your plot location, building dimensions, and stage of planning for a clear estimate.",
  },
  {
    id: "qp-2",
    category: "Quotes and Process",
    question: "How are construction payments and milestones structured?",
    answer:
      "We structure payments transparently around verified physical construction stages: foundation completion, plinth beam, individual floor slab pours, brick masonry, plastering, and final handover. You only pay as physical work advances on site.",
  },
  {
    id: "qp-3",
    category: "Quotes and Process",
    question: "What documents or drawings do I need before starting construction?",
    answer:
      "Having sanctioned architectural drawings and structural floor plans allows us to prepare an accurate, itemized estimate. If you are in early concept planning, we can review your plot dimensions and outline preliminary civil cost ranges.",
  },
];
