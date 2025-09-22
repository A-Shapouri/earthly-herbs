import React from 'react';
import Skeleton from '@elements/skeleton';
import Div from '@elements/div';

const AddressSkeleton = () => {
  return (
    <Div className="border border-control-100 rounded-lg p-2 items-center space-y-4 justify-between">
      {/* Header with name and actions */}
      <Div className="flex justify-between items-center w-full">
        <Div className="space-y-2 flex-1 flex-col w-full">
          <Skeleton className="max-h-5 w-36" />
          <Skeleton className="max-h-5 !max-w-[60%]" />
        </Div>
      </Div>

      {/* Action buttons */}
      <Div className="flex gap-2 items-center justify-center">
        <Skeleton shape='circle' className="h-9" />
        <Skeleton shape='circle' className="h-9" />
      </Div>
    </Div>
  );
};

export default AddressSkeleton;
