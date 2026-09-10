export interface FAQItem {
  id: string;
  category: "General" | "Construction" | "Real Estate" | "Materials" | "Quotes and Process";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "gen-1",
    category: "General",
    question: "What are the primary business areas of GG Construction Co.?",
    answer: "GG Construction Co. operates across three practical, customer-focused areas: 1) Building Materials Supply (our primary business — dealing in cement, TMT steel, bricks, sand, aggregates, plumbing, and electrical supplies); 2) Building Construction (our secondary business — constructing small to medium buildings such as residential homes, shops, and offices up to 4–5 floors); and 3) Real Estate Sales & Property Assistance (assisting buyers and sellers with property marketing, site visits, and transactions).",
  },
  {
    id: "gen-2",
    category: "General",
    question: "Where does GG Construction Co. operate and how can I contact the business?",
    answer: "We primarily serve Delhi NCR and surrounding regional areas [VERIFY SPECIFIC COVERAGE CITIES]. You can reach us directly by phone at +91 98110 34825 or by email at gunjan29gupta@gmail.com.",
  },
  {
    id: "gen-3",
    category: "General",
    question: "Can I buy building materials from you without hiring you for construction?",
    answer: "Yes, absolutely. Building Materials Supply is our primary business. Contractors, individual homebuilders, and commercial owners regularly purchase cement, TMT steel, bricks, sand, and other building supplies from us independently.",
  },
  {
    id: "mat-1",
    category: "Materials",
    question: "What building materials do you supply?",
    answer: "We supply a comprehensive range of construction materials including Cement (OPC 43/53 and PPC), TMT Reinforcement Steel (Fe 500 / Fe 500D), Red Clay Bricks and AAC Blocks, Screened Concrete Sand and Plaster Sand, Crushed Stone Aggregates (10mm, 20mm, 40mm), CPVC & UPVC Plumbing Pipes, Electrical Wires & Conduits, Waterproofing Chemicals, and Shuttering Plywood.",
  },
  {
    id: "mat-2",
    category: "Materials",
    question: "Do you deliver building materials directly to the construction plot?",
    answer: "Yes, we coordinate direct site delivery using local trucks, tippers, and tractor trolleys. We ensure prompt scheduling so your workers and masonry crews are never left waiting on site.",
  },
  {
    id: "mat-3",
    category: "Materials",
    question: "What are the minimum order quantities for materials?",
    answer: "We accommodate both bulk contractor orders and smaller lots for individual house builders. For example, cement can be ordered from 50 bags upwards, TMT steel from 1 tonne, and sand or aggregates by the truckload or tractor trolley.",
  },
  {
    id: "mat-4",
    category: "Materials",
    question: "How are material rates and prices determined?",
    answer: "Material prices (especially TMT steel and cement) fluctuate according to regional market conditions. Contact us directly at +91 98110 34825 for current daily prices, truckload discounts, and delivery charges.",
  },
  {
    id: "con-1",
    category: "Construction",
    question: "What scale of building construction does GG Construction Co. undertake?",
    answer: "We focus specifically on small to medium-sized building construction. The typical scale of our work includes residential houses, independent 3–4 floor builder buildings, commercial shops, small office buildings, low-rise mixed-use buildings (up to approximately 4–5 floors maximum), and building renovations. We do not undertake skyscrapers, large industrial complexes, or major infrastructure projects.",
  },
  {
    id: "con-2",
    category: "Construction",
    question: "What construction services do you provide for a 3–4 floor building?",
    answer: "We handle complete building construction: foundation excavation, RCC column-beam framing, slab casting, red brick or AAC block masonry, internal and external plastering, electrical and plumbing coordination, waterproofing, and basic architectural finishing.",
  },
  {
    id: "con-3",
    category: "Construction",
    question: "Can GG Construction Co. help with upper floor additions or renovation work?",
    answer: "Yes, we regularly undertake renovation, remodeling, and vertical floor additions (such as adding a 3rd or 4th floor to an existing residential building), ensuring careful structural assessment, lightweight block usage, and terrace waterproofing.",
  },
  {
    id: "con-4",
    category: "Construction",
    question: "How is construction work supervised on site?",
    answer: "Every active project receives dedicated, experienced site supervision. We monitor concrete mixing ratios, rebar placement, brick masonry alignment, and curing periods personally, ensuring quality building practices from start to finish.",
  },
  {
    id: "re-1",
    category: "Real Estate",
    question: "Is GG Construction Co. a property developer or a property sales & brokerage service?",
    answer: "We operate as a practical real estate sales assistance and property marketing service. We assist property buyers and owners with property enquiries, marketing, and buyer-seller coordination. We do not claim to be a large-scale corporate property developer unless verified for a specific project.",
  },
  {
    id: "re-2",
    category: "Real Estate",
    question: "Are all properties listed on the website built by GG Construction Co.?",
    answer: "No. Each property listing clearly specifies its nature: whether it is marketed on behalf of an independent owner or developer, an external property opportunity, or constructed by GG Construction Co. We maintain clear transparency about property origin.",
  },
  {
    id: "re-3",
    category: "Real Estate",
    question: "How do you assist buyers looking for plots, floors, or commercial shops?",
    answer: "We help prospective buyers schedule physical property visits, verify basic ownership documents, negotiate fair pricing directly with sellers, and coordinate documentation for a smooth, transparent transaction.",
  },
  {
    id: "qp-1",
    category: "Quotes and Process",
    question: "How can I request a quote for building materials or construction work?",
    answer: "You can submit an enquiry through our website contact form, call us at +91 98110 34825, or email gunjan29gupta@gmail.com with your required material list, plot size, or building requirements. We will review your details and provide a practical estimate.",
  },
  {
    id: "qp-2",
    category: "Quotes and Process",
    question: "How do payments work for building materials and construction work?",
    answer: "Building materials are supplied against transparent delivery challans and agreed commercial payment terms. Construction contracts follow standard stage-wise progress milestones (e.g., foundation, plinth, slab casting, brickwork, and handover).",
  },
];
