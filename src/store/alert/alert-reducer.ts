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
        text: action.text,
        description: action?.description || '',
        severity: action.severity || 'info',
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
