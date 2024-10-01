import { StaticImageData } from "next/image"

export interface ProductThumbnailProps {
    title: string

    price: string

    rate: number

    image: StaticImageData
}