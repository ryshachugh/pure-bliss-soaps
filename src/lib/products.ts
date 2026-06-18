import lavender from "@/assets/soap-lavender.jpg";
import neem from "@/assets/soap-neem.jpg";
import charcoal from "@/assets/soap-charcoal.jpg";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  benefits: string[];
  skinType: string;
  usage: string;
  reviews: { name: string; rating: number; text: string }[];
};

export const products: Product[] = [
  {
    slug: "lavender",
    name: "Lavender Soap",
    tagline: "Calm in a bar.",
    shortDescription: "Steam-distilled French lavender folded into a creamy shea base.",
    description:
      "A slow-cured bar built around steam-distilled French lavender essential oil and dried buds harvested at peak bloom. Designed to quiet the senses at the end of a long day.",
    price: 12,
    image: lavender,
    ingredients: [
      "Cold-pressed coconut oil",
      "Raw shea butter",
      "Organic olive oil",
      "French lavender essential oil",
      "Dried lavender buds",
      "Kaolin clay",
    ],
    benefits: [
      "Soothes stressed, reactive skin",
      "Light floral aroma that lingers, never overpowers",
      "Gentle daily cleanse, suitable for face and body",
    ],
    skinType: "Normal to sensitive",
    usage: "Lather between palms or with a washcloth. Massage onto damp skin in slow circles. Rinse with cool water. Air-dry on a draining dish between uses to extend the bar's life.",
    reviews: [
      { name: "Anaya R.", rating: 5, text: "Smells like a garden after rain. My partner stole my bar within a week." },
      { name: "Mira K.", rating: 5, text: "Finally a lavender soap that doesn't feel like cleaning supply. Calming, creamy, real." },
      { name: "Devansh P.", rating: 4, text: "Great daily soap. Lasts ages if you keep it dry." },
    ],
  },
  {
    slug: "neem-tulsi",
    name: "Neem & Tulsi Soap",
    tagline: "The old remedy, re-made.",
    shortDescription: "Cold-pressed neem oil with hand-torn tulsi leaves for clarifying daily care.",
    description:
      "A grandmother's recipe, reformulated. Cold-pressed neem oil and hand-torn tulsi (holy basil) leaves work as a clarifying daily wash for skin that needs balance, not stripping.",
    price: 11,
    image: neem,
    ingredients: [
      "Cold-pressed neem oil",
      "Fresh tulsi (holy basil) leaves",
      "Coconut oil",
      "Organic olive oil",
      "Castor oil",
      "Green tea extract",
    ],
    benefits: [
      "Clarifying for blemish-prone skin",
      "Naturally antibacterial and antifungal",
      "Balances oil without over-drying",
    ],
    skinType: "Oily, combination, blemish-prone",
    usage: "Work into a soft lather on damp skin. Leave for 15 seconds before rinsing for a deeper clean. Use morning and night.",
    reviews: [
      { name: "Sahil M.", rating: 5, text: "Cleared up my back acne in three weeks. Smells earthy — I like it." },
      { name: "Priya S.", rating: 5, text: "Reminds me of my grandmother's home remedies, but it actually feels nice on skin." },
      { name: "Aarav T.", rating: 4, text: "Honest, hardworking soap. No frills, just results." },
    ],
  },
  {
    slug: "charcoal",
    name: "Activated Charcoal Soap",
    tagline: "Pull the day out.",
    shortDescription: "Bamboo charcoal and sea salt for a deep, mineral-rich detox.",
    description:
      "Fine bamboo activated charcoal draws out grime and excess oil while raw sea salt resets the skin's mineral balance. A weekly deep-clean that doesn't leave you tight.",
    price: 13,
    image: charcoal,
    ingredients: [
      "Bamboo activated charcoal",
      "Raw sea salt",
      "Coconut oil",
      "Cocoa butter",
      "Tea tree essential oil",
      "Castor oil",
    ],
    benefits: [
      "Draws out impurities and excess oil",
      "Polishes without micro-tearing",
      "Leaves skin matte, not parched",
    ],
    skinType: "Oily to normal; weekly use for dry skin",
    usage: "Wet face and bar. Lather in palms first, then massage onto skin for 30 seconds. Rinse thoroughly. Follow with a light moisturiser.",
    reviews: [
      { name: "Ishaan V.", rating: 5, text: "Pores look like they had a meeting and got their act together." },
      { name: "Riya N.", rating: 4, text: "Strong cleanse — I save it for after gym days. Perfect for that." },
      { name: "Kabir J.", rating: 5, text: "Black soap that doesn't make a mess. Beautiful bar, real work." },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
