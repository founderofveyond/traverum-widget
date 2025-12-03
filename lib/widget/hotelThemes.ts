export interface HotelTheme {
  hotelId: string;
  name: string;
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
    background: string;
    backgroundLight: string;
    text: string;
    textGray: string;
    textDarkGray: string;
    textDarkerGray: string;
    textTan?: string;
    border: string;
    formBg: string;
  };
  fonts: {
    body: string;
    heading: string;
    bodyUrl?: string;
    headingUrl?: string;
  };
  sizing: {
    // Font sizes (in px)
    baseFontSize: number;        // Base body font size
    baseLineHeight: number;      // Base line height
    headingSize: number;         // Heading font size (h1)
    cardTitleSize: number;        // Card title size
    // Card dimensions
    cardImageHeight: number;     // Card image height in px
    // Border radius (in px)
    containerRadius: number;     // Main container radius
    cardRadius: number;          // Experience card radius
    smallRadius: number;          // Small elements (inputs, buttons)
  };
  content?: {
    title: string;
    description: string;
  };
}

export const HOTEL_THEMES: Record<string, HotelTheme> = {
  "demo-hotels": {
    hotelId: "demo-hotels",
    name: "Traverum Demo — Hotels",
    colors: {
      primary: "#380100",
      primaryHover: "#380100",
      secondary: "#d3b298",
      secondaryHover: "#380100",
      background: "#ffffff",
      backgroundLight: "#ffffff",
      text: "#222222",
      textGray: "#444444",
      textDarkGray: "#2d2d2d",
      textDarkerGray: "#222222",
      textTan: "#d3b298",
      border: "#eeeeee",
      formBg: "#f6f1ea",
    },
    fonts: {
      body: "Inter",
      heading: "New York",
      bodyUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    },
    sizing: {
      baseFontSize: 16,
      baseLineHeight: 24,
      headingSize: 34,
      cardTitleSize: 22,
      cardImageHeight: 220,
      containerRadius: 16,
      cardRadius: 16,
      smallRadius: 4,
    },
    content: {
      title: "SELL EXPERIENCES ON YOUR WEBSITE",
      description: "Embed a branded booking widget on your hotel site and increase your in-stay revenue.",
    },
  },
  "demo-experiences": {
    hotelId: "demo-experiences",
    name: "Traverum Demo — Experiences",
    colors: {
      primary: "#380100",
      primaryHover: "#380100",
      secondary: "#d3b298",
      secondaryHover: "#380100",
      background: "#ffffff",
      backgroundLight: "#ffffff",
      text: "#222222",
      textGray: "#444444",
      textDarkGray: "#2d2d2d",
      textDarkerGray: "#222222",
      textTan: "#d3b298",
      border: "#eeeeee",
      formBg: "#f6f1ea",
    },
    fonts: {
      body: "Inter",
      heading: "New York",
      bodyUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    },
    sizing: {
      baseFontSize: 16,
      baseLineHeight: 24,
      headingSize: 34,
      cardTitleSize: 22,
      cardImageHeight: 220,
      containerRadius: 16,
      cardRadius: 16,
      smallRadius: 4,
    },
    content: {
      title: "GET LISTED ON HOTEL WEBSITES",
      description: "List your experience in hotel widgets and reach guests at the moment they book their stay.",
    },
  },
  zacchera: {
    hotelId: 'zacchera',
    name: 'Zacchera Hotels',
    colors: {
      primary: '#206093',
      primaryHover: '#380100',
      secondary: '#d3b298',
      secondaryHover: '#380100',
      background: '#ffffff',
      backgroundLight: '#fbfbfc',
      text: '#222222',
      textGray: '#444444',
      textDarkGray: '#2d2d2d',
      textDarkerGray: '#222222',
      textTan: '#d3b298',
      border: '#eeeeee',
      formBg: '#f6f1ea',
    },
    fonts: {
      body: 'Overpass',
      heading: 'New York',
      bodyUrl: 'https://fonts.googleapis.com/css2?family=Overpass:wght@300;700&display=swap',
    },
    sizing: {
      baseFontSize: 17.6,
      baseLineHeight: 26.4,
      headingSize: 36,
      cardTitleSize: 24,
      cardImageHeight: 200,
      containerRadius: 12,
      cardRadius: 12,
      smallRadius: 2,
    },
    content: {
      title: 'Local Experiences',
      description: 'Experience Lake Maggiore the fullest with our chosen experiences from the area.',
    },
  },
  'hotel-rosa': {
    hotelId: 'hotel-rosa',
    name: 'Hotel Rosa Baveno',
    colors: {
      primary: '#8B4513', // Brown/tan - will customize to match site
      primaryHover: '#654321',
      secondary: '#D4AF37', // Gold accent
      secondaryHover: '#B8941F',
      background: '#ffffff',
      backgroundLight: '#f8f8f8',
      text: '#333333',
      textGray: '#666666',
      textDarkGray: '#2d2d2d',
      textDarkerGray: '#222222',
      textTan: '#8B4513',
      border: '#e0e0e0',
      formBg: '#f5f5f5',
    },
    fonts: {
      body: 'Open Sans',
      heading: 'Playfair Display',
      bodyUrl: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap',
      headingUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap',
    },
    sizing: {
      baseFontSize: 16,
      baseLineHeight: 24,
      headingSize: 40,
      cardTitleSize: 22,
      cardImageHeight: 220,
      containerRadius: 8,
      cardRadius: 8,
      smallRadius: 4,
    },
    content: {
      title: 'Esperienze Locali',
      description: 'Scopri le migliori esperienze sul Lago Maggiore selezionate per te.',
    },
  },
  'hotel-splendid': {
    hotelId: 'hotel-splendid',
    name: 'Hotel Splendid',
    colors: {
      primary: '#380100', // Dark brown - main button border color
      primaryHover: '#380100', // Dark brown - fills on hover
      secondary: '#d3b298', // Gold/tan - heading color
      secondaryHover: '#380100',
      background: '#ffffff',
      backgroundLight: '#ffffff', // Match page background, no light variant
      text: '#222222',
      textGray: '#444444',
      textDarkGray: '#2d2d2d',
      textDarkerGray: '#222222',
      textTan: '#d3b298', // For headings
      border: '#eeeeee',
      formBg: '#f6f1ea',
    },
    fonts: {
      body: 'Overpass',
      heading: 'New York',
      bodyUrl: 'https://fonts.googleapis.com/css2?family=Overpass:wght@300;700&display=swap',
    },
    sizing: {
      baseFontSize: 17.6,
      baseLineHeight: 26.4,
      headingSize: 36,
      cardTitleSize: 24,
      cardImageHeight: 250, // Match room card proportions better
      containerRadius: 0, // No border radius on container to match page
      cardRadius: 0, // Cards have no border radius on page
      smallRadius: 0, // Buttons have no border radius
    },
    content: {
      title: 'Local Experiences',
      description: 'Discover the best experiences around Lake Maggiore, carefully selected for our guests.',
    },
  },
  // Example: Add your new hotel here
  // Uncomment and customize this template to add a new hotel widget:
  //
  // newhotel: {
  //   hotelId: 'newhotel',
  //   name: 'New Hotel',
  //   colors: {
  //     primary: '#your-primary-color',        // Main brand color (buttons, links)
  //     primaryHover: '#your-primary-hover',   // Hover state for primary
  //     secondary: '#your-secondary',          // Secondary brand color
  //     secondaryHover: '#your-secondary-hover', // Hover state for secondary
  //     background: '#ffffff',                 // Main background
  //     backgroundLight: '#f8f9fa',            // Light background variant
  //     text: '#333333',                       // Main text color
  //     textGray: '#666666',                   // Secondary text color
  //     textDarkGray: '#2d2d2d',               // Dark gray text
  //     textDarkerGray: '#222222',             // Darker gray text
  //     textTan: '#your-accent-color',         // Optional accent color (for headings)
  //     border: '#e0e0e0',                     // Border color
  //     formBg: '#f5f5f5',                     // Form input background
  //   },
  //   fonts: {
  //     body: 'Inter',                         // Body font name (must match Google Fonts or custom font)
  //     heading: 'Playfair Display',           // Heading font name
  //     bodyUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap',
  //     headingUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap',
  //   },
  //   content: {
  //     title: 'Local Experiences',            // Widget header title
  //     description: 'Discover amazing experiences in your area.', // Widget header description
  //   },
  // },
  //
  // To use: Visit /widget/newhotel (or whatever hotelId you set)
};

export function getHotelTheme(hotelId: string): HotelTheme {
  return HOTEL_THEMES[hotelId] || HOTEL_THEMES.zacchera; // fallback to zacchera
}

