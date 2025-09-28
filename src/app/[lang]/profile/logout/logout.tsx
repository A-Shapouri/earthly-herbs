import Button from '@elements/button/button';
import { AuthActions } from '@store/auth/auth-actions';
import { useDispatch } from 'react-redux';
import React from 'react';
import LogOutIcon from '@icons-components/logout';

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(AuthActions.clientLogout());
  };

  return (
    <Button
      variant='text'
      startAdornment={<LogOutIcon />}
      className='!justify-between !px-1 !h-20'
      color='danger'
      onClick={handleLogout}>
      Log out
    </Button>
  );
};

export default Logout;
