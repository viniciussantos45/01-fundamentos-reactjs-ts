import { ImgHTMLAttributes } from "react";

export type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    border?: boolean;
    alt?: string;
}