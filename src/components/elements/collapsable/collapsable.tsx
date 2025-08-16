'use client';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Text from '../text';

interface IProps {
  open?: boolean;
  header: string | React.ReactNode;
  children: ReactNode
  className?: string
  headerClassName?: string
  subTitle?: string
  contentClassName?: string
}
import classNames from '@utils/helpers/class-names';
import { AnimatePresence, motion } from 'motion/react';

const Collapsible: React.FC<IProps> = ({
  open,
  children,
  header,
  className,
  headerClassName,
  contentClassName,
  subTitle,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0
  );
  const ref = useRef<HTMLDivElement>(null);
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (!height || !isOpen || !ref.current) { return undefined; }
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);
  useEffect(() => {
    if (isOpen) { setHeight(ref.current?.getBoundingClientRect().height); } else { setHeight(0); }
  }, [isOpen]);

  return (
    <div className={classNames(
      'rounded-lg transition-all duration-300',
      isOpen ? 'bg-flurries-500 border border-control-200 hover:border-control-500' : 'bg-transparent border-transparent border', className)}>
      <div dir='ltr'>
        <label className={classNames(
          'flex justify-between md:py-1.5 py-4 hover:cursor-pointer min-h-[52px] items-center px-4 rounded-lg transition-all duration-300',
          isOpen ? 'bg-transparent border-transparent border' : 'border border-control-100 hover:border-control-300', headerClassName)}>
          <div>
            {subTitle && <Text typography={['sm', 'sm']} type='medium' color='grey.700'>{subTitle}</Text>}
            <Text typography={['sm', 'sm']} color='inherit' type='bold' className={'select-none'}>{header}</Text>
          </div>
          <button
            className={classNames('transition duration-300', isOpen ? 'rotate-180' : 'rotate-0')}
            onClick={handleFilterOpening}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </label>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: height }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className={
              classNames('px-4',
                contentClassName
              )}>
            <div ref={ref}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}
                exit={{ opacity: 0 }}
                className={'pb-4'}>{children}</motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Collapsible;
