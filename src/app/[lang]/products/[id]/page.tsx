import React from 'react';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import Breadcrumbs from '@elements/breadcrumbs';
import Text from '@elements/text';
import Image from 'next/image';
import Rating from '@elements/rating';
import Amounts from './components/amounts';
import Action from './components/action';
import Media from '@elements/media';
import Slider from '@modules/slider';
import productDetailsServerApi from '@api/products/show-server';
import { notFound } from 'next/navigation';
import BackButton from './components/back-button';
import { Metadata } from 'next';
import ImageTemp from '../../../../../public/images/temp/products/turmeric-tonic-organic/turmeric-tonic-sachet-steeped-x21_bc2a3df9-5b6f-4a24-b2c7-7e043bd849c0-xa_550x.webp';
import { mainProducts } from '../../(home)/dummy-data';

interface ProductDetailsPageProps {
  params: {
    id: string;
    lang: string;
  };
}

const imageList = [
  ImageTemp,
  ImageTemp,
  ImageTemp,
  ImageTemp,
];

export async function generateMetadata({ params }: ProductDetailsPageProps): Promise<Metadata> {
  const { id } = params;

  try {
    // First check if it's a main product
    const mainProduct = mainProducts.find(p => p.id.toString() === id);
    if (mainProduct) {
      return {
        title: `${mainProduct.title} - Earthly Herbs`,
        description: mainProduct.description || `Buy ${mainProduct.title} at the best price. High-quality herbal products from Earthly Herbs.`,
        openGraph: {
          title: `${mainProduct.title} - Earthly Herbs`,
          description: mainProduct.description,
          images: [
            {
              url: mainProduct.image,
              width: 800,
              height: 600,
              alt: mainProduct.title,
            },
          ],
        },
        twitter: {
          card: 'summary_large_image',
          title: `${mainProduct.title} - Earthly Herbs`,
          description: mainProduct.description,
          images: [mainProduct.image],
        },
      };
    }

    // Otherwise, fetch from regular API
    const productItem = await productDetailsServerApi({
      id,
      cache: 'force-cache',
      next: { revalidate: 3600 },
    });

    return {
      title: `${productItem.model} - Earthly Herbs`,
      description: productItem.description || `Buy ${productItem.model} at the best price. High-quality herbal products from Earthly Herbs.`,
      openGraph: {
        title: `${productItem.model} - Earthly Herbs`,
        description: productItem.description,
        images: [
          {
            url: productItem.image,
            width: 800,
            height: 600,
            alt: productItem.model,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${productItem.model} - Earthly Herbs`,
        description: productItem.description,
        images: [productItem.image],
      },
    };
  } catch (error) {
    return {
      title: 'Product Not Found - Earthly Herbs',
      description: 'The requested product could not be found.',
    };
  }
}

const ProductDetails = async ({ params }: ProductDetailsPageProps) => {
  const { id } = params;

  let productItem;
  let isMainProduct = false;

  // First check if it's a main product
  const mainProduct = mainProducts.find(p => p.id.toString() === id);
  if (mainProduct) {
    productItem = mainProduct;
    isMainProduct = true;
  } else {
    // Otherwise, fetch from regular API
    try {
      productItem = await productDetailsServerApi({
        id,
        cache: 'force-cache',
        next: { revalidate: 3600 },
      });
    } catch (error) {
      console.error('Failed to fetch product details:', error);
      notFound();
    }
  }

  if (!productItem) {
    notFound();
  }
  console.log(productItem);
  // Use main product image list or default
  const productImageList = isMainProduct ? [productItem.image] : imageList;

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'products',
            path: `/${params.lang}/products`,
          }, {
            label: isMainProduct ? productItem.title : productItem.model,
          }]} />
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-4 gap-4 pb-24 md:gap-16 md:pt-16'}>
        <Div className={'gap-4 md:gap-28 flex-col w-full'}>
          <Div className='w-full justify-between items-center hidden md:visible'>
            <BackButton />
            <Div className='w-6 h-10' />
          </Div>
          <Div className={'grid md:grid-cols-5 gap-8 md:gap-16 flex-col grid-cols-1'}>
            <Media className={'w-full col-span-3'} greaterThan={'sm'}>
              <Div className='grid grid-cols-5 gap-4 w-full'>
                <Div className='col-span-1 grid grid-cols-1 gap-4 max-h-[670px]'>
                  {productImageList?.map((image: any, index: number) => (
                    <Div key={index} className={'relative rounded-2xl shadow-md w-full h-full'}>
                      <Image className={'rounded-2xl object-contain'} fill={true} src={image} alt={isMainProduct ? productItem.title : productItem.model || 'MODEL_1'} />
                    </Div>
                  ))}
                </Div>
                <Div
                  className="w-full justify-between items-center relative h-full col-span-4 rounded-2xl shadow-md max-h-[670px]">
                  <Image className={'rounded-2xl'} fill={true} src={productImageList[0]} alt={isMainProduct ? productItem.title : productItem.model || 'MODEL_1'} />
                </Div>
              </Div>
            </Media>
            <Media className={'w-full'} lessThan={'md'}>
              <Slider direction={'ltr'} slides={1}>
                {productImageList?.map((image: any, index: number) => (
                  <Div key={index} className={'relative w-full h-60 bg-yellow-500'}>
                    <Image fill={true} src={image} alt={isMainProduct ? productItem.title : productItem.model || 'MODEL_1'} className="object-cover" />
                  </Div>
                ))}
              </Slider>
            </Media>
            <Div className={'md:col-span-2 flex-col'}>
              <Text typography={['lg', 'lg']} type={'medium'} color={'grey.700'}>{productItem.model || 'MODEL_1'}</Text>
              <Text typography={['xl', 'xl']} type={'normal'} color={'black'}>${productItem.price || '100'}</Text>
              <Div className={'mt-4 md:gap-8 gap-4'}>
                <Rating size={['xxs', 'xxs']} value={parseFloat(productItem.rate) || 0} />
                <Text typography={['md', 'md']} type={'medium'}>Category: {productItem.category || 'CATEGOY_1'}</Text>
                <Text typography={['md', 'md']} type={'medium'}>Tag: {productItem.tag || 'TAG_1'}</Text>
              </Div>
              <Text typography={['md', 'md']} type={'medium'} align={'start'}
                className={'mt-8'}>{productItem.description || 'description description description description description description description description description description'}</Text>
              <Div className={'mt-11 flex-col gap-4'}>
                <Text typography={['md', 'md']} type={'medium'}>Amount:</Text>
                <Amounts data={productItem.amounts || ['amount_1', 'amount_2', 'amount_3']} />
              </Div>
              <Media greaterThan={'sm'} className={'w-full'}>
                <Action id={productItem.id} />
              </Media>
            </Div>
          </Div>
        </Div>
      </Wrapper>
      <Media lessThan={'md'} className={'shadow-2xl drop-shadow-2xl w-full fixed bottom-0 z-20'}>
        <Div className={'bg-white h-24 px-5 items-center justify-between w-full gap-4'}>
          <Div className={'flex-col gap-1 whitespace-nowrap'}>
            <Text className={'whiteSpace-nowrap'} color={'grey.700'} typography={['lg', 'lg']}>Add to Cart</Text>
            <Text type={'bold'} typography={['lg', 'lg']}>
              ${productItem.price}
            </Text>
          </Div>
          <Action id={productItem.id} />
        </Div>
      </Media>
    </Container>
  );
};

export default ProductDetails;
