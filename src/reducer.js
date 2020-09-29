export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after finished developing
  //token:
  //"BQBN0XOCMQ8669knBYkuU-blkUVSmlzyrKWQd7w56byIITy8l0AuKjzAbV2VtHN3Tz8VhMbLDCE9A6k0cMuRj7ZkNeTFwDx2PAKOyHRjJSjssfeLHQ3Zwd-ZCaRk6TNZZHWdZXr713GMRDV9Q9f7rPDNVugr3ErZp0wv_-VWvxWrBCon",
};

//The action is what to manipulate how the datalayer looks like
const reducer = (state, action) => {
  console.log(action);

  //Action --> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
