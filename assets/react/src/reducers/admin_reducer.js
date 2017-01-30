import {merge, clone} from "lodash";
import { USERS_DATA } from '../actions/admin';

const INITIAL_STATE = { 'users': []};

export default function(state = INITIAL_STATE, action){

  // console.log("admin reducer", action.type);
  // console.log("admin payload", action.payload);
  // console.log(action.type === USERS_DATA);

  switch(action.type){

    case USERS_DATA:
      const temp = merge({}, state, {'users': action.payload});
      // console.log(temp);
      return temp;
  }

  // console.log("HERE, DEFAULT");
  return state;
}
