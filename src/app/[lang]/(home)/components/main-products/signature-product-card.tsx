import React from 'react';
import Div from '@elements/div';
import Text from '@elements/text';
import Image from 'next/image';
import Button from '@elements/button';
import Link from 'next/link';
import Action from '@modules/product-item/action';
import classNames from '@utils/helpers/class-names';

interface SignatureProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: string;
    offPrice: string;
    offer: string;
    moto: string;
    image: string;
    rate: number;
    isHealthy: boolean;
    isNew: boolean;
    category: string;
    tag: string;
  };
  reverse: boolean;
}

const SignatureProductCard = ({ product, reverse }: SignatureProductCardProps) => {
  return (
    <Div className={classNames('bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300', reverse ? 'flex-row-reverse' : 'flex-row')}>
      {/* Product Image Section */}
      <Div className="relative w-3/4 bg-gradient-to-br from-yellow-50 to-orange-50 p-8">
        <Div className="flex items-center justify-center h-full w-full">
          <Image
            src={product.image}
            alt={product.title}
            height={320}
            width={200}
            className="object-contain"
          />
        </Div>

        {/* Product Badges */}
        <Div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isHealthy && (
            <Div className="bg-green-100 px-3 py-1 rounded-full items-center justify-center">
              <Text typography={['xs', 'xs']} color="tertiary">Healthy</Text>
            </Div>
          )}
          {product.isNew && (
            <Div className="bg-blue-100 px-3 py-1 rounded-full items-center justify-center">
              <Text typography={['xs', 'xs']} color="blue">New</Text>
            </Div>
          )}
        </Div>

        {/* Rating */}
        <Div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <Text typography={['xs', 'xs']} className="flex items-center gap-1">
            ⭐ {product.rate}
          </Text>
        </Div>
      </Div>

      {/* Product Information Section */}
      <Div className="p-6 flex flex-col gap-4">
        {/* Product Title and Category */}
        <Div className="flex flex-col gap-1">
          <Text typography={['lg', 'lg']} type="bold" color="black">
            {product.title}
          </Text>
          <Text typography={['sm', 'sm']} color="grey.600">
            {product.category} • {product.tag}
          </Text>
        </Div>

        {/* Product Description */}
        <Div className="flex flex-col">
          <Text type='medium' typography={['sm', 'sm']} color="grey.700" className="overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
            {product.description.split('\n')[0]}
          </Text>
        </Div>

        {/* Key Benefits */}
        <Div className="flex flex-col gap-2">
          <Text typography={['xs', 'xs']} type="bold" color="grey.800">
            Key Benefits:
          </Text>
          <Div className="flex flex-col gap-1">
            {product.description.includes('Organic Yerba Mate') && (
              <Text typography={['xs', 'xs']} color="grey.600">
                • Gentle energy from natural caffeine
              </Text>
            )}
            {product.description.includes('Organic Spearmint') && (
              <Text typography={['xs', 'xs']} color="grey.600">
                • Elevates mood and reduces stress
              </Text>
            )}
            {product.description.includes('Organic Chamomile') && (
              <Text typography={['xs', 'xs']} color="grey.600">
                • Promotes tranquility and aids sleep
              </Text>
            )}
            {product.description.includes('Organic Lavender') && (
              <Text typography={['xs', 'xs']} color="grey.600">
                • Calms mind and improves sleep quality
              </Text>
            )}
          </Div>
        </Div>

        {/* Pricing Section */}
        <Div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg flex flex-col gap-4">
          <Div className="flex items-center justify-between">
            <Text typography={['sm', 'sm']} type="bold" color="grey.800">
              {product.moto}
            </Text>
            <Div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
              <Text typography={['xs', 'xs']} type="bold">
                ⭐ {product.offer}
              </Text>
            </Div>
          </Div>

          <Div className="flex items-center gap-3">
            <Text typography={['lg', 'lg']} type="bold" color="primary">
              ${product.offPrice}
            </Text>
            <Text typography={['sm', 'sm']} color="grey.500" className="line-through">
              ${product.price}
            </Text>
            <Div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
              Save ${(parseFloat(product.price) - parseFloat(product.offPrice)).toFixed(2)}
            </Div>
          </Div>

          {/* Action Buttons */}
          <Div className="flex gap-3 items-center">
            <Link
              href={`/en/products/${product.id}`}
              className="flex-1"
            >
              <Button
                color="secondary"
                variant="outlined"
                className="w-full"
              >
                Learn More
              </Button>
            </Link>
            <Div className="flex-1">
              <Action id={product.id} />
            </Div>
          </Div>
        </Div>

        {/* Product Attributes */}
        <Div className="flex items-center justify-center gap-4 pt-2">
          <Div className="flex items-center gap-1">
            <Text typography={['xs', 'xs']} color="grey.600">100% Organic</Text>
          </Div>
          <Div className="flex items-center gap-1">
            <Text typography={['xs', 'xs']} color="grey.600">Plastic-Free</Text>
          </Div>
          <Div className="flex items-center gap-1">
            <Text typography={['xs', 'xs']} color="grey.600">Hand-Crafted</Text>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default SignatureProductCard;
