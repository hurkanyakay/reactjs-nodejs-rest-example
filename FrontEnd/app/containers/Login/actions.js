/*
 *
 * Login actions
 *
 */
 import {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER,
   GET_USER_INFO_REQUEST} from './constants';
 import { push } from 'react-router-redux'
 import jwtDecode from 'jwt-decode';

 export function loginUser(email, password, redirect="/") {
     let data={};
     data['email']=email;
     data['password']=password;
     data['redirect']=redirect;
     return {
      type: LOGIN_USER_REQUEST,
      data
     }
 }
 export function loginUserSuccess(response) {
   sessionStorage.setItem('token', response.token);
   return {
     type: LOGIN_USER_SUCCESS,
     response
   }
 }
 export function loginUserFailure(error) {
   sessionStorage.removeItem('token');
   return {
     type: LOGIN_USER_FAILURE,
     error

   }
 }
 export function logout() {
     sessionStorage.removeItem('token');
     return {
         type: LOGOUT_USER
     }
 }

export function get_user_info(token,redirect) {
  return {
    type: GET_USER_INFO_REQUEST,
    token,
    redirect
  }
}
