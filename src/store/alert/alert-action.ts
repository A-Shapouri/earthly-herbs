const preType = 'ALERT_';

export const AlertActionType = {
  SHOW_ALERT: `${preType}SHOW_ALERT`,
  HIDE_ALERT: `${preType}HIDE_ALERT`,
};

const showAlert = (data: { text: string, description?: string, severity: 'info' | 'success' | 'danger' | 'warning' | 'primary' | 'secondary' }) => ({
  type: AlertActionType.SHOW_ALERT,
  text: data?.text,
  description: data?.description,
  severity: data?.severity,
});
const hideAlert = () => ({ type: AlertActionType.HIDE_ALERT });

export const AlertActions = {
  showAlert: showAlert,
  hideAlert: hideAlert,
};
