const preType = 'NAVIGATION_';

export const NavigationActionTypes = {
  SET_NAVIGATION: `${preType}SET_NAVIGATION`,
  SET_LANG: `${preType}SET_LANG`,
};

const setNavigation = (data: { navigation: any }) => ({ type: NavigationActionTypes.SET_NAVIGATION, data: data });
const setLang = (data: { lang: string }) => ({ type: NavigationActionTypes.SET_LANG, data: data });

export const NavigationActions = {
  setNavigation: setNavigation,
  setLang: setLang,
};
