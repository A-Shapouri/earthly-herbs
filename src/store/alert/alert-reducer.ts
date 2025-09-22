import { AlertActionType } from './alert-action';

export const initialState = {
  isShow: false,
  text: undefined,
  description: undefined,
  severity: undefined,
};

export const alertReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AlertActionType.SHOW_ALERT: {
      return {
        ...state,
        isShow: true,
        text: action.data?.text,
        description: action?.data?.description || '',
        severity: action.data?.severity || 'info',
      };
    }

    case AlertActionType.HIDE_ALERT: {
      return {
        ...state,
        isShow: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default alertReducer;
