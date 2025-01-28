import React, {useEffect, useMemo, useState} from "react";
import { motion, AnimatePresence } from "motion/react";
import Text from "@elements/text";
import Div from "@elements/div";

const AnimatedNumber = ({ amount, typography = ['xs', 'md'], color = 'primary', price, currency } : {amount: number, typography?: any, color?: any, price?: boolean, currency?: string}) => {
  const [prevAmount, setPrevAmount] = useState(amount);
  const isIncreasing = useMemo(() => amount > prevAmount, [amount]);

  useEffect(() => {
    setPrevAmount(amount);
  }, [amount]);

  const slideVariants = {
    initial: {
      y: isIncreasing ? 30 : -30,
      opacity: 0,
    },
    animate: { y: 0, opacity: 1 },
    exit: {
      y: isIncreasing ? -30 : 30,
      opacity: 0,
    },
  };

  return (
    <Div className={'items-center justify-center h-[100px] relative w-auto'}>
      <AnimatePresence>
        <motion.div
          className='absolute'
          key={amount}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <Text className={'whitespace-nowrap'} color={color} typography={typography}>{price ? '$' : null}{amount} {currency}</Text>
        </motion.div>
      </AnimatePresence>
    </Div>
  );
};

export default AnimatedNumber;