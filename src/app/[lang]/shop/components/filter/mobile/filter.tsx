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

const MobileFilter = () => {
  const [sortModal, setSortModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [value, setValue] = React.useState({ min: 50, max: 1500 });

  const handleSortModal = () => {
    setSortModal(prevState => !prevState);
  };

  const handleFilterModal = () => {
    setFilterModal(prevState => !prevState);
  };

  return (
    <Div className={'flex-col'}>
      <Div className={'fixed shadow-md bottom-0 right-0 bg-white h-[85px] w-full z-10 items-center justify-evenly drop-shadow-2xl shadow-brown-800'}>
        <Button onClick={handleFilterModal} color={'frost'} className={'flex-col gap-2'} variant={'text'} startAdornment={<FilterIcon />}>
          Filter
        </Button>
        <Button onClick={handleSortModal} color={'frost'} className={'flex-col gap-2'} variant={'text'} startAdornment={<SortIcon />}>
          Sort
        </Button>
      </Div>
      <Modal position={'bottom'} open={sortModal} onClose={handleSortModal}>
        <Div className={'bg-white w-full pl-5 pr-1 py-5 flex-col gap-6'}>
          <Div className={'w-full items-center justify-between'}>
            <Text typography={['lg', 'lg']}>Sort by</Text>
            <Button onClick={handleSortModal} startAdornment={<CloseIcon />} variant={'text'} color={'frost'} />
          </Div>
          <Div className={'flex-col w-full gap-1'}>
            <Button onClick={handleSortModal} variant={'text'} fontType={'medium'} color={'frost'} className={'w-full !pl-0 !justify-end'} size={'large'} >
              Price - High to Low
            </Button>
            <Button onClick={handleSortModal} variant={'text'} fontType={'medium'} color={'frost'} className={'w-full !pl-0 !justify-end'} size={'large'} >
              Price - Low to High
            </Button>
            <Button onClick={handleSortModal} variant={'text'} fontType={'medium'} color={'frost'} className={'w-full !pl-0 !justify-end'} size={'large'} >
              Popularity
            </Button>
            <Button onClick={handleSortModal} variant={'text'} fontType={'medium'} color={'frost'} className={'w-full !pl-0 !justify-end'} size={'large'} >
              Discount
            </Button>
            <Button onClick={handleSortModal} variant={'text'} fontType={'medium'} color={'frost'} className={'w-full !pl-0 !justify-end'} size={'large'} >
              Caffeine Level
            </Button>
          </Div>
        </Div>
      </Modal>
      <Modal position={'bottom'} open={filterModal} onClose={handleFilterModal}>
        <Div className={'bg-white w-full p-5 flex-col gap-6'}>
          <Div className={'w-full items-center justify-between'}>
            <Text typography={['lg', 'lg']}>Filters</Text>
            <Button className={'!pr-0'} onClick={handleFilterModal} startAdornment={<CloseIcon />} variant={'text'} color={'frost'} />
          </Div>
          <Div className={'flex-col w-full gap-6 overflow-y-auto overflow-x-hidden max-h-[500px]'}>
            <Collapsible header={'All Categories'}>
              <Div className={'flex-col w-full py-1.5 gap-3'}>
                <FormControlLabel className={'pl-0 pt-1.5'} label={'Day (50)'}>
                  <RadioButton size={'small'} name={'day'} />
                </FormControlLabel>
                <FormControlLabel className={'pl-0 pt-1.5'} label={'Night (150)'}>
                  <RadioButton size={'small'} name={'day'} />
                </FormControlLabel>
                <FormControlLabel className={'pl-0 pt-1.5'} label={'Tea (54)'}>
                  <RadioButton size={'small'} name={'day'} />
                </FormControlLabel>
                <FormControlLabel className={'pl-0 pt-1.5'} label={'Matcha (47)'}>
                  <RadioButton size={'small'} name={'day'} />
                </FormControlLabel>
                <FormControlLabel className={'pl-0 pt-1.5'} label={'Blends (43)'}>
                  <RadioButton size={'small'} name={'day'} />
                </FormControlLabel>
              </Div>
            </Collapsible>
            <Divider />
            <Collapsible header={'Price'}>
              <Div className={'flex-col w-full pt-5 px-3'}>
                <MultiRangeSlider min={0} max={1700} step={1} value={value} onChange={setValue} />
              </Div>
            </Collapsible>
            <Divider />
            <Collapsible header={'Caffeine level'}>
              <Div className={'flex-col w-full py-4 gap-2'}>
                <label className={'gap-2 flex'}>
                  <Checkbox size={'tiny'} />
                  <Rating size={['xs', 'xs']} value={5} />
                </label>
                <label className={'gap-2 flex'}>
                  <Checkbox size={'tiny'} />
                  <Rating size={['xs', 'xs']} value={4} />
                </label>
                <label className={'gap-2 flex'}>
                  <Checkbox size={'tiny'} />
                  <Rating size={['xs', 'xs']} value={3} />
                </label>
                <label className={'gap-2 flex'}>
                  <Checkbox size={'tiny'} />
                  <Rating size={['xs', 'xs']} value={2} />
                </label>
                <label className={'gap-2 flex'}>
                  <Checkbox size={'tiny'} />
                  <Rating size={['xs', 'xs']} value={1} />
                </label>
              </Div>
            </Collapsible>
            <Divider />
            <Collapsible header={'Popular Tag'}>
              <Div className={'w-full py-3 gap-2 flex-wrap'}>
                <Tag value={'Healthy'} />
                <Tag value={'Low Caffeine'} />
                <Tag value={'High Caffeine'} />
                <Tag value={'Fresh'} />
                <Tag value={'Day'} />
                <Tag value={'Snacks'} />
              </Div>
            </Collapsible>
            <Divider />
          </Div>
          <Div className={'w-full gap-4'}>
            <Button size={'large'} color={'frost'} className={'w-full'}>Clear All</Button>
            <Button onClick={handleFilterModal} size={'large'} className={'w-full'}>View 10 Results</Button>
          </Div>
        </Div>
      </Modal>
    </Div>
  );
};

export default MobileFilter;
