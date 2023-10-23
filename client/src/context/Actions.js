export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = {
  type: "LOGIN_SUCESS",
  payload: user,
};

export const LoginFaliure = {
  type: "LOGIN_FALIURE",
};
