export interface FAQItem {
  id: string;
  category: "General" | "Construction" | "Real Estate" | "Materials" | "Quality & Compliance";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "gen-1",
    category: "General",
    question: "How do GG Construction Co.'s three business divisions work together?",
    answer: "GG Construction Co. integrates Construction & Engineering, Real Estate & Property Development, and Building Materials Supply under a unified corporate framework. By sourcing primary building materials through our direct-from-mill supply division, our construction teams avoid material shortages and price spikes, allowing us to deliver civil contracting and property development with superior structural quality, tighter timelines, and competitive pricing.",
  },
  {
    id: "gen-2",
    category: "General",
    question: "Where is GG Construction Co. headquartered and which geographies do you serve?",
    answer: "Our corporate headquarters and central design engineering offices are based in India [VERIFY PRIMARY CITY - e.g. New Delhi / Gurugram / Bengaluru], supported by regional operational nodes, material yards, and active project sites across key urban growth corridors.",
  },
  {
    id: "gen-3",
    category: "General",
    question: "Can clients engage one individual division without using the others?",
    answer: "Absolutely. Each division operates as a specialized center of excellence. A contractor can purchase bulk TMT steel and cement through our Materials division alone; an enterprise can hire our Construction division for an industrial EPC contract; or a homebuyer can purchase an apartment through our Real Estate division. The integration is an operational advantage, not a contractual limitation.",
  },
  {
    id: "con-1",
    category: "Construction",
    question: "What types of construction contracts does GG Construction Co. undertake?",
    answer: "We offer Turnkey EPC (Engineering, Procurement, and Construction), Item-Rate Civil Contracting, Lump-Sum Design-Build, and Project Management Consultancy (PMC). We specialize in commercial complexes, pre-engineered industrial plants, high-rise residential towers, and large-scale site developments.",
  },
  {
    id: "con-2",
    category: "Construction",
    question: "How does GG Construction Co. guarantee project delivery timelines?",
    answer: "We establish detailed Critical Path Method (CPM) schedules using BIM 4D modeling and Primavera P6 before ground-break. Weekly milestone audits, in-house material buffer stocks, and automated concrete equipment prevent traditional bottlenecks, backed by milestone-linked contractual commitments.",
  },
  {
    id: "con-3",
    category: "Construction",
    question: "Do you facilitate statutory municipal approvals and environmental clearances?",
    answer: "Yes, our Turnkey contracts include comprehensive coordination for statutory permits: town planning zoning clearance, fire safety NOC, environmental board consents (CTE/CTO), and local municipal corporation building sanction drawings.",
  },
  {
    id: "re-1",
    category: "Real Estate",
    question: "Are your real estate developments registered with RERA?",
    answer: "Yes, all real estate developments undertaken by GG Construction Co. comply strictly with Real Estate (Regulation and Development) Act (RERA) mandates. RERA registration numbers, approved master layouts, quarterly construction milestones, and escrow bank details are published transparently for every active project.",
  },
  {
    id: "re-2",
    category: "Real Estate",
    question: "What advantages do buyers get when purchasing from a builder with in-house engineering?",
    answer: "Most developers outsource construction to third-party general contractors who may cut corners to preserve margins. Because GG Construction Co. builds its own developments directly with our own civil engineers and lab-tested materials, buyers gain superior structural longevity, advanced acoustic insulation, zero-leakage waterproofing, and lifelong building safety.",
  },
  {
    id: "mat-1",
    category: "Materials",
    question: "What are the minimum order quantities (MOQ) for building materials?",
    answer: "Because we focus on contractor and institutional supply, minimum order quantities are typically full truckload (FTL): 500 bags (25 MT) for cement, 15 to 20 MT for primary TMT steel, and 16 MT (one tipper dumper) for M-Sand and coarse aggregates. Smaller lots can be accommodated for existing construction clients.",
  },
  {
    id: "mat-2",
    category: "Materials",
    question: "Do you supply factory manufacturer test certificates (MTC) with each shipment?",
    answer: "Yes, every consignment of TMT steel, cement, and chemical admixtures is accompanied by the manufacturer's original batch test certificate detailing chemical composition, yield strength, setting time, and elongation.",
  },
  {
    id: "mat-3",
    category: "Materials",
    question: "Can you supply high-grade TMT steel with seismic ductility (Fe 500D / 550D)?",
    answer: "Yes, we exclusively distribute high-ductility Fe 500D and Fe 550D primary steel from tier-one integrated steel plants, specifically designed for seismic resistance with minimum 16% total elongation.",
  },
  {
    id: "qc-1",
    category: "Quality & Compliance",
    question: "What on-site quality testing protocols are followed on your sites?",
    answer: "We operate on-site testing laboratories equipped for concrete slump tests, 7-day and 28-day concrete cube compressive strength crushing tests, aggregate sieve analysis, and moisture determination. All test logs are digitally archived and accessible to client project directors.",
  },
  {
    id: "qc-2",
    category: "Quality & Compliance",
    question: "What safety (EHS) standards are enforced across GG Construction Co. job sites?",
    answer: "We mandate strict zero-incident Environmental, Health, and Safety (EHS) protocols conforming to ISO 45001 standards. Every worker receives mandatory induction safety training, full PPE gear (helmets, steel-toe boots, double-lanyard harnesses), and daily toolbox safety briefings.",
  },
];
