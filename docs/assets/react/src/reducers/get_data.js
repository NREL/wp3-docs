
import { GET_DATA } from '../actions/index';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action){

  switch(action.type){
    case GET_DATA:
      return action.payload.data;

    default:
      return state;
  }
}
