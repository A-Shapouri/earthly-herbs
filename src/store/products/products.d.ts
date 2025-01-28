export interface ProductsReducerProps {
  products: Array<ProductProps>
  listLoading: boolean;
  tags: Array<string>;
  categories: Array<string>;
  selectedTags: string[];
  selectedCategory: string | null;
  sortBy: string | null;
  caffeineLevel: Array<number>;
  priceRange: {
    min: number;
    max: number;
  }
  productItem: ProductProps | null;
  productsDetailsLoading: boolean;
  productItemId: string | null;
  surveyProducts: Array<ProductProps>;
}

export interface ProductProps {
  image: any
  title: string
  price: string
  rate: string
  isHealthy: boolean
  isNew: boolean
  id: number | string
  description: string
  amounts: Array<number | string>
  category: string
  tag: string
  imageList: Array<any>
}