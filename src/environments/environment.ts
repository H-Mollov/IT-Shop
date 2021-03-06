// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'https://parseapi.back4app.com/',
  applicationID: 'qi1E5qhzrLhxyQoAzTvqB076XypAS6mm5sXWsbIW',
  restAPIkey: 'POiam2abGNggytZTZKHboOtRRlYVWMul5SdeIBZb',
  endPoints: {
    login: 'login',
    logout: 'logout',
    authenticate: 'parse/sessions/me',
    createOffer: 'classes/offers',
    user: 'users',

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
