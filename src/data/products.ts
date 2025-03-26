export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount?: number;
  image: string;
  images?: string[];
  description: string;
  shortDescription: string;
  featured?: boolean;
  bestSeller?: boolean;
  new?: boolean;
  rating: number;
  reviews: number;
  specifications?: {
    [key: string]: string;
  };
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Audio",
    price: 299.99,
    discount: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lcyUyMGJsYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Experience unparalleled sound quality with our Premium Wireless Headphones. Featuring advanced noise cancellation technology, these headphones deliver immersive audio with deep bass and crystal-clear highs. The ergonomic design ensures comfort during extended listening sessions, while the long-lasting battery provides up to 30 hours of playback time. With intuitive touch controls and seamless Bluetooth connectivity, these headphones are the perfect companion for music enthusiasts.",
    shortDescription: "Immersive audio experience with advanced noise cancellation and 30-hour battery life.",
    featured: true,
    bestSeller: true,
    rating: 4.8,
    reviews: 352,
    specifications: {
      "Battery Life": "Up to 30 hours",
      "Connectivity": "Bluetooth 5.2",
      "Noise Cancellation": "Active",
      "Weight": "250g",
      "Driver Size": "40mm"
    },
    stock: 45
  },
  {
    id: 2,
    name: "Ultra-Thin Smartphone",
    category: "Electronics",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZSUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Discover the future of smartphones with our Ultra-Thin model. Featuring a stunning 6.7-inch ProMotion XDR display and the most powerful chip ever in a smartphone, this device delivers unprecedented performance. Capture professional-quality photos and videos with the advanced camera system, and enjoy all-day battery life. With its sleek design and premium materials, this smartphone redefines what's possible in a mobile device.",
    shortDescription: "Revolutionary smartphone with stunning display, powerful performance, and advanced camera system.",
    featured: true,
    new: true,
    rating: 4.9,
    reviews: 487,
    specifications: {
      "Display": "6.7-inch ProMotion XDR",
      "Processor": "A16 Bionic",
      "Storage": "256GB",
      "Camera": "48MP Triple Camera",
      "Battery": "4500mAh"
    },
    stock: 28
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: 199.99,
    discount: 169.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617043786394-ae546534f0f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd93b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Take control of your health and fitness with our Smart Fitness Watch. Track your workouts, monitor your heart rate, and analyze your sleep patterns with precision. The always-on display provides easy access to your health metrics and notifications, while the water-resistant design ensures durability for all activities. With over 20 workout modes and 7-day battery life, this fitness watch is your perfect wellness companion.",
    shortDescription: "Comprehensive health and fitness tracking with always-on display and 7-day battery life.",
    bestSeller: true,
    rating: 4.6,
    reviews: 215,
    specifications: {
      "Display": "1.4-inch AMOLED Always-On",
      "Battery Life": "Up to 7 days",
      "Water Resistance": "50m",
      "Sensors": "Heart Rate, SpO2, Accelerometer",
      "Connectivity": "Bluetooth 5.0, Wi-Fi"
    },
    stock: 63
  },
  {
    id: 4,
    name: "Professional Digital Camera",
    category: "Photography",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlnaXRhbCUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZ2l0YWwlMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Capture breathtaking moments with our Professional Digital Camera. Equipped with a full-frame sensor and advanced image processing, this camera delivers exceptional image quality in any lighting condition. The intuitive controls and customizable settings cater to photographers of all levels, while the 4K video capability allows you to create stunning cinematic footage. With its durable construction and versatile lens compatibility, this camera is the ultimate tool for creative expression.",
    shortDescription: "Full-frame sensor, exceptional image quality, and 4K video capabilities for professional photography.",
    featured: true,
    rating: 4.7,
    reviews: 178,
    specifications: {
      "Sensor": "Full-frame 24.2MP",
      "ISO Range": "100-51200",
      "Video": "4K/60fps",
      "Autofocus": "273-point phase-detection",
      "Weight": "650g"
    },
    stock: 19
  },
  {
    id: 5,
    name: "Smart Home Speaker",
    category: "Smart Home",
    price: 129.99,
    discount: 99.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512446816042-444d641267d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0JTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Transform your home with our Smart Home Speaker. Equipped with advanced voice recognition technology, this speaker responds to your commands with remarkable accuracy. The premium sound system delivers rich, room-filling audio for all your favorite music. Control your smart home devices, get answers to questions, and manage your daily schedule with simple voice commands. With its sleek design and multiple color options, this speaker seamlessly integrates into any home decor.",
    shortDescription: "Voice-controlled speaker with premium sound and smart home integration capabilities.",
    new: true,
    rating: 4.5,
    reviews: 143,
    specifications: {
      "Sound": "360° omnidirectional audio",
      "Voice Recognition": "Far-field microphones",
      "Connectivity": "Wi-Fi, Bluetooth",
      "Compatibility": "Works with major smart home systems",
      "Power": "AC power"
    },
    stock: 52
  },
  {
    id: 6,
    name: "Portable Power Bank",
    category: "Accessories",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588931250675-2ded6e829c89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvd2VyJTIwYmFua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1587037542794-9efc5b834ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvd2VyJTIwYmFua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ],
    description: "Stay powered on the go with our Portable Power Bank. With its high-capacity battery, this power bank can charge multiple devices several times over. The fast-charging technology ensures your devices are powered up quickly, while the compact and lightweight design makes it perfect for travel. With multiple ports and wireless charging capability, this power bank provides versatile charging options for all your devices.",
    shortDescription: "High-capacity, fast-charging power bank with compact design and multiple charging options.",
    bestSeller: true,
    rating: 4.7,
    reviews: 296,
    specifications: {
      "Capacity": "20,000mAh",
      "Ports": "USB-C, USB-A",
      "Charging Speed": "30W fast charging",
      "Wireless Charging": "15W",
      "Weight": "340g"
    },
    stock: 78
  }
];

export const getAllCategories = (): string[] => {
  const categoriesSet = new Set<string>();
  
  products.forEach(product => {
    if (product.category) {
      categoriesSet.add(product.category);
    }
  });
  
  return Array.from(categoriesSet).sort();
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellerProducts = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};
