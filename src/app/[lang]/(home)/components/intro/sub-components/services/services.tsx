'use client';
import React, { useEffect, useState } from 'react';
import Div from '@elements/div';
import ServiceItem from './service-item';
import ShippingIcon from '@icons-components/shipping';
import CustomerSupportIcon from '@icons-components/customer-support';
import BagIcon from '@icons-components/bag';
import BoxIcon from '@icons-components/box';

const Services = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index < 6) {
        setIndex(prevState => prevState + 1);
      }
    }, 1000);
  }, [index]);

  return (
    <Div className={'md:p-10 py-3 px-6 flex-col md:gap-16 gap-4 items-start justify-start md:my-36 my-3'}>
      <ServiceItem
        title={'Free Shipping'}
        subTitle={'Free shipping on all your order'}
        active={index === 2}
      >
        <ShippingIcon />
      </ServiceItem>
      <ServiceItem
        title={'Customer Support 24/7'}
        subTitle={'Instant access to Support'}
        active={index === 3}
      >
        <CustomerSupportIcon />
      </ServiceItem>
      <ServiceItem
        title={'100% Secure Payment'}
        subTitle={'We ensure your money is save'}
        active={index === 4}
      >
        <BagIcon />
      </ServiceItem>
      <ServiceItem
        title={'Money-Back Guarantee'}
        subTitle={'30 Days Money-Back Guarantee'}
        active={index === 5}
      >
        <BoxIcon />
      </ServiceItem>
    </Div>
  );
};

export default Services;
