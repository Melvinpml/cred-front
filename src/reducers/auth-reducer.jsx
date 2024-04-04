import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions'; // Import your action creators
import { saveUserToken, removeUserToken } from '../utils/authUtils'; // Import your utility functions
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_PROGRESS } from "../constants/action-types"; // Import your action types

const AuthComponent = () => {
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.authReducer.loginState);

  useEffect(() => {
    // Your code to handle login state changes
  }, [loginState]);

  const handleLogin = () => {
    // Dispatch the login action
    dispatch({ type: LOGIN_PROGRESS });

    // Simulating a login request
    setTimeout(() => {
      const fakeResponse = { data: { token: 'fake-token' } };
      dispatch({ type: LOGIN_SUCCESS, payload: fakeResponse });
      saveUserToken(fakeResponse);
    }, 1000);
  };

  return (
    <div>
      <h1>Login Component</h1>
      <button onClick={handleLogin}>Login</button>
      {loginState.inProgress && <p>Loading...</p>}
      {loginState.success && <p>Login successful!</p>}
      {loginState.error && <p>Error: {loginState.error}</p>}
    </div>
  );
};

export default AuthComponent;
