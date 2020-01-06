import { createAction } from 'redux-actions';

export const DashBoard_FAILURE = 'DashBoard_FAILURE';
export const dashboardFailure = createAction(DashBoard_FAILURE);

export const DashBoard_REQUESTED = 'DashBoard_REQUESTED';
export const dashboardRequested = createAction(DashBoard_REQUESTED);

export const DashBoard_SUCCESS = 'DashBoard_SUCCESS';
export const dashboardSuccess = createAction(DashBoard_SUCCESS);

export  function dashboard(){

  const DashBoard=[
  {
    "id":1,
    "name":"test1",
    "age" : "11",
    "gender":"male",
    "email" : "test1@gmail.com",
    "phoneNo" : "9415346313"
    },
    {
      "id":2,
      "name":"test2",
      "age" : "11",
      "gender":"male",
      "email" : "test2@gmail.com",
      "phoneNo" : "9415346313"
      },
      {
        "id":3,
        "name":"test1",
        "age" : "11",
        "gender":"male",
        "email" : "test3@gmail.com",
        "phoneNo" : "9415346313"
        },
        {
          "id":4,
          "name":"test1",
          "age" : "11",
          "gender":"male",
          "email" : "test4@gmail.com",
          "phoneNo" : "9415346313"
          },
]
    return  dispatch =>{
      let response = DashBoard
      if(response){
          dispatch({type:DashBoard_SUCCESS,payload: response})
      }
    }
}

