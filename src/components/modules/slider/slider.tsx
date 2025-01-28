import React, { useEffect, useState } from 'react';
import { SliderProps } from './slider.props';
import Button from '@elements/button'
import Div from '@elements/div'
import classNames from '@utils/helpers/class-names';

const Slider = (
  {
    children,
    delay = 2500,
    spaceBetween = 0,
    slides = 1,
    infiniteLoop = false,
    pauseOnMouseOver = false,
    autoMove = true,
    indicatorActiveColor = 'primary',
    indicator = true,
    navigation = true,
    prevNavigation,
    nextNavigation,
    direction = 'rtl',
    rows = 1,
    navigationColor = 'primary',
    tabletSlides = 1,
    mobileSlides = 1,
    indicatorClassName,
  }: SliderProps) => {
  const [showSlides, setShowSlides] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [length, setLength] = useState(Math.round(children.length / rows));
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [touchPosition, setTouchPosition] = useState(null);
  const [pause, setPause] = useState(false);
  const [sliders, setSliders] = useState<any>([]);

  const timeoutRef = React.useRef<any>(null);
  const ref = React.useRef<any>(null);

  const dir = React.useMemo(() => {
    if (direction === 'rtl') {
      return '+';
    }
    return '-';
  }, [direction]);
  const limit = React.useMemo(() => {
    if (rows !== 1) {
      return showSlides * rows >= children.length + 1;
    }
    return showSlides >= children.length;
  }, [showSlides, rows, children]);

  useEffect(() => {
    if (window && window.screen) {
      if (window.screen.width > 1024) {
        setShowSlides(slides);
      } else if (window.screen.width < 640) {
        setShowSlides(mobileSlides);
      } else { setShowSlides(tabletSlides); }
    }
  }, [slides, tabletSlides, mobileSlides]);

  useEffect(() => {
    let final = [];
    for (let i = 0; i < length; i++) {
      let output = [];
      for (let index = i * rows; index < rows * (i + 1); index++) {
        output.push(children[index]);
      }
      final.push(output);
    }
    setSliders(final);
  }, [children, length, rows]);

  useEffect(() => {
    setLength(Math.round(children.length / rows));
  }, [children, infiniteLoop, showSlides]);

  useEffect(() => {
    if (currentIndex === length - 1 || currentIndex === 0) {
      setTransitionEnabled(true);
    }
  }, [currentIndex, showSlides, length]);
  // @ts-ignore
  useEffect(() => {
    if (!pause && autoMove) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () => next(), delay,
      );

      return () => {
        resetTimeout();
      };
    }
  }, [currentIndex, delay, pause]);

  useEffect(() => {
    if (ref.current) {
      for (const arg of ref.current.children) {
        arg.style.width = `calc((100% / ${showSlides}) - (${spaceBetween}px))`;
        arg.style.gap = `${spaceBetween}px`;
        arg.style.marginLeft = `${spaceBetween / 2}px`;
        arg.style.marginRight = `${spaceBetween / 2}px`;
        arg.style.flexShrink = 0;
        arg.style.flexGrow = 1;
      }
    }
  }, [showSlides, spaceBetween]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const next = () => {
    if ((currentIndex < (length - showSlides) + 1) && currentIndex !== length) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if ((currentIndex > 0) && currentIndex !== showSlides) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === length - showSlides) {
      setTimeout(
        () => {
          setTransitionEnabled(false);
          setCurrentIndex(0);
        }, delay / 2,
      );
    }
  };

  const handlePauseAutoMove = (state: boolean) => {
    if (pauseOnMouseOver) {
      setPause(state);
    }
  };

  return (
    <Div dir={direction} className={'w-full flex-col relative'} onMouseOver={() => handlePauseAutoMove(true)} onMouseLeave={() => handlePauseAutoMove(false)}>
      <Div className={'w-full relative'}>
        {/*{navigation && !limit ? (*/}
        {/*  <Button ariaLabel={'previousNavigation'} startAdornment={<ArrowIcon className={'rotate-180'}/>} disabled={direction === 'rtl' ? currentIndex === length - showSlides : currentIndex === 0} onClick={direction === 'rtl' ? next : prev} color={navigationColor} rounded={'full'} shape={'square'} className={'absolute flex self-center items-center justify-center z-10 left-2'}/>*/}
        {/*) : null}*/}
        {/*{prevNavigation && currentIndex > 0 ? (*/}
        {/*  <>*/}
        {/*    {prevNavigation(prev)}*/}
        {/*  </>*/}
        {/*) : null}*/}
        {limit ? (
          <div ref={ref} className={'flex shrink-0 grow w-full'}>
            {sliders.map((item: any, itemIndex: number) => (
              <Div className={'flex-col w-1/2'} key={itemIndex}>
                {item}
              </Div>
            ))}
          </div>
        ) : (
          <div className={'overflow-hidden w-full h-full'}
               onTouchStart={handleTouchStart}
               onTouchMove={handleTouchMove}
          >
            <div className={`flex transition ease-linear duration-300 shrink-0 grow w-full`}
                 style={{
                   transform: `translateX(${dir}${currentIndex * (100 / showSlides)}%)`,
                   transition: !transitionEnabled ? 'none' : undefined,
                 }}
                 onTransitionEnd={handleTransitionEnd}
                 ref={ref}
            >
              {sliders.map((item: any, itemIndex: number) => (
                <Div className={'flex-col w-full shrink-0'} key={itemIndex}>
                  {item}
                </Div>
              ))}
            </div>
          </div>
        )}
        {/*{navigation && !limit ? (*/}
        {/*  <Button ariaLabel={'nextNavigation'} startAdornment={<ArrowIcon/>} color={navigationColor} disabled={direction === 'rtl' ? currentIndex === 0 : currentIndex === length - showSlides} onClick={direction === 'rtl' ? prev : next} rounded={'full'} shape={'square'} className={'absolute flex self-center items-center justify-center right-2'}/>*/}
        {/*) : null}*/}
        {/*{nextNavigation && currentIndex < length ? (*/}
        {/*  <>*/}
        {/*    {nextNavigation(next)}*/}
        {/*  </>*/}
        {/*) : null}*/}
      </Div>
      {indicator && !limit ? (
        <Div className={'self-center items-center justify-center absolute bottom-2'}>
          {children.length > 1 ? (
            <div className={`flex w-[96px] justify-start gap-x-1 mt-4 pr-11 overflow-hidden ${indicatorClassName}`}>
              {[...new Array(length - showSlides + 1)].map((_: any, idx: number) => {
                return (
                  <Div
                    style={{
                      transform: `translateX(${dir}${currentIndex * (130)}%)`,
                      transition: !transitionEnabled ? 'none' : undefined,
                    }}
                    key={idx}
                    className={classNames(
                      'w-4 h-4 min-h-4 min-w-4 rounded-full mb-0 transition-all duration-500 justify-center items-center',
                      currentIndex === idx ? `bg-black` : 'bg-transparent',
                    )}
                    onClick={() => {
                      setCurrentIndex(idx);
                    }}
                  >
                    <Div className={classNames(
                      currentIndex === idx ? `bg-black` : 'bg-grey-100',
                      `rounded-full transition-all duration-500 justify-center items-center`,
                      BulletWidth(Math.abs(4 - Math.abs(currentIndex - idx))),
                    )}
                    />
                  </Div>
                );
              })}
            </div>
          ) : null}
        </Div>
      ) : null}
    </Div>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill={'currentColor'}
      className={`h-3 w-3 ${className}`}
    >
      <path
        fill={'currentColor'}
        strokeMiterlimit="10"
        strokeWidth="0"
        d="M24.64 90L20.36 85.72 61.08 45 20.36 4.28 24.64 0 69.64 45z"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
    </svg>
  );
};

export default Slider;

const BulletWidth = (w: any) => {
  switch (w) {
    case 4:
      return '!w-4 !h-4 !min-w-4 !min-h-4';
    case 3:
      return '!w-3 !h-3 !min-w-3 !min-h-3';
    case 2:
      return '!w-2 !h-2 !min-w-2 !min-h-2';
    default:
      return 'w-0 h-0';
  }
};