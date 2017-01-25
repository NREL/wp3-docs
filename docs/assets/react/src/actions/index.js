import axios from 'axios';
import 'whatwg-fetch';
import {browserHistory, hashHistory} from 'react-router';

export const CHANGE_FORM_KEY = 'CHANGE_FORM_KEY';
export const GET_DATA = 'GET_DATA';
export const CLEAR_DATA = 'CLEAR_DATA';
export const POST_DATA = 'POST_DATA';

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export const RESET_SUCCESS = "RESET_SUCCESS";
export const RESET_ERROR = "RESET_ERROR";

const APP_URL = 'http://localhost:8000';

const API_URL = 'http://localhost:5000';
const AUTH_URL = 'http://localhost:5000'

// const AUTH_URL = 'https://api.hpc.nrel.gov/esif/api/auth/login';

export function signoutUser(){
    const token = localStorage.getItem('TOKEN')
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('USERNAME');
    document.cookie = "token=''; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    if( token ){
      axios.post(`${AUTH_URL}/api/logout`, {'access_token': token })
           .then(
             console.log("loggout"));
    }

    return { type: UNAUTH_USER };
}

export function resetPassword(props, token){
  return function(dispatch){

      const payload = {'password': props.password,
                       'token': token };

      axios.post(`${AUTH_URL}/api/reset/password`, payload)
        .then( (response)=>{
            console.log(response);
            // Link to login...
            hashHistory.push('/signin');
        })
        .catch((error )=>{
            console.log(error);
            hashHistory.push('/signin');
        });
  }
}

export function requestReset(props){
  return function(dispatch){

      const payload = {'email': props.email,
                       'servername': APP_URL }

      axios.post(`${AUTH_URL}/api/reset`, payload)
        .then( (response)=>{
            dispatch({ type: RESET_SUCCESS,
                       payload: response.data.msg });
        })
        .catch((error )=>{

           dispatch({ type: RESET_ERROR,
                      payload: "Please make sure you have the correct email." });
        });
  }
}


export function signinUser(props){
  return function(dispatch){

      axios.post(`${AUTH_URL}/api/login`, props)

      //axios.post(`${AUTH_URL}`, props)
           .then( (response)=>{
              dispatch({ type: AUTH_USER });
              // console.log(response.data);
              localStorage.setItem('USERNAME', props.email);
              localStorage.setItem('TOKEN', response.data.access_token);

              // console.log("set cookie");

              let d = new Date();
              // d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
              d.setTime(d.getTime() + (1 * 1 * 1 * 60 * 1000));
              let expires = "expires="+d.toUTCString();
              document.cookie = "token=" + response.data.access_token + ";" + expires + ";path=/";

              hashHistory.push('/template');
           })
           .catch( (error )=>{

              dispatch({ type: AUTH_ERROR,
                         payload: "Login error" });
           });

  }

}





export function changeFormKey(evt, category, property, key){
    return function(dispatch){
        let value = {};
        value[category] = {}
        value[category][property] = {};
        value[category][property][key] = evt.target.value;

        dispatch({
          type: CHANGE_FORM_KEY,
          payload: value
        });
  }
}

export function getData(){
  return function(dispatch){
    const token = localStorage.getItem('TOKEN')
    console.log(token)
    axios.get(`${API_URL}/api/template?access_token=${token}`)
         .then( (response) => {
              return dispatch({
                type: GET_DATA,
                payload: response
              });
         })
         .catch(()=>{
            hashHistory.push('/signin');
         });
  }
}

export function clearData(){
  return function(dispatch){
    axios.get(`${API_URL}/api/template/clear`)
         .then( (response) => {
              dispatch({
                type: CLEAR_DATA,
                payload: response
              });
         })
         .catch(()=>{
            hashHistory.push('/signin');
         });
  }
}

export function postUpload(e){
  return function(dispatch){
    var formData = new FormData();
    var files;
    if (e.dataTransfer) {
        files = e.dataTransfer.files;
    } else if (e.target) {
        files = e.target.files;
    }
    console.log(files);

    for(var x=0;x<files.length;x++) {
        console.log(files.item(x));
        formData.append('file'+x, files.item(x));
    }

    console.log(formData);

    const token = localStorage.getItem('TOKEN')
    const username = localStorage.getItem('USERNAME')
    fetch(`${API_URL}/api/upload?access_token=${token}`, {
          method: 'POST',
          headers: {},
          credentials: "include",
          body: formData,
        }).then( (response)=>{
            if(response.status !== 200){
                console.log("FAIL")
                hashHistory.push('/signin');
            }
            console.log("response", response);
        })
        .catch(()=>{
            console.log("FAIL")
            hashHistory.push('/signin');
        });


  }
}

export function postFormData(props){
  return function(dispatch){
    const token = localStorage.getItem('TOKEN')
    const username = localStorage.getItem('USERNAME')
    fetch(`${API_URL}/api/template?access_token=${token}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: "include",
          body: JSON.stringify(props)
        })
        .then( (response)=>{
          if(response.status !== 200){
              hashHistory.push('/signin');
          }
          console.log("response", response);
        })
        .catch(()=>{
            hashHistory.push('/signin');
        });


    }
}
