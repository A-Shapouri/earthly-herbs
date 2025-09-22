import React from 'react';
import Skeleton from '@elements/skeleton';
import Div from '@elements/div';

const WishlistSkeleton = () => {
  return (
    <Div className="w-full p-3 flex-col gap-6 border border-gray-300 rounded-2xl">
      <Div className="gap-6">
        {/* Product image and details */}
        <Div className="flex gap-6">
          <Skeleton shape='circle' className="!min-h-24 !w-24" />
          <Div className="flex-col gap-1 flex-1">
            <Skeleton className="max-h-4 w-32" />
            <Skeleton className="max-h-5 w-20" />
          </Div>
        </Div>
      </Div>

      {/* Action buttons */}
      <Div className="grid grid-cols-3 gap-2">
        <Skeleton shape='circle' className="h-10 w-full" />
        <Skeleton shape='circle' className="h-10 w-full col-span-2" />
      </Div>
    </Div>
  );
};

export default WishlistSkeleton;
