import {StaticImageData} from 'next/image';

export interface ProductItemProps {
  image: StaticImageData,
  name: string,
  price: string,
  amount: number,
  id: number,
  key?: any,
}
