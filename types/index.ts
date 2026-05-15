export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "branding" | "web" | "kampanya" | "motion";
  imageUrl: string;
  year: number;
  client: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    behance?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ReservationFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  budget: string;
  date: string;
  notes?: string;
}
