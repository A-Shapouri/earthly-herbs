import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Button from '@elements/button';
import { useRouter } from 'next-nprogress-bar';

const EmptyWishlist = () => {
  const router = useRouter();

  const handleBrowseProducts = () => {
    router.push('/en/products');
  };

  return (
    <Div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <Div className="mb-6">
        {/* Heart icon placeholder */}
        <Div className="w-16 h-16 mx-auto mb-4 bg-grey-100 rounded-full flex items-center justify-center">
          <Text typography={['xl', 'xl']} color="grey.400">❤️</Text>
        </Div>
      </Div>

      <Text typography={['lg', 'lg']} type="medium" color="grey.700" className="mb-2">
        Your wishlist is empty
      </Text>

      <Text typography={['sm', 'sm']} color="grey.500" className="mb-6 max-w-md">
        Save items you love by adding them to your wishlist. They'll appear here for easy access later.
      </Text>

      <Button
        color="secondary"
        onClick={handleBrowseProducts}
        className="px-6 py-3 w-full"
      >
        Browse Products
      </Button>
    </Div>
  );
};

export default EmptyWishlist;
