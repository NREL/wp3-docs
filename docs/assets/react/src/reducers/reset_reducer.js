import {merge, clone} from "lodash";
import { RESET_SUCCESS, RESET_ERROR} from '../actions/index';

const INITIAL_STATE = { 'success_msg': null, 'error_msg': null };

export default function(state = INITIAL_STATE, action){

  switch(action.type){
    case RESET_SUCCESS:
      return merge({}, state, {'success_msg': action.payload, 'error_msg': null});
    case RESET_ERROR:
      return merge({}, state, {'error_msg': action.payload, 'success_msg': null});
  }

  return state;
}
