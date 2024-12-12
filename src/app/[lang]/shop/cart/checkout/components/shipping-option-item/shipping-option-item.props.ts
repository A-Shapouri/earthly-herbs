import {ShippingOptionProps} from "@store/shop/shop";

export interface ShippingOptionItemProps {
  option: ShippingOptionProps,
  selectable?: boolean
  inList?: boolean
}
