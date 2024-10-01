import { StaticImageData } from "next/image"

export interface ProductItemProps {
    image: StaticImageData
    title: string
    price: string
    rate: number,
    isHealthy?: boolean
    isNew?: boolean
}