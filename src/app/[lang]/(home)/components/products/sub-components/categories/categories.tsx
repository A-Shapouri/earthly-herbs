import Div from '@elements/div'
import React from 'react'
import CategoryItem from './category-item'
import ProductThumbnail from '@modules/product-thumbnail'
import ThumbnailImage from '../../../../../../../../public/images/products/thumbnail-1.png'
import ThumbnailImage2 from '../../../../../../../../public/images/products/thumbnail-2.png'

const Categories = () => {
  return (
    <Div className={'gap-6'}>
      <CategoryItem title={'Hot Deals'}>
        <ProductThumbnail image={ThumbnailImage} title={'Indian Malta'} price={'$14.99'} rate={2} />
        <ProductThumbnail image={ThumbnailImage} title={'Indian Malta'} price={'$24.99'} rate={1} />
        <ProductThumbnail image={ThumbnailImage2} title={'Indian Malta'} price={'$10.99'} rate={5} />
      </CategoryItem>
      <CategoryItem title={'Best Seller'}>
        <ProductThumbnail image={ThumbnailImage} title={'Indian Malta'} price={'$14.99'} rate={3} />
        <ProductThumbnail image={ThumbnailImage2} title={'Indian Malta'} price={'$50.99'} rate={4} />
        <ProductThumbnail image={ThumbnailImage} title={'Indian Malta'} price={'$20.99'} rate={4} />
      </CategoryItem>
      <CategoryItem title={'Top Rated'}>
        <ProductThumbnail image={ThumbnailImage2} title={'Indian Malta'} price={'$14.99'} rate={3} />
        <ProductThumbnail image={ThumbnailImage} title={'Indian Malta'} price={'$12.99'} rate={5} />
        <ProductThumbnail image={ThumbnailImage2} title={'Indian Malta'} price={'$13.99'} rate={1} />
      </CategoryItem>
    </Div>
  )
}

export default Categories;