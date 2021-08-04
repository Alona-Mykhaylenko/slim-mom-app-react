const isAuthenticated = (state) => state.auth.token;

const getUserName = (state) => state.auth.user.username;

const getUserId = state => state.auth.user.id; // userData.id

const getUserData = state => state.auth.user.userData;


export { isAuthenticated, getUserName, getUserId, getUserData};
