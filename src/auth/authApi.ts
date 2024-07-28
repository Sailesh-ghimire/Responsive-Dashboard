interface LoginResponse {
  success: boolean;
  message: string;
}

const MOCK_EMAIL = 'test@mail.com';
const MOCK_PASSWORD = 'test123';
const AUTH_TOKEN = 'auth-token';

export const loginApi = (
  email: string,
  password: string
): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
        localStorage.setItem('token', AUTH_TOKEN);
        resolve({ success: true, message: 'Login successful' });
      } else {
        reject({ success: false, message: 'Invalid email or password' });
      }
    }, 1000);
  });
};

export const logoutApi = () => {
  localStorage.removeItem('token'); // Remove the token
};
