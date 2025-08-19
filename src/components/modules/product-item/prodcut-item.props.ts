import { StaticImageData } from 'next/image';

export interface ProductItemProps {
    image: StaticImageData | string
    title: string
    price: string
    rate: number,
    isHealthy?: boolean
    isNew?: boolean
    id: number
}
