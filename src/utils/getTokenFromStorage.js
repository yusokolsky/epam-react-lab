const getTokenFromStorage = () =>
  localStorage.getItem("SPOTIFY_TOKEN_KEY") || undefined;
export default getTokenFromStorage;
