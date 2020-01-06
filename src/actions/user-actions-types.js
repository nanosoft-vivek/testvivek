import { createAction } from 'redux-actions';

export const USER_FAILURE = 'USER_FAILURE';
export const userFailure = createAction(USER_FAILURE);

export const USER_REQUESTED = 'USER_REQUESTED';
export const userRequested = createAction(USER_REQUESTED);

export const USER_SUCCESS = 'USER_SUCCESS';
export const userSuccess = createAction(USER_SUCCESS);

export  function user(){
  const LoginData={
    "username":"hruday@gmail.com",
    "password" :'hruday123'
  }
    return  dispatch =>{
      let response = LoginData
      
      if(response){
          dispatch({type:USER_SUCCESS,payload: response})
      }
    }
}

