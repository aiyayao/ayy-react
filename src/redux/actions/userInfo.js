import axios from 'axios';
export const GET_USER_INFO_REQUEST = 'userInfo/GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'userInfo/GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILD = 'userInfo/GET_USER_INFO_FAILD';

export function getUserInfoRequest() {
  return { type: GET_USER_INFO_REQUEST };
}

export function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS, 
    userInfo
  };
}

export function getUserInfoFaild() {
  return { type: GET_USER_INFO_FAILD };
}

export function getUserInfo() {
  return function(dispatch) {
    dispatch(getUserInfoRequest());
    return axios('http://localhost:8088/api/user.json')
    .then((res) => {
      dispatch(getUserInfoSuccess(res.data));
    }).catch((err) => {
      dispatch(getUserInfoFaild());
    });
  };
}
