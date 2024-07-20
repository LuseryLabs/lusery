export type Base = {
  id: string;
  created_at: string;
  updated_at: string;
  slug: string;
};

export interface Post extends Base {
  title: string;
  slug: Slug;
  feature_image: string;
  excerpt: string;
  tags: Tag[];
  authors: Author[]; 
  html: string;
}

export interface Author extends Base {
  name: string;
  profile_image: string;
  cover_image?: string; 
  bio?: string; 
  website?: string; 
  location?: string; 
}

export interface Tag extends Base {
  name: string;
  description?: string; 
  feature_image?: string;
}
