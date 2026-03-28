export interface PropertyFacility {
  name: string;
  description?: string;
  imageUrl?: string;
}

export interface FloorPlan {
  unitType: string;
  sizeSqFt: number;
  startingPrice: string;
  layoutImage?: string; // URL for the floor plan layout image
}

export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  thumbnailUrl?: string;
  caption?: string;
}

export interface PropertyData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  about: string;
  location: {
    address: string;
    coordinates?: { lat: number; lng: number };
    highlights: string[];
    mapImageUrl?: string;
  };
  facilities: PropertyFacility[];
  gallery: GalleryItem[];
  pricing: FloorPlan[];
  contact: {
    whatsapp: string;
    instagram: string;
    email: string;
    phone: string;
  };
}
