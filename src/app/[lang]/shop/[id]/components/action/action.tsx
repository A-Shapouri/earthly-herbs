import React from "react";
import Div from "@elements/div";
import Button from "@elements/button";
import {ShopActions} from "@store/shop/shop-actions";
import {useRouter} from "next-nprogress-bar";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/root-reducer";
import TrashIcon from "@icons-components/trash";
import MinusIcon from "@icons-components/minus";
import AnimatedNumber from "@modules/animated-number";
import PlusIcon from "@icons-components/plus";
import getParseRoute from "@utils/helpers/parse-route";
import routes from "@routes";


const Action = ({id}: { id: number }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {productItem} = useSelector((state: RootState) => state.products);
  const {cart} = useSelector((state: RootState) => state.shop);

  const cartItem = cart.find((item: any) => item.id === id);

  const handleAddProduct = () => {
    dispatch(ShopActions.addToCart({
      id: id,
      name: productItem.title,
      price: productItem.price,
      image: productItem.image,
    }));
  };

  const handleRemoveProduct = () => {
    dispatch(ShopActions.removeFromCart({
      id: id,
    }));
  };

  const handleIncreaseProduct = () => {
    dispatch(ShopActions.increaseProductAmount({
      id: id,
    }));
  };

  const handleDecreaseProduct = () => {
    dispatch(ShopActions.decreaseProductAmount({
      id: id,
    }));
  };

  const handleBuyNow = () => {
    router.push(getParseRoute({
      pathname: routes['route.shop.cart'],
      query: {
        lang: 'en'
      }
    }))
  }
  return (
    <Div className={'md:mt-20 mt-6'}>
      {cartItem ? (
        <Div className={'w-full gap-4'}>
          <Div
            className='rounded-full items-center md:gap-5 gap-3 border border-control md:px-6 px-4 md:h-16 h-12 self-center'>
            {cartItem.amount === 1 ? (
              <Button onClick={handleRemoveProduct} size='small' iconSize={'small'} color='danger' variant='text'
                      className='!p-0' startAdornment={<TrashIcon/>}/>
            ) : (
              <Button onClick={handleDecreaseProduct} size='small' iconSize={'small'} color='danger' variant='text'
                      className='!p-0' startAdornment={<MinusIcon/>}/>
            )}
            <AnimatedNumber amount={cartItem.amount}/>
            <Button onClick={handleIncreaseProduct} size='small' iconSize={'small'} color='primary' variant='text'
                    className='!p-0' startAdornment={<PlusIcon/>}/>
          </Div>
          <Button onClick={handleBuyNow} className='w-full !h-16' color='secondary' size='large'>
            Buy Now
          </Button>
        </Div>
      ) : (
        <Button onClick={handleAddProduct} className='w-full !h-16' color='secondary' size='large'>
          Add to Cart
        </Button>
      )}
    </Div>
  )
}

export default Action;