export type PostType = {
  slug: string;
  title: string;
  publishedDate: string;
  description?: string;
  image?: string;
};

export interface MetaProps
  extends Pick<PostType, "publishedDate" | "description" | "image" | "title"> {
  type?: string;
}
