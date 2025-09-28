import React from 'react';
import Div from '@elements/div';
import Skeleton from '@elements/skeleton';

const ProductItemSkeleton = () => {
  return (
    <Div
      className={'rounded-xl md:rounded-2xl flex-col border border-grey-50 shadow-sm md:shadow-md w-full'}>
      {/* Image skeleton */}
      <Div className={'rounded-t-xl md:rounded-t-2xl h-[190px] w-full relative'}>
        <Skeleton
          className={'w-full h-full rounded-t-xl md:rounded-t-2xl'}
          color={'slate'}
          shape={'rectangular'}
        />
      </Div>

      {/* Content skeleton */}
      <Div className={'w-full items-start rounded-b-xl md:rounded-b-2xl bg-white justify-between md:px-4 px-3 h-fit pb-2 md:pt-3 pt-2 flex-col gap-2'}>
        {/* Title skeleton */}
        <Skeleton
          className={'w-3/4 !max-h-4'}
          color={'slate'}
          shape={'rectangular'}
        />

        {/* Bottom section with price and action */}
        <Div className={'w-full justify-between items-center h-12'}>
          <Div className={'flex-col gap-1'}>
            {/* Price skeleton */}
            <Skeleton
              className={'w-16 !max-h-5'}
              color={'slate'}
              shape={'rectangular'}
            />
            {/* Rating skeleton */}
            <Skeleton
              className={'w-20 !max-h-3'}
              color={'slate'}
              shape={'rectangular'}
            />
          </Div>
          {/* Action button skeleton */}
          <Skeleton
            className={'w-8'}
            color={'slate'}
            shape={'circle'}
          />
        </Div>
      </Div>
    </Div>
  );
};

export default ProductItemSkeleton;
