import axios from 'axios';
import {browserHistory, hashHistory} from 'react-router';

const ADMIN_URL = 'https://ec2-35-167-115-9.us-west-2.compute.amazonaws.com';
// const ADMIN_URL = 'http://localhost:5000';

export const USERS_DATA = 'USERS_DATA';

export function getUsers(){
  return function(dispatch){
    const token = localStorage.getItem('TOKEN')
    // console.log(token)
    axios.defaults.headers.common['Authorization'] = `access_token ${token}`;
    axios.get(`${ADMIN_URL}/api/users`)
         .then( (response) => {
           console.log(response.status);
              // console.log(response.data.users);
              return dispatch({
                type: USERS_DATA,
                payload: response.data.users,
              });
         })
         .catch((error)=>{
            console.log(error);
            hashHistory.push('/signin');
         });
  }
}
