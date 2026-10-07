import petalEscape from "@/assets/petal_escape.jpeg";
import pureNoir from "@/assets/pure_noir.jpeg";
import secretSkies from "@/assets/secret_skies.jpeg";
import secretGarden from "@/assets/secret_garden.jpeg";
import bareTropics from "@/assets/bare_tropics.jpeg";
import cozyCloud from "@/assets/cozy_cloud.jpeg";

export type Product = {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  scent: string;
  type: string;
  mood: string[];
  shortDescription: string;
  description: string;
  image: string;
  scentProfile: string[];
  ritual: string;
  ingredients: string[];
};

const ritual = "Lather between wet hands, massage gently onto damp skin and rinse thoroughly.";

export const products: Product[] = [
  {
    slug: "petal-escape",
    number: "01",
    name: "Petal Escape",
    tagline: "Where every wash feels like a little escape.",
    scent: "Rose",
    type: "Glycerin botanical soap",
    mood: ["Soft", "Floral", "Romantic", "Refined"],
    shortDescription: "A delicate rose-scented bar inspired by the timeless beauty of fresh petals.",
    description:
      "A delicate rose-scented bar inspired by the timeless beauty of fresh petals. Handcrafted with a glycerin base and finished with a soft floral fragrance, Petal Escape turns an everyday cleanse into a beautifully simple ritual.",
    image: petalEscape,
    scentProfile: ["Rose", "Soft Floral", "Fresh"],
    ritual,
    ingredients: ["Glycerin soap base", "Rose fragrance", "Soap-safe mica"],
  },
  {
    slug: "pure-noir",
    number: "02",
    name: "Pure Noir",
    tagline: "The Essence of Simplicity.",
    scent: "Earthy · Woody",
    type: "Charcoal glycerin soap",
    mood: ["Deep", "Earthy", "Minimal", "Refined"],
    shortDescription: "A deep charcoal bar inspired by the raw beauty of nature.",
    description:
      "A deep charcoal bar inspired by the raw beauty of nature. Handcrafted with a glycerin base and activated charcoal, Pure Noir brings a grounded, minimalist touch to your everyday cleansing ritual.",
    image: pureNoir,
    scentProfile: ["Earthy", "Woody", "Fresh"],
    ritual,
    ingredients: ["Glycerin soap base", "Activated charcoal", "Soap-safe fragrance"],
  },
  {
    slug: "secret-skies",
    number: "03",
    name: "Secret Skies",
    tagline: "A quiet escape, under secret skies.",
    scent: "Lavender",
    type: "Glycerin botanical soap",
    mood: ["Dreamy", "Serene", "Floral", "Refined"],
    shortDescription: "A refined lavender bar inspired by the stillness of twilight.",
    description:
      "A refined lavender bar inspired by the stillness of twilight. Handcrafted with a clear glycerin base and a soft floral fragrance, Secret Skies transforms an everyday cleanse into a quiet, beautifully considered ritual.",
    image: secretSkies,
    scentProfile: ["Lavender", "Soft Floral", "Herbal"],
    ritual,
    ingredients: ["Glycerin soap base", "Lavender fragrance", "Soap-safe mica"],
  },
  {
    slug: "secret-garden",
    number: "04",
    name: "Secret Garden",
    tagline: "Where softness blooms in secret.",
    scent: "Jasmine",
    type: "Glycerin botanical soap",
    mood: ["Floral", "Soft", "Dreamy", "Refined"],
    shortDescription: "A delicate jasmine-scented bar inspired by the quiet beauty of a hidden garden.",
    description:
      "A delicate jasmine-scented bar inspired by the quiet beauty of a hidden garden. Handcrafted with a glycerin base and finished with a soft floral fragrance, Secret Garden brings a gentle, indulgent touch to your everyday cleansing ritual.",
    image: secretGarden,
    scentProfile: ["Jasmine", "Soft Floral", "Sweet"],
    ritual,
    ingredients: ["Glycerin soap base", "Jasmine fragrance", "Soap-safe mica"],
  },
  {
    slug: "bare-tropics",
    number: "05",
    name: "Bare Tropics",
    tagline: "Mango never goes out of season.",
    scent: "Mango",
    type: "Glycerin botanical soap",
    mood: ["Tropical", "Juicy", "Bright", "Fresh"],
    shortDescription: "A vibrant mango-scented bar inspired by sun-drenched tropical days.",
    description:
      "A vibrant mango-scented bar inspired by sun-drenched tropical days. Handcrafted with a glycerin base and finished with a bright, fruity fragrance, Bare Tropics brings a fresh, carefree touch to your everyday cleansing ritual.",
    image: bareTropics,
    scentProfile: ["Mango", "Juicy", "Tropical"],
    ritual,
    ingredients: ["Glycerin soap base", "Mango fragrance", "Soap-safe mica"],
  },
  {
    slug: "cozy-cloud",
    number: "06",
    name: "Cozy Cloud",
    tagline: "Cloud nine, every time.",
    scent: "Vanilla",
    type: "Goat milk soap",
    mood: ["Warm", "Sweet", "Creamy", "Comforting"],
    shortDescription: "A warm vanilla-scented bar inspired by the soft comfort of sweet, familiar moments.",
    description:
      "A warm vanilla-scented bar inspired by the soft comfort of sweet, familiar moments. Handcrafted with a creamy goat milk soap base and finished with a rich vanilla fragrance, Cozy Cloud brings a warm, indulgent touch to your everyday cleansing ritual.",
    image: cozyCloud,
    scentProfile: ["Vanilla", "Creamy", "Sweet", "Warm"],
    ritual,
    ingredients: ["Goat milk soap base", "Vanilla fragrance", "Soap-safe mica"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
