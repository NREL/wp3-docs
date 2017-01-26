import {merge, clone} from "lodash";

import { CHANGE_FORM_KEY } from '../actions/index';
import { GET_DATA, CLEAR_DATA } from '../actions/index';
// const INITIAL_STATE = { 'test': 10 };


const INITIAL_STATE = { "Enery Yield Summary":{
                          'Wind Farm Name Plate': {"value": 0 , "comment": ""},
                          'Gross Output': {"value": 0 , "comment": ""},
                        },
                        "Wake Effect": {
                          "Internal wake effect": {"value": 0 , "comment": ""},
                          "External wake effect": {"value": 0 , "comment": ""},
                          "Future wake effect": {"value": 0 , "comment": ""}
                        },
                        "Availability": {
                          "Internal wake effect": {"value": 0 , "comment": ""},
                          "External wake effect": {"value": 0 , "comment": ""},
                          "Future wake effect": {"value": 0 , "comment": ""}
                        },
                        "Electrical efficiency": {
                          "Internal wake effect": {"value": 0 , "comment": ""},
                          "External wake effect": {"value": 0 , "comment": ""},
                          "Future wake effect": {"value": 0 , "comment": ""}
                        },
                        "Turbine Performance": {
                          "Internal wake effect": {"value": 0 , "comment": ""},
                          "External wake effect": {"value": 0 , "comment": ""},
                          "Future wake effect": {"value": 0 , "comment": ""}
                        },
                        "Environmental": {
                          "Internal wake effect": {"value": 0 , "comment": ""},
                          "External wake effect": {"value": 0 , "comment": ""},
                          "Future wake effect": {"value": 0 , "comment": ""}
                        },
                        "Curtailments": {
                          "Internal wake effect": {"value": 0 , "comment": ""},
                          "External wake effect": {"value": 0 , "comment": ""},
                          "Future wake effect": {"value": 0 , "comment": ""}
                        },
                      };


export default function(state={}, action){

  switch(action.type){

    case CHANGE_FORM_KEY:
      return merge({}, state, action.payload);
    case GET_DATA:
      return action.payload.data;
    case CLEAR_DATA:
      return action.payload.data;
    default:
      return state;
  }
}
