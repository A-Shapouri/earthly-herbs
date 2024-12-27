import { Colors } from '@types';

export interface SliderProps {
  children: any

  delay?: number

  spaceBetween?: number

  slides?: number

  tabletSlides?: number

  mobileSlides?: number

  infiniteLoop?: boolean

  pauseOnMouseOver?: boolean

  autoMove?: boolean

  indicator?: boolean

  indicatorActiveColor?: Colors

  navigation?: boolean

  nextNavigation?: (onClick: any) => any

  prevNavigation?: (onClick: any) => any

  direction?: 'ltr' | 'rtl'

  rows?: number

  navigationColor?: Colors

  indicatorClassName?: string
}