import { StaticImageData } from 'next/image';

export interface BlogItemProps {
    title: string

    description: string

    image: StaticImageData,

    day: string

    month: string

    tags: string[]

    className?: string

    isPrimary?: boolean
}
