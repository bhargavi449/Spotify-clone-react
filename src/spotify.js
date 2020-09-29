// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//1.Click Login button
//2.Redirect to Spotify login page
//3.Redirect to home page once logged in
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "ed44acaa78e24629966c5fc8af743338";

//scopes it allows to get correct permissions todo things like play a song on spotify,get information from the user account
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accessTokens = mysecretkeys&name=mb&abc
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
