export interface PostFromMatter {
    title: string
    summary: string
    publishDate: string
}

export interface Post {
    source: string
    frontMatter: PostFromMatter
}
