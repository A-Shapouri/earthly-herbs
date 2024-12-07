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
const DesktopFilter = () => {
  const [value, setValue] = React.useState({ min: 50, max: 1500 });

  return (
    <Div className={'flex-col gap-6'}>
      <Button data-ripple-light="true" className={'w-36'} startAdornment={<FilterSimpleIcon />}>
        Filter
      </Button>
      <Div className={'flex-col w-full gap-6'}>
        <Collapsible open={true} header={'All Categories'}>
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
        <Collapsible open={true} header={'Price'}>
          <Div className={'flex-col w-full pt-5 px-3'}>
            <MultiRangeSlider min={0} max={1700} step={1} value={value} onChange={setValue} />
          </Div>
        </Collapsible>
        <Divider />
        <Collapsible open={true} header={'Caffeine level'}>
          <Div className={'flex-col w-full py-4 gap-2'}>
            <label className={'gap-2 flex'}>
              <Checkbox size={'medium'} />
              <Rating size={['xs', 'xs']} value={5} />
            </label>
            <label className={'gap-2 flex'}>
              <Checkbox size={'medium'} />
              <Rating size={['xs', 'xs']} value={4} />
            </label>
            <label className={'gap-2 flex'}>
              <Checkbox size={'medium'} />
              <Rating size={['xs', 'xs']} value={3} />
            </label>
            <label className={'gap-2 flex'}>
              <Checkbox size={'medium'} />
              <Rating size={['xs', 'xs']} value={2} />
            </label>
            <label className={'gap-2 flex'}>
              <Checkbox size={'medium'} />
              <Rating size={['xs', 'xs']} value={1} />
            </label>
          </Div>
        </Collapsible>
        <Divider />
        <Collapsible open={true} header={'Popular Tag'}>
          <Div className={'w-full py-3 gap-2 flex-wrap'}>
            <Tag value={'Healthy'} />
            <Tag value={'Low Caffeine'} />
            <Tag value={'High Caffeine'} />
            <Tag value={'Fresh'} />
            <Tag value={'Day'} />
            <Tag value={'Snacks'} />
          </Div>
        </Collapsible>
      </Div>
    </Div>
  );
};

export default DesktopFilter;
