// Mocking GPay Microapps API
global.microapps = {
  getIdentity: (request: any) =>
    new Promise((resolve, reject) => {
      const fakeIdentity = {
        iss: "", // Issuer Identification
        sub: "faked API Identity", // Unique identifier for google account
        aud: "", // Audience response is intended for
        iat: -1, // Time token is issued (Unix int seconds)
        exp: 0, // Token expiry time (Unix int seconds)
      };
      const fakeEncodedResponse =
        btoa(JSON.stringify({})) + "." + btoa(JSON.stringify(fakeIdentity));
      resolve(fakeEncodedResponse);
    }),
  requestMedia: () => {
    //TODO(#96) Implement mocked media API
  },
  getLocation: () => {
    //TODO(#97) Implement mocked location API
  },
};

// Capture react-router-dom useHistory hook
// push function for url redirects
global.mockRedirectPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: global.mockRedirectPush,
  }),
}));
