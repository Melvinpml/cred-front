import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_PROGRESS } from "../constants/action-types";
import { LOGOUT_SUCCESS, LOGOUT_PROGRESS } from "../constants/action-types";
import { SIGNUP_SUCCESS, SIGNUP_FAILED, SIGNUP_PROGRESS } from "../constants/action-types";
import { loginApi, signupApi } from '../services/auth-service';

export function login(payload) {
    return function (dispatch) {
        dispatch({type: LOGIN_PROGRESS, payload: ""});
        loginApi(payload, (response) => {
            dispatch({type: LOGIN_SUCCESS, payload: response});
        }, (error) => {
            dispatch({type: LOGIN_FAILED, payload: error.message});
        });
    };
}

export function signup(payload) {
    return function (dispatch) {
        dispatch({type: SIGNUP_PROGRESS, payload: ""});
        signupApi(payload, (response) => {
            dispatch({type: SIGNUP_SUCCESS, payload: response});
        }, (error) => {
            dispatch({type: SIGNUP_FAILED, payload: error.message});
        });
    };
}

export function logout() {
    return function (dispatch) {
        dispatch({type: LOGOUT_PROGRESS, payload: ""});
        dispatch({type: LOGOUT_SUCCESS, payload: ""});
    };
}
