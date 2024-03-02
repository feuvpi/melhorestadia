export type Category = 'Chales' | 'Cabines'

export type Post = {
    title: string;
    description: string;
    author: string;
    category: Category;
    publishedAtIso: Date;
    imageUrl: string;
    featured: boolean;
    location: string;
    place_id: string;
    published: boolean;
    slug: string;
}