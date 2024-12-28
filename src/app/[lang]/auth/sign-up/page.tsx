'use client';
import Container from '@elements/container';
import Div from '@elements/div';
import Wrapper from '@layouts/wrapper';
import Text from '@elements/text';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/root-reducer";
import TextField from "@elements/text-field";
import Button from "@elements/button";
import Divider from "@elements/divider";
import Link from "next/link";
import EyeIcon from "@icons-components/eye";

const SignUp = () => {
  const dispatch = useDispatch();

  const {products, sortBy} = useSelector((state: RootState) => state.auth);

  return (
    <Container>
      <Wrapper className={'px-5 items-center justify-center pt-4 gap-4 pb-28 md:gap-16 md:pt-20'}>
        <Div className={'gap-4 flex-col sm:w-[400px] w-full'}>
          <Text type={'black'} typography={['lg', 'lg']}>Sign up to Earthly Herbs</Text>
          <Div className={'flex-col gap-2 mt-2'}>
            <Text typography={['base', 'base']} type={'medium'}>Email</Text>
            <TextField placeholder={'example@gmail.com'} className={'sm:w-[400px] w-full'}/>
          </Div>
          <Div className={'flex-col gap-2'}>
            <Text typography={['base', 'base']} type={'medium'}>Password</Text>
            <TextField
              autoComplete={'new-password'}
              type={'password'}
              placeholder={'* * * * * *'}
              className={'sm:w-[400px] w-full'}
              endAdornment={<EyeIcon/>}
              endAdornmentClassName={'mr-2'}
              inputClassName={'!text-center sm:!text-t-lg tracking-[10px] sm:tracking-[16px] placeholder-shown:tracking-normal'}
            />
          </Div>
          <Div className={'gap-2 items-center mt-3'}>
            <Text typography={['sm', 'sm']}>Already have an account?</Text>
            <Link href={'/en/auth/sign-in'}>
              <Text typography={['sm', 'sm']} color={'primary'} type={'normal'}>
                Sign In
              </Text>
            </Link>
          </Div>
          <Button className={'sm:w-[400px] w-full !h-16 mt-3'} color={'secondary'}>
            Create account
          </Button>
          <Div className={'sm:w-[400px] w-full items-center gap-4 mt-3'}>
            <Divider color={'control'} type={'solid'} className={'border-t-2'}/>
            <Text color={"grey.400"} typography={['sm', 'sm']} type={'medium'}>or</Text>
            <Divider color={'control'} type={'solid'} className={'border-t-2'}/>
          </Div>
          <Button className={'!h-16 sm:w-[400px] w-full mt-3 !text-black'} variant={'outlined'} color={'control'}>
            Google
          </Button>
          <Button className={'!h-16 sm:w-[400px] w-full mt-3 !text-black'} variant={'outlined'} color={'control'}>
            Facebook
          </Button>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default SignUp;