const LOCAL_ACCESS_NAME = 'accessToken';

function setTokens(access) {
  localStorage.setItem(LOCAL_ACCESS_NAME, access);
}

function cleanTokensData() {
  localStorage.removeItem(LOCAL_ACCESS_NAME);
}

function getAccessToken() {
  return localStorage.getItem(LOCAL_ACCESS_NAME);
}

function parsePart(str) {
  return JSON.parse(atob(str));
}

function parseJWT(token) {
  const parts = token.split('.');

  return {
    header: parsePart(parts[0]),
    payload: parsePart(parts[1]),
    sign: parts[2],
  };
}

function getJWTPayload(token) {
  return parseJWT(token).payload;
}

export {
  setTokens,
  cleanTokensData,
  getJWTPayload,
  getAccessToken,
};
