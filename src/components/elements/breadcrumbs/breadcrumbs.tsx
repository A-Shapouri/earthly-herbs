'use client';
import React from 'react';
import { BreadcrumbProps } from './breadcrumbs.props';
import Div from '../div';
import Text from '../text';
import classNames from '@utils/helpers/class-names';
import Button from '../button';

export const Breadcrumbs = ({ breadcrumbsData, className, homeTitleClassName, color = 'primary' }: BreadcrumbProps) => {
  return (
    <Div className={classNames(
      'md:h-[72px] h-14 items-center',
      className)}>
      <Text align={'start'} aria-label="breadcrumb" dir={'ltr'}>
        <Button variant={'text'} href="/" className={'contents !p-0 h-fit'}>
          <Text variant={'span'} className={homeTitleClassName} typography={['sm', 'sm']}>
            <span className={classNames('float-left')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_64_1382)">
                  <path d="M23.1213 9.06887L15.5363 1.48287C14.5975 0.546856 13.3259 0.0212402 12.0003 0.0212402C10.6746 0.0212402 9.40301 0.546856 8.46426 1.48287L0.879256 9.06887C0.599682 9.34665 0.378026 9.67717 0.227139 10.0413C0.0762514 10.4053 -0.00086626 10.7958 0.00025622 11.1899V21.0069C0.00025622 21.8025 0.316327 22.5656 0.878936 23.1282C1.44155 23.6908 2.20461 24.0069 3.00026 24.0069H21.0003C21.7959 24.0069 22.559 23.6908 23.1216 23.1282C23.6842 22.5656 24.0003 21.8025 24.0003 21.0069V11.1899C24.0014 10.7958 23.9243 10.4053 23.7734 10.0413C23.6225 9.67717 23.4008 9.34665 23.1213 9.06887ZM15.0003 22.0069H9.00026V18.0729C9.00026 17.2772 9.31633 16.5142 9.87894 15.9515C10.4415 15.3889 11.2046 15.0729 12.0003 15.0729C12.7959 15.0729 13.559 15.3889 14.1216 15.9515C14.6842 16.5142 15.0003 17.2772 15.0003 18.0729V22.0069ZM22.0003 21.0069C22.0003 21.2721 21.8949 21.5264 21.7074 21.714C21.5198 21.9015 21.2655 22.0069 21.0003 22.0069H17.0003V18.0729C17.0003 16.7468 16.4735 15.475 15.5358 14.5373C14.5981 13.5997 13.3263 13.0729 12.0003 13.0729C10.6742 13.0729 9.40241 13.5997 8.46472 14.5373C7.52704 15.475 7.00026 16.7468 7.00026 18.0729V22.0069H3.00026C2.73504 22.0069 2.48069 21.9015 2.29315 21.714C2.10561 21.5264 2.00026 21.2721 2.00026 21.0069V11.1899C2.00118 10.9248 2.10645 10.6709 2.29326 10.4829L9.87826 2.89987C10.442 2.3388 11.2049 2.02381 12.0003 2.02381C12.7956 2.02381 13.5586 2.3388 14.1223 2.89987L21.7073 10.4859C21.8933 10.6731 21.9985 10.9259 22.0003 11.1899V21.0069Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_64_1382">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Text>
        </Button>

        {breadcrumbsData && breadcrumbsData.length > 0 && breadcrumbsData.map((item, index) => {
          if (index === breadcrumbsData.length - 1) {
            return (
              <span key={`breadcrumb${index}`} className={'flex items-center gap-2 pl-2 md:gap-3 md:pl-3'}>
                <span className={classNames('float-left')}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3998 9.88006L10.8098 5.29006C10.6224 5.10381 10.369 4.99927 10.1048 4.99927C9.84062 4.99927 9.58716 5.10381 9.3998 5.29006C9.30607 5.38302 9.23168 5.49362 9.18091 5.61548C9.13014 5.73734 9.104 5.86805 9.104 6.00006C9.104 6.13207 9.13014 6.26278 9.18091 6.38464C9.23168 6.5065 9.30607 6.6171 9.3998 6.71006L13.9998 11.2901C14.0935 11.383 14.1679 11.4936 14.2187 11.6155C14.2695 11.7373 14.2956 11.868 14.2956 12.0001C14.2956 12.1321 14.2695 12.2628 14.2187 12.3846C14.1679 12.5065 14.0935 12.6171 13.9998 12.7101L9.3998 17.2901C9.2115 17.477 9.10518 17.7312 9.10425 17.9965C9.10331 18.2619 9.20783 18.5168 9.3948 18.7051C9.58178 18.8934 9.8359 18.9997 10.1013 19.0006C10.3666 19.0016 10.6215 18.897 10.8098 18.7101L15.3998 14.1201C15.9616 13.5576 16.2772 12.7951 16.2772 12.0001C16.2772 11.2051 15.9616 10.4426 15.3998 9.88006Z" fill="#433725" />
                  </svg>
                </span>
                <Text variant={'span'} type={'medium'} className={'opacity-60'} color={'brown'} typography={['sm', 'sm']}>{item.label}</Text>
              </span>
            );
          }

          return (
            <span className={'flex citems-center'} key={`breadcrumb${index}`}>
              <span className={classNames('float-left')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.3998 9.88006L10.8098 5.29006C10.6224 5.10381 10.369 4.99927 10.1048 4.99927C9.84062 4.99927 9.58716 5.10381 9.3998 5.29006C9.30607 5.38302 9.23168 5.49362 9.18091 5.61548C9.13014 5.73734 9.104 5.86805 9.104 6.00006C9.104 6.13207 9.13014 6.26278 9.18091 6.38464C9.23168 6.5065 9.30607 6.6171 9.3998 6.71006L13.9998 11.2901C14.0935 11.383 14.1679 11.4936 14.2187 11.6155C14.2695 11.7373 14.2956 11.868 14.2956 12.0001C14.2956 12.1321 14.2695 12.2628 14.2187 12.3846C14.1679 12.5065 14.0935 12.6171 13.9998 12.7101L9.3998 17.2901C9.2115 17.477 9.10518 17.7312 9.10425 17.9965C9.10331 18.2619 9.20783 18.5168 9.3948 18.7051C9.58178 18.8934 9.8359 18.9997 10.1013 19.0006C10.3666 19.0016 10.6215 18.897 10.8098 18.7101L15.3998 14.1201C15.9616 13.5576 16.2772 12.7951 16.2772 12.0001C16.2772 11.2051 15.9616 10.4426 15.3998 9.88006Z" fill="#433725" />
                </svg>
              </span>
              <Button variant={'text'} className={'contents !p-0 h-fit'} href={{ pathname: item?.path, query: { ...item?.params } }}>
                <Text variant={'span'} type={'medium'} className={'after:px-1 opacity-60'} color={'brown'} typography={['sm', 'sm']}>
                  {item.label}
                </Text>
              </Button>
            </span>
          );
        })}
      </Text >
    </Div >
  );
};

export default Breadcrumbs;