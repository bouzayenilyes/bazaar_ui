export interface Testimonial {
  id: string;
  rating: number;
  comment: string;
  user: { name: string; avatar: string };
}

export interface Banner {
  id: number;
  title: string;
  imgUrl: string;
  shopUrl: string;
  bgColor: string;
  subtitle: string;
}
