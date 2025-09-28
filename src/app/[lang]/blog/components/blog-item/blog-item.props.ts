import { StaticImageData } from 'next/image';

export interface BlogItemProps {
    id: string;
    title: string
    description: string
    image: string | StaticImageData,
    day: string
    month: string
    tags: string[]
    className?: string
    isPrimary?: boolean
}
