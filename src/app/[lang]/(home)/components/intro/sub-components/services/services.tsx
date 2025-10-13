'use client';
import React from 'react';
import Div from '@elements/div';
import ServiceItem from './service-item';
import ShippingIcon from '@icons-components/shipping';
import CustomerSupportIcon from '@icons-components/customer-support';
import BagIcon from '@icons-components/bag';
import BoxIcon from '@icons-components/box';
import { motion } from 'motion/react';
const Services = () => {
  return (
    <Div className={'md:p-10 py-3 px-6 flex-col md:gap-16 gap-4 items-start justify-start md:my-36 my-3'}>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
        <ServiceItem
          title={'Free Shipping'}
          subTitle={'Free delivery unlocks at $50'}
        >
          <ShippingIcon />
        </ServiceItem>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.3 }}>
        <ServiceItem
          title={'Customer Support 24/7'}
          subTitle={'Instant access to Support'}
        >
          <CustomerSupportIcon />
        </ServiceItem>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.6 }}>
        <ServiceItem
          title={'100% Secure Payment'}
          subTitle={'We ensure your money is save'}
        >
          <BagIcon />
        </ServiceItem>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.9 }}>
        <ServiceItem
          title={'Money-Back Guarantee'}
          subTitle={'30 Days Money-Back Guarantee'}
        >
          <BoxIcon />
        </ServiceItem>
      </motion.div>
    </Div>
  );
};

export default Services;
