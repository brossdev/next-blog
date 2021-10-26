export type PostType = {
    slug: string;
    title: string;
    date?: string;
    description?: string;
    image?: string;
}

export interface MetaProps extends Pick<PostType, 'date' | 'description' | 'image' | 'title'> {
    type?: string;
}
