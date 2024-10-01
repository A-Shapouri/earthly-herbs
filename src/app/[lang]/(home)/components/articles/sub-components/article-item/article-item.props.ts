import { StaticImageData } from 'next/image';

export interface ArticleItemProps {
    title: string

    description: string

    image: StaticImageData,

    day: string

    month: string
}
