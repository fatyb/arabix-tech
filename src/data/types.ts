export type Locale = "en" | "ar";

export type LocalizedText = {
  en: string;
  ar: string;
};

export type ProductCategory =
  | "indoor"
  | "outdoor"
  | "rental"
  | "transparent"
  | "video-wall"
  | "signage"
  | "interactive";

export type Application =
  | "retail"
  | "corporate"
  | "events"
  | "transportation"
  | "hospitality"
  | "government";

export interface ProductSpecs {
  pixelPitch: string;
  brightness: string;
  refreshRate: string;
  resolutionModule: string;
  viewingAngle: string;
  ipRating: string;
  lifespan: string;
  powerConsumption: string;
  cabinetSize: string;
}

export interface Product {
  slug: string;
  category: ProductCategory;
  applications: Application[];
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  images: string[];
  specs: ProductSpecs;
  featured?: boolean;
}

export interface CaseStudy {
  slug: string;
  industry: Application;
  projectName: LocalizedText;
  client: LocalizedText;
  location: LocalizedText;
  resultLine: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  results: LocalizedText[];
  productsUsed: string[];
  images: string[];
  featured?: boolean;
}
