export type BlogCategory =
  | "Building Materials"
  | "Construction Guidance"
  | "Property Buying Tips";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  publishedDate: string;
  authorNamePlaceholder: string;
  authorRole: string;
  heroImage: string;
  content: {
    heading: string;
    paragraphs: string[];
    callout?: string;
  }[];
  tags: string[];
}

export const blogPostsData: BlogPost[] = [
  {
    slug: "how-to-choose-tmt-steel-for-house-construction",
    title: "How to Choose TMT Steel for House Construction: Understanding Fe 500 vs. Fe 500D",
    excerpt: "A practical guide for homebuilders and contractors on selecting reinforcement steel bars, understanding ductility, and checking weight and rib patterns before site delivery.",
    category: "Building Materials",
    readTime: "5 min read",
    publishedDate: "October 14, 2024",
    authorNamePlaceholder: "[GG CONSTRUCTION CO. MATERIALS TEAM]",
    authorRole: "Building Materials & Supply Division",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    tags: ["TMT Steel", "Fe 500D", "House Construction", "Building Materials", "Structural Safety"],
    content: [
      {
        heading: "What Does Fe 500D Mean?",
        paragraphs: [
          "When shopping for reinforcement steel for your house columns, beams, and slabs, you will encounter designations like Fe 500 and Fe 500D. 'Fe' stands for iron, and '500' indicates that the steel can withstand a minimum yield stress of 500 Newtons per square millimeter.",
          "The letter 'D' stands for Ductility. High ductility means the steel can stretch and bend significantly before snapping. In earthquake-prone zones like Northern India (Delhi NCR and surrounding regions), ductile steel allows a building to absorb seismic vibrations safely without sudden brittle collapse.",
        ],
        callout: "Fe 500D requires a minimum elongation of 16% under IS 1786 specifications, compared to 12% for standard Fe 500.",
      },
      {
        heading: "Key Things to Check at the Time of Delivery",
        paragraphs: [
          "1. Brand Stamp & Grade: Ensure every rebar has the manufacturer brand name and 'Fe 500D' embossed continuously along its length.",
          "2. Distinct Rib Pattern: Look for clean, sharp, uniform ribs. Ribs provide mechanical interlocking with concrete; smooth or flattened ribs weaken bonding.",
          "3. Fresh Surface: Rebars should have clean dark steel surfaces or light surface patina. Avoid heavily corroded bars with flaking rust scales.",
          "4. Standard Weight Checking: We recommend weighing sample 1-meter lengths or full bundles at a certified weighbridge to verify that the weight matches standard IS tolerances.",
        ],
      },
      {
        heading: "Proper Site Storage",
        paragraphs: [
          "Always store steel rebars off the ground using timber battens or concrete supports. Keep them covered with waterproof tarpaulins to protect them from rain and ground moisture, especially if construction will take several months.",
        ],
      },
    ],
  },
  {
    slug: "which-cement-is-suitable-for-house-construction",
    title: "Which Cement is Suitable for a House? When to Use OPC 53 vs. PPC",
    excerpt: "Understanding the right cement grade for roof slabs, foundation footings, brick masonry, and wall plaster to avoid cracks and optimize building costs.",
    category: "Building Materials",
    readTime: "5 min read",
    publishedDate: "November 02, 2024",
    authorNamePlaceholder: "[GG CONSTRUCTION CO. MATERIALS TEAM]",
    authorRole: "Building Materials Supply",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
    tags: ["Cement Selection", "OPC 53", "PPC Cement", "Slab Casting", "Plastering"],
    content: [
      {
        heading: "Understanding the Two Main Cement Types",
        paragraphs: [
          "One of the most common questions when building a 2 to 4-storey house is whether to use Ordinary Portland Cement (OPC) or Portland Pozzolana Cement (PPC). Both are excellent products, but each serves distinct stages of construction.",
          "OPC 53 develops compressive strength rapidly in the first 7 to 14 days, allowing formwork and shuttering to be stripped on schedule. PPC gains strength progressively over 28 to 90 days, producing a dense, cohesive paste with low heat generation.",
        ],
        callout: "Rule of thumb: OPC 53 for structural RCC (columns, beams, slabs); PPC for brickwork, wall plastering, and wet area waterproofing.",
      },
      {
        heading: "Why PPC is Better for Brick Masonry & Plaster",
        paragraphs: [
          "When plastering walls or laying bricks, rapid hardening is actually a disadvantage because fast hydration can cause shrinkage hairline cracks. PPC contains fine pozzolanic material (flyash) that makes the mortar more workable, improves smooth spreadability, and drastically reduces capillary water absorption.",
        ],
      },
      {
        heading: "Freshness and Storage",
        paragraphs: [
          "Never purchase cement that has been sitting in a humid warehouse for more than 2 to 3 months. Fresh cement feels silky and cool to the touch without hard lumps. Always check the manufacturing week and year printed on the bag side seam.",
        ],
      },
    ],
  },
  {
    slug: "brick-vs-aac-block-construction-guide",
    title: "Red Brick vs. AAC Block: Which is Better for Your 3–4 Floor Building?",
    excerpt: "Comparing traditional red clay bricks and lightweight autoclaved aerated concrete (AAC) blocks on material cost, thermal comfort, masonry speed, and foundation dead weight.",
    category: "Construction Guidance",
    readTime: "6 min read",
    publishedDate: "November 20, 2024",
    authorNamePlaceholder: "[GG CONSTRUCTION CO. SITE TEAM]",
    authorRole: "Building Construction Division",
    heroImage: "https://images.unsplash.com/photo-1584463699026-df06a5e1c0c6?auto=format&fit=crop&w=1600&q=80",
    tags: ["Red Bricks", "AAC Blocks", "Wall Masonry", "House Construction", "Cost Comparison"],
    content: [
      {
        heading: "The Changing Landscape of Wall Masonry",
        paragraphs: [
          "For decades, kiln-fired red clay bricks have been the default wall building material across India. However, lightweight Autoclaved Aerated Concrete (AAC) blocks are now widely adopted for low-rise and medium-rise residential and commercial buildings up to 4–5 floors.",
          "Understanding the structural and cost differences helps you make an informed decision for your plot.",
        ],
        callout: "AAC blocks are roughly 50% lighter than clay bricks, reducing structural dead load on foundation footings and RCC columns.",
      },
      {
        heading: "Comparison Across Key Factors",
        paragraphs: [
          "1. Weight & Foundation Load: A standard red brick weighs approximately 3 to 3.5 kg. A single 8-inch AAC block replaces several bricks while weighing nearly half as much per square foot of wall area, making it ideal when adding an upper floor to an existing building.",
          "2. Mortar Savings: Red bricks require 12mm to 15mm thick cement-sand mortar joints. Precision AAC blocks use 2mm to 3mm thin-bed polymer adhesive, reducing cement and sand hauling costs substantially.",
          "3. Thermal Insulation: AAC blocks have tiny closed air pockets that provide superior thermal insulation, keeping rooms noticeably cooler during hot summers.",
          "4. Structural Use: For load-bearing walls without concrete columns, first-class red bricks are essential. For framed column-beam structures, AAC blocks provide faster, cleaner walling.",
        ],
      },
      {
        heading: "The Bottom Line",
        paragraphs: [
          "If you are constructing a standard RCC framed structure of 3 to 4 floors, AAC blocks provide speed, lower plaster costs, and excellent insulation. If you are doing boundary walls or prefer traditional high-density masonry, first-class red clay bricks remain a dependable option.",
        ],
      },
    ],
  },
  {
    slug: "things-to-check-before-buying-property-checklist",
    title: "Things to Check Before Buying a Property: Essential Due Diligence Checklist",
    excerpt: "Practical steps to verify title ownership, registry documents, encumbrance certificates, and physical plot boundaries before finalizing a deal.",
    category: "Property Buying Tips",
    readTime: "7 min read",
    publishedDate: "December 15, 2024",
    authorNamePlaceholder: "[GG CONSTRUCTION CO. PROPERTY DESK]",
    authorRole: "Real Estate Sales & Coordination",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    tags: ["Property Checklist", "Real Estate Advice", "Title Due Diligence", "Registry", "Buyer Guide"],
    content: [
      {
        heading: "Why Verification Matters Before Any Advance Payment",
        paragraphs: [
          "Purchasing a residential plot, independent builder floor, or commercial shop is a major life decision. Many first-time buyers rush into paying token money without basic document verification.",
          "At GG Construction Co., our property sales and coordination desk assists buyers in verifying clear documentation and connecting directly with genuine owners and developers.",
        ],
        callout: "Never pay an advance without verifying the original title deed chain and an updated Encumbrance Certificate (EC).",
      },
      {
        heading: "Essential Document Checklist",
        paragraphs: [
          "1. Title Deed & Chain of Ownership: Check the registered sale deed and track prior ownership for at least 15 to 30 years to verify unbroken title transfer.",
          "2. Encumbrance Certificate (EC): Form 15 or an updated EC from the sub-registrar office confirms that the property has no existing bank mortgages, court attachments, or legal disputes.",
          "3. Sanctioned Building Plan: If buying a ready floor or flat, ensure the construction matches the sanctioned municipal plan without illegal floor extensions.",
          "4. Tax Receipts & Utilities: Check the latest property tax receipt, electricity bill, and water bill in the seller's name with zero arrears.",
        ],
      },
      {
        heading: "Physical Site Inspection",
        paragraphs: [
          "Always inspect the physical site in person. Verify that the plot boundary stones, road access width, and adjacent neighbors match what is written in the sale deed schedule.",
        ],
      },
    ],
  },
];
