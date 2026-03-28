import type { PropertyData } from '../types/property';

export const mockProperty: PropertyData = {
  id: 'luxury-residence-01',
  name: 'Ocean View Premium Residences',
  tagline: 'Experience Coastal Luxury at Its Finest',
  description: 'A masterpiece of architecture and design, located in the heart of the coastal district.',
  about: 'Welcome to Ocean View Residences, where every corner is designed with elegance and comfort in mind. Our project offers a unique blend of modern architecture and natural beauty, ensuring a serene living experience for you and your family.',
  location: {
    address: '123 Coastal Drive, Marina District, PV 54321',
    highlights: [
      '3 Minutes from Marina Beach',
      'Direct access to Metro Station',
      'Proximity to International Schools'
    ]
  },
  facilities: [
    { 
      name: 'Rooftop Infinity Pool', 
      description: 'With breathtaking sea views',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'State-of-the-Art Fitness', 
      description: 'Modern equipment and trainers',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Landscaped Zen Garden', 
      description: 'A serene place for reflection',
      imageUrl: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: '24/7 Concierge', 
      description: 'Always at your service',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    }
  ],
  gallery: [
    { type: 'image', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', caption: 'Exterior View' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&w=1200&q=80', caption: 'Living Room' },
    { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnailUrl: 'https://images.unsplash.com/photo-1600607687940-4e524cb350b1?auto=format&fit=crop&w=600&q=80', caption: 'Walkthrough Video' }
  ],
  pricing: [
    { 
      unitType: '2 BHK - Type A', 
      sizeSqFt: 1250, 
      startingPrice: '$450,000',
      layoutImage: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      unitType: '3 BHK - Type B', 
      sizeSqFt: 1850, 
      startingPrice: '$680,000',
      layoutImage: 'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&w=800&q=80'
    },
    { 
      unitType: 'Penthouse', 
      sizeSqFt: 3200, 
      startingPrice: '$1,200,000',
      layoutImage: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=800&q=80'
    }
  ],
  contact: {
    whatsapp: '+1234567890',
    instagram: 'oceanview_premium',
    email: 'sales@oceanview.premium',
    phone: '+1 800 OCEAN VIEW'
  }
};
