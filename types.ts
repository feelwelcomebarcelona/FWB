
export interface Testimonial {
  id: string;
  name: string;
  date: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  travelDates: string;
  message: string;
}
