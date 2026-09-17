export type BlogCategory = "Construction Guidance";

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
    title: "Structural Steel Inspection for House Construction: Understanding Fe 500 vs. Fe 500D",
    excerpt:
      "A practical guide for homebuilders on selecting reinforcement steel bars, understanding ductility in earthquake zones, and checking rib patterns before pouring concrete.",
    category: "Construction Guidance",
    readTime: "5 min read",
    publishedDate: "October 14, 2024",
    authorNamePlaceholder: "[GG CONSTRUCTION CO. SITE TEAM]",
    authorRole: "Construction Supervision Team",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    tags: ["TMT Steel", "Fe 500D", "House Construction", "Structural Safety"],
    content: [
      {
        heading: "What Does Fe 500D Mean in House Construction?",
        paragraphs: [
          "When planning reinforcement steel for your residential columns, beams, and roof slabs, you will encounter designations like Fe 500 and Fe 500D. 'Fe' stands for iron, and '500' indicates that the steel withstands a minimum yield stress of 500 Newtons per square millimeter.",
          "The letter 'D' stands for Ductility. High ductility means the rebar can absorb bending strain before failure. In seismic regions like Northern India (Delhi NCR and surrounding areas), ductile steel enables a building frame to absorb lateral vibrations without sudden brittle failure.",
        ],
        callout:
          "Fe 500D requires a minimum elongation of 16% under IS 1786 specifications, providing essential flexibility for framed low-rise buildings.",
      },
      {
        heading: "Site Quality Checks Before Pouring Concrete",
        paragraphs: [
          "1. Brand Stamp & Grade: Ensure every rebar has the manufacturer brand name and 'Fe 500D' embossed continuously along its length.",
          "2. Distinct Rib Pattern: Look for clean, sharp, uniform ribs that mechanically lock into concrete. Flattened ribs reduce bonding strength.",
          "3. Proper Binding Wire: Rebars at column and beam junctions must be securely tied with 18-gauge annealed binding wire to keep reinforcement in place during mechanical vibration.",
          "4. Concrete Cover Detailing: Maintain proper concrete cover under slab and beam rebar mats per IS 456 to prevent exposed steel from corrosion.",
        ],
      },
      {
        heading: "Site Storage & Protection",
        paragraphs: [
          "Store steel rebars raised above damp ground using timber battens, and keep them sheltered with waterproof covers to prevent excessive rust scaling prior to casting.",
        ],
      },
    ],
  },
  {
    slug: "which-cement-is-suitable-for-house-construction",
    title: "Which Cement Grade is Suitable for Residential Construction? When to Use OPC 53 vs. PPC",
    excerpt:
      "Understanding the right cement grade for roof slabs, foundation footings, brick masonry, and wall plaster to avoid cracks and build durably.",
    category: "Construction Guidance",
    readTime: "5 min read",
    publishedDate: "November 02, 2024",
    authorNamePlaceholder: "[GG CONSTRUCTION CO. SITE TEAM]",
    authorRole: "Construction Supervision Team",
    heroImage:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
    tags: ["Cement Selection", "OPC 53", "PPC Cement", "Slab Casting", "Plastering"],
    content: [
      {
        heading: "Understanding Cement Grades in Building Construction",
        paragraphs: [
          "One of the most frequent technical questions when constructing a 3 to 4-storey residential building is whether to use Ordinary Portland Cement (OPC) or Portland Pozzolana Cement (PPC). Both serve vital roles at different construction stages.",
          "OPC 53 develops compressive strength rapidly in the first 7 to 14 days, allowing structural column formwork to be removed on schedule. PPC gains strength progressively over 28 to 90 days, creating a dense, impermeable matrix with lower hydration heat.",
        ],
        callout:
          "Practical rule of thumb: OPC 53 for early-strength structural columns and beams; PPC for dense slab casting, brick masonry, and exterior weather plaster.",
      },
      {
        heading: "Why PPC Helps Prevent Plaster Hairline Cracks",
        paragraphs: [
          "When plastering walls or laying brick masonry, rapid hydration is actually a drawback because fast moisture evaporation creates drying shrinkage cracks. PPC contains fine pozzolanic material that improves workability, spreads smoothly, and dramatically reduces capillary water absorption.",
        ],
      },
      {
        heading: "Disciplined Water Curing",
        paragraphs: [
          "Regardless of cement grade, no concrete can reach its design strength without adequate moisture. Maintain continuous pond curing on roof slabs for at least 14 to 21 days.",
        ],
      },
    ],
  },
  {
    slug: "brick-vs-aac-block-construction-guide",
    title: "Red Brick vs. AAC Block: Which is Better for Your 3–4 Floor Building?",
    excerpt:
      "Comparing traditional kiln-fired red clay bricks and lightweight AAC blocks on structural dead load, thermal comfort, masonry speed, and foundation performance.",
    category: "Construction Guidance",
    readTime: "6 min read",
    publishedDate: "November 20, 2024",
    authorNamePlaceholder: "[GG CONSTRUCTION CO. SITE TEAM]",
    authorRole: "Construction Supervision Team",
    heroImage:
      "/images/construction-site.jpg",
    tags: ["Red Bricks", "AAC Blocks", "Wall Masonry", "House Construction", "Structural Framing"],
    content: [
      {
        heading: "Wall Masonry in Low-Rise Framed Structures",
        paragraphs: [
          "For decades, kiln-fired red clay bricks have been traditional in Delhi NCR. Today, lightweight Autoclaved Aerated Concrete (AAC) blocks are widely utilized for low-rise residential and commercial buildings up to 4–5 floors.",
          "Understanding the structural characteristics of both materials helps property owners choose the right solution for their plot and floor plans.",
        ],
        callout:
          "AAC blocks are roughly 50% lighter than clay bricks, substantially reducing structural dead load on foundation footings and RCC columns.",
      },
      {
        heading: "Comparison Across Practical Construction Factors",
        paragraphs: [
          "1. Weight & Foundation Load: A single standard red brick weighs approximately 3 to 3.5 kg. Precision AAC blocks replace multiple bricks at half the weight per square foot of wall area, making them ideal when adding an upper floor to an existing building.",
          "2. Mortar Joint Thickness: Red bricks require 12mm to 15mm thick cement-sand mortar joints. Precision AAC blocks use 2mm to 3mm thin-bed polymer adhesive, resulting in cleaner wall joints.",
          "3. Thermal Insulation: Closed air pockets in AAC blocks provide superior thermal resistance, keeping interior rooms noticeably cooler during peak summer heat.",
          "4. Structural Application: For load-bearing walls without concrete columns, first-class red clay bricks are essential. For framed column-beam structures, AAC blocks provide faster, lighter partition walls.",
        ],
      },
      {
        heading: "The Bottom Line for Low-Rise Buildings",
        paragraphs: [
          "If you are constructing a modern RCC framed structure of 3 to 4 floors, AAC blocks provide speed, lower dead load, and excellent insulation. For boundary walls and high-density partition requirements, first-class red clay bricks remain a solid choice.",
        ],
      },
    ],
  },
];
