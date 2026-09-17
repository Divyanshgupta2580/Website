export interface GalleryItem {
  id: string;
  title: string;
  category: "Residential Construction" | "Commercial Construction" | "Structural Work" | "Masonry & Finishing";
  location: string;
  description: string;
  image: string;
  relatedSlug?: string;
  aspect: "landscape" | "portrait" | "square";
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "4-Floor Residential Building — Structural Concrete",
    category: "Residential Construction",
    location: "Rohini / Nearby Delhi Area [Representative Example]",
    description: "RCC column and beam frame casting for a 4-storey residential builder floor structure.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    relatedSlug: "/projects/residential-building-4-floors",
    aspect: "landscape",
  },
  {
    id: "gal-2",
    title: "Foundation Footing & Rebar Tying",
    category: "Structural Work",
    location: "Building Construction Site [Representative Example]",
    description: "TMT steel rebar mat reinforcement and column starter bars prior to footing concrete pour.",
    image: "/images/construction-structure.jpg",
    relatedSlug: "/services/construction-planning",
    aspect: "landscape",
  },
  {
    id: "gal-3",
    title: "4-Floor Commercial Building Frontage",
    category: "Commercial Construction",
    location: "Commercial Pocket [Representative Example]",
    description: "Ground retail and upper floor office building construction with wide shopfront openings.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    relatedSlug: "/projects/commercial-building-4-floors",
    aspect: "landscape",
  },
  {
    id: "gal-4",
    title: "Family Residence (3 Floors) Elevation",
    category: "Residential Construction",
    location: "Pitampura / Nearby Delhi Area [Representative Example]",
    description: "Completed 3-storey independent residential house with weather-coat exterior finish.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    relatedSlug: "/projects/family-residence-3-floors",
    aspect: "landscape",
  },
  {
    id: "gal-5",
    title: "Reinforced Concrete Slab Casting",
    category: "Structural Work",
    location: "Residential Construction Site",
    description: "Slab reinforcement inspection and pump concrete pour with mechanical surface vibration.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    relatedSlug: "/services/residential-construction",
    aspect: "landscape",
  },
  {
    id: "gal-6",
    title: "First-Class Red Clay Brick Masonry",
    category: "Masonry & Finishing",
    location: "Residential Plot Site",
    description: "Traditional kiln-fired red clay brick wall masonry with true plumb lines and uniform mortar joints.",
    image: "/images/construction-site.jpg",
    relatedSlug: "/services/residential-construction",
    aspect: "landscape",
  },
  {
    id: "gal-7",
    title: "Commercial Shop & Office Building",
    category: "Commercial Construction",
    location: "Local Commercial Center [Representative Example]",
    description: "Low-rise 3-floor commercial structure featuring modern storefront entrance and durable finishes.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    relatedSlug: "/projects/shop-and-office-building-3-floors",
    aspect: "landscape",
  },
  {
    id: "gal-8",
    title: "Residential Interior Plaster & Finishing",
    category: "Masonry & Finishing",
    location: "Building Construction Site",
    description: "Smooth interior cement plastering, concealed electrical conduits, and floor leveling.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    relatedSlug: "/services/residential-construction",
    aspect: "landscape",
  },
  {
    id: "gal-9",
    title: "Terrace Waterproofing & Parapet Construction",
    category: "Structural Work",
    location: "Upper Floor Site",
    description: "Multi-layer rooftop waterproofing treatment and drainage slope verification.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    relatedSlug: "/services/renovation-remodeling",
    aspect: "landscape",
  },
];
