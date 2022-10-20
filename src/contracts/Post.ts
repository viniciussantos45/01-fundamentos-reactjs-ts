export type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

export type Content = {
    type: 'paragraph' | 'link';
    content: string;
};

export type PostProps = {
    author: Author;
    content: Content[];
    publishAt: Date;
}