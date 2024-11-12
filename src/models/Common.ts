export interface SlugParams {
  params: { slug: string };
}

export interface IdParams {
  params: { id: string };
}

export interface Category {
  path: string;
  name: string;
  icon?: string;
  children?: Category[];
}
