import { AdalConfig, AuthenticationContext } from 'react-adal';// Endpoint URL

// App Registration ID
const appId = 'app id';export const adalConfig: AdalConfig = {
  cacheLocation: 'localStorage',
  clientId: appId,
  endpoints: {

  },
  postLogoutRedirectUri: window.location.origin,
  tenant: 'domain.onmicrosoft.com'
};export const authContext = new AuthenticationContext(adalConfig);