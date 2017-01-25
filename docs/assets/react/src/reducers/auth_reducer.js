import {merge, clone} from "lodash";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/index';

const INITIAL_STATE = { 'authenticated': false,
                        'error': null};

export default function(state = INITIAL_STATE, action){

  switch(action.type){
    case AUTH_USER:
      return merge({}, state, {'authenticated': true,
                               'error': null } );
    case UNAUTH_USER:
      return merge({}, state, {'authenticated': false});

    case AUTH_ERROR:
      const tmp = merge({}, state, {'error': action.payload,
                                    'authenticated': false });
      console.log(tmp);
      return tmp;

  }

  return state;
}
