import {AddressProps} from "@store/address/address";

export interface AddressItemProps {
  address: AddressProps,
  selectable?: boolean
  shipping?: boolean
  inList?: boolean
}
