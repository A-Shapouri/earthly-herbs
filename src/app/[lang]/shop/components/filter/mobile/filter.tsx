import React, { useState } from 'react';
import Div from '@elements/div';
import Modal from '@elements/modal';
import Button from '@elements/button';
import FilterIcon from '@icons-components/filter';
import SortIcon from '@icons-components/sort';
import Text from '@elements/text';
import CloseIcon from '@icons-components/close';
import Collapsible from '@elements/collapsable';
import FormControlLabel from '@elements/form-control-label';
import RadioButton from '@elements/radio-button';
import Divider from '@elements/divider';
import Checkbox from '@elements/checkbox';
import Rating from '@elements/rating';
import Tag from '@elements/tag';
import MultiRangeSlider from '@elements/multi-range-slider';
import {ProductsActions} from "@store/products/products-actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/root-reducer";
import RadioGroup from "@elements/radio-group";


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


const MobileFilter = () => {
  const {tags, categories, products, priceRange, selectedCategory, caffeineLevel, selectedTags} = useSelector((state: RootState) => state.products);
  const [sortModal, setSortModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const counts = countProductsByCategory(products)
  const dispatch = useDispatch();

  const handleSortModal = () => {
    setSortModal(prevState => !prevState);
  };

  const handleFilterModal = () => {
    setFilterModal(prevState => !prevState);
  };

  const handleRemoveTag = (value: string) => {
    dispatch(ProductsActions.removeFilterTag({tag: value}));
  }

  const handleAddTag = (value: string) => {
    dispatch(ProductsActions.addFilterTag({tag: value}));
  }


  const handlePriceRange = ({min, max}: { min: number, max: number }) => {
    dispatch(ProductsActions.setPriceRange({min, max}))
  }

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(ProductsActions.setFilterCategory({category: e.target.value}));
  }

  const handleCaffeineLevel = (level: number) => {
    dispatch(ProductsActions.setCaffeineLevel({level: level}))
  }

  const handleSortBy = (newValue: any) => {
    dispatch(ProductsActions.setSortBy({sort: newValue}));
    handleSortModal();
  }

  const handleClearFilters = () => {
    dispatch(ProductsActions.clearFilterProducts())
    handleFilterModal();
  }

    return (
    <Div className={'flex-col'}>
      <Div className={'fixed shadow-md bottom-0 right-0 bg-white h-[85px] w-full z-10 items-center justify-evenly drop-shadow-2xl shadow-brown-800'}>
        <Button onClick={handleFilterModal} color={'frost'} className={'flex-col gap-2 !text-black'} variant={'text'} startAdornment={<FilterIcon />}>
          Filter
        </Button>
        <Button onClick={handleSortModal} color={'frost'} className={'flex-col gap-2 !text-black'} variant={'text'} startAdornment={<SortIcon />}>
          Sort
        </Button>
      </Div>
      <Modal position={'bottom'} open={sortModal} onClose={handleSortModal}>
        <Div className={'bg-white w-full pl-5 pr-1 py-5 flex-col gap-6'}>
          <Div className={'w-full items-center justify-between'}>
            <Text typography={['lg', 'lg']}>Sort by</Text>
            <Button className={'!text-black'} onClick={handleSortModal} startAdornment={<CloseIcon />} variant={'text'} color={'frost'} />
          </Div>
          <Div className={'flex-col w-full gap-1'}>
            <Button onClick={() => handleSortBy('PHL')} variant={'text'} fontType={'medium'} color={'frost'} className={'w-full !pl-0 !justify-end !text-black'} size={'large'} >
              Price - High to Low
            </Button>
            <Button onClick={() => handleSortBy('PLH')} variant={'text'} fontType={'medium'} color={'frost'} className={'w-full !pl-0 !justify-end !text-black'} size={'large'} >
              Price - Low to High
            </Button>
            <Button onClick={() => handleSortBy('PD')} variant={'text'} fontType={'medium'} color={'frost'} className={'w-full !pl-0 !justify-end !text-black'} size={'large'} >
              Discount
            </Button>
          </Div>
        </Div>
      </Modal>
      <Modal position={'bottom'} open={filterModal} onClose={handleFilterModal}>
        <Div className={'bg-white w-full p-5 flex-col gap-6'}>
          <Div className={'w-full items-center justify-between'}>
            <Text typography={['lg', 'lg']}>Filters</Text>
            <Button className={'!pr-0 !text-black'} onClick={handleFilterModal} startAdornment={<CloseIcon />} variant={'text'} color={'frost'} />
          </Div>
          <Div className={'flex-col w-full gap-6 overflow-y-auto overflow-x-hidden max-h-[500px]'}>
            <Collapsible header={'All Categories'}>
              <RadioGroup onChange={handleCategory} value={selectedCategory} className={'flex-col w-full py-1.5 gap-3'}>
                {categories.map((category, index: number) => (
                  <FormControlLabel
                    key={`Category_${index}`}
                    className={'pl-0 pt-1.5'}
                    label={`${category} (${counts[category] || 0})`}
                  >
                    <RadioButton checked={selectedCategory === category} value={category} size={'small'} name={category}/>
                  </FormControlLabel>
                ))}
              </RadioGroup>
            </Collapsible>
            <Divider />
            <Collapsible header={'Price'}>
              <Div className={'flex-col w-full pt-5 px-3'}>
                <MultiRangeSlider min={0} max={100} step={1} value={priceRange} onChange={handlePriceRange}/>
              </Div>
            </Collapsible>
            <Divider />
            <Collapsible header={'Caffeine level'}>
              <Div className={'flex-col w-full py-4 gap-2'}>
                {[5, 4, 3, 2, 1].map((item, index) => (
                  <label key={`Caffeine_${index}`} className={'gap-2 flex'}>
                    <Checkbox onChange={() => handleCaffeineLevel(item)} checked={caffeineLevel.includes(item)} size={'medium'}/>
                    <Rating size={['xs', 'xs']} value={item}/>
                  </label>
                ))}
              </Div>
            </Collapsible>
            <Divider />
            <Collapsible header={'Popular Tag'}>
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
            </Collapsible>
            <Divider />
          </Div>
          <Div className={'w-full gap-4'}>
            <Button onClick={() => handleClearFilters()} size={'large'} color={'frost'} className={'w-full'}>Clear All</Button>
            <Button onClick={handleFilterModal} size={'large'} className={'w-full'}>View {products.length} Results</Button>
          </Div>
        </Div>
      </Modal>
    </Div>
  );
};

export default MobileFilter;
