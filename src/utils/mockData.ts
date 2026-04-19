import type { PropertyData } from '../types/property';
import LoungeImg from '../assets/Lounge.jpg';
import PoolImg from '../assets/Pool.jpg';
import GardenImg from '../assets/Garden.jpg';
import FloorPlanAImg from '../assets/FloorPlanTypeA.jpg';
import FloorPlanBImg from '../assets/FloorPlanTypeB.jpg';
import FloorPlanCImg from '../assets/FloorPlanTypeC.jpg';

export const mockProperty: PropertyData = {
  id: 'enlace-suites-01',
  name: 'Enlace Suites',
  tagline: 'The Beating Heart of Pantai Sentral Park',
  description: 'An urban sanctuary seamlessly integrated with nature, offering sophisticated living in the heart of KL\'s Urban Forest City.',
  about: 'Enlace Suites represents the latest residential evolution within the 58-acre Pantai Sentral Park. Designed with biophilic principles, it offers a harmonious connection to the 200-acre Bukit Kerinchi Forest Reserve while providing modern urban convenience through its dedicated pedestrian skybridge to the future MRT3 station.',
  location: {
    address: 'Pantai Sentral Park, Off Jalan Pantai Dalam, 59200 Kuala Lumpur',
    highlights: [
      'Direct Skybridge to MRT3 Pantai Dalam',
      'Adjacent to 200-acre Forest Reserve',
      'Direct Access to NPE Interchange',
      'Minutes to Bangsar South & Mid Valley'
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
    { type: 'image', url: LoungeImg, caption: 'Lounge' },
    { type: 'image', url: PoolImg, caption: 'Pool' },
    { type: 'image', url: GardenImg, caption: 'Garden' }
  ],
  pricing: [
    { 
      unitType: 'Type A', 
      sizeSqFt: 1250, 
      startingPrice: '$450,000',
      layoutImage: FloorPlanAImg 
    },
    { 
      unitType: 'Type B', 
      sizeSqFt: 1850, 
      startingPrice: '$680,000',
      layoutImage: FloorPlanBImg
    },
    { 
      unitType: 'Type C', 
      sizeSqFt: 3200, 
      startingPrice: '$1,200,000',
      layoutImage: FloorPlanCImg
    }
  ],
  contact: {
    whatsapp: '+60122016289',
    instagram: 'enlace_preview',
    email: 'sales@enlace.preview',
    phone: '+60122016289'
  }
};
