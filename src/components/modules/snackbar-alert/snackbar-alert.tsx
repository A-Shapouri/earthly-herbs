import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from './sub-components/snackbar';
import { AlertActions } from '@store/alert/alert-action';
import { RootState } from '@store/root-reducer';
import Alert from '@elements/alert';

function SnackbarAlert() {
  const alert = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(AlertActions.hideAlert());
  }

  if (!alert) {
    return null;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={alert.isShow}
      onClose={handleClose}
      autoHideDuration={6000}>
      <Alert
        className={'whitespace-pre-wrap'}
        title={alert.text}
        description={alert.description}
        onClose={handleClose}
        severity={alert.severity} />
    </Snackbar>
  );
}

export default SnackbarAlert;
