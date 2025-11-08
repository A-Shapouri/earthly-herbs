import Breadcrumbs from '@elements/breadcrumbs';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import Newsletter from '../(home)/components/newsletter';
import Media from '@elements/media';
import ProductsClient from './components/products-client';
import productsListServerApi from '@api/products/list-server';
import categoriesListServerApi from '@api/categories/list-server';

const Products = async () => {
  // Fetch initial data on the server
  let initialProducts = [];
  let initialCategories = [];

  try {
    // Fetch products and categories in parallel
    const [productsResponse, categoriesResponse] = await Promise.all([
      productsListServerApi({
        page: 0,
        sort: 'id,desc',
        perPage: 20,
        cache: 'no-cache',
      }),
      categoriesListServerApi({
        cache: 'no-cache',
      }),
    ]);

    initialProducts = productsResponse?.data || [];
    initialCategories = categoriesResponse || [];
  } catch (error) {
    console.error('Failed to fetch initial data:', error);
    // Continue with empty arrays - client will handle the error state
  }

  return (
    <Container>
      <Div className={'bg-flurries-500 w-full justify-center items-center'}>
        <Wrapper className={'px-5 md:px-0'}>
          <Breadcrumbs breadcrumbsData={[{
            label: 'Products',
          }]} />
        </Wrapper>
      </Div>
      <Wrapper className={'px-5 md:flex-row-reverse flex-col pt-4 gap-4 pb-24 md:gap-16 md:pt-16'}>
        <ProductsClient
          initialProducts={initialProducts}
          initialCategories={initialCategories}
        />
      </Wrapper>
      <Wrapper>
        <Media className={'w-full'} greaterThan={'sm'}>
          <Newsletter />
        </Media>
      </Wrapper>
    </Container>
  );
};

export default Products;
