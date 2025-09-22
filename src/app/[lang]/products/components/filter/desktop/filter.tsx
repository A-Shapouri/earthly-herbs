import React from 'react';
import Div from '@elements/div';
import Button from '@elements/button';
import FilterSimpleIcon from '@icons-components/filter-simple';
import Collapsible from '@elements/collapsable';
import FormControlLabel from '@elements/form-control-label';
import RadioButton from '@elements/radio-button';
import Divider from '@elements/divider';
import Checkbox from '@elements/checkbox';
import Rating from '@elements/rating';
import Tag from '@elements/tag';
import MultiRangeSlider from '@elements/multi-range-slider';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { ProductsActions } from '@store/products/products-actions';
import RadioGroup from '@elements/radio-group';

function countProductsByCategory(products) {
  const categoryCount = {};

  products.forEach(product => {
    const category = product.category;
    if (categoryCount[category]) {
      categoryCount[category] += 1;
    } else {
      categoryCount[category] = 1;
    }
  });

  return categoryCount;
}

const DesktopFilter = () => {
  const dispatch = useDispatch();
  const { tags, categories, products, priceRange, selectedCategory, caffeineLevel, selectedTags } = useSelector((state: RootState) => state.products);
  const counts = countProductsByCategory(products);

  const handleRemoveTag = (value: string) => {
    dispatch(ProductsActions.removeFilterTag({ tag: value }));
  };

  const handleAddTag = (value: string) => {
    dispatch(ProductsActions.addFilterTag({ tag: value }));
  };

  const handlePriceRange = ({ min, max }: { min: number, max: number }) => {
    dispatch(ProductsActions.setPriceRange({ min, max }));
  };

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(ProductsActions.setFilterCategory({ category: e.target.value }));
  };

  const handleCaffeineLevel = (level: number) => {
    dispatch(ProductsActions.setCaffeineLevel({ level: level }));
  };

  const handleClearFilters = () => {
    dispatch(ProductsActions.clearFilterProducts());
  };
  return (
    <Div className={'flex-col gap-6'}>
      <Button onClick={handleClearFilters} className={'w-44'} startAdornment={<FilterSimpleIcon/>}>
        Clear Filters
      </Button>
      <Div className={'flex-col w-full gap-6'}>
        <Collapsible className='w-[400px]' open={true} header={'All Categories'}>
          <RadioGroup onChange={handleCategory} value={selectedCategory} className={'flex-col w-full py-1.5 gap-3'}>
            {categories.map((category, index: number) => (
              <FormControlLabel
                key={`Category_${index}`}
                className={'pl-0 pt-1.5'}
                label={`${category?.name} (${counts[category] || 0})`}
              >
                <RadioButton checked={selectedCategory === category?.id} value={category?.id} size={'small'} name={category?.name}/>
              </FormControlLabel>
            ))}
          </RadioGroup>
        </Collapsible>
        <Divider/>
        <Collapsible className='w-[400px]' open={true} header={'Price'}>
          <Div className={'flex-col w-full pt-5 px-3'}>
            <MultiRangeSlider min={0} max={100} step={1} value={priceRange} onChange={handlePriceRange}/>
          </Div>
        </Collapsible>
        {/* <Divider/>
        <Collapsible className='w-[400px]' open={true} header={'Caffeine level'}>
          <Div className={'flex-col w-full py-4 gap-2'}>
            {[5, 4, 3, 2, 1].map((item, index) => (
              <label key={`Caffeine_${index}`} className={'gap-2 flex'}>
                <Checkbox onChange={() => handleCaffeineLevel(item)} checked={caffeineLevel.includes(item)} size={'medium'}/>
                <Rating size={['xs', 'xs']} value={item}/>
              </label>
            ))}
          </Div>
        </Collapsible>
        <Divider/>
        <Collapsible className='w-[400px]' open={true} header={'Popular Tag'}>
          <Div className={'w-full py-3 gap-2 flex-wrap'}>
            {tags.map((tag, index) => (
              <Tag
                addCallback={handleAddTag}
                removeCallback={handleRemoveTag}
                key={`Tag_${index}`}
                value={tag}
                active={selectedTags.includes(tag)}
              />
            ))}
          </Div>
        </Collapsible> */}
      </Div>
    </Div>
  );
};

export default DesktopFilter;
