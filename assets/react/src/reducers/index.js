import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { default as GetDataReducer } from './get_data';
import ChangeFormKeyReducer from './change_form_key';
import { default as AuthReducer } from './auth_reducer';
import { default as ResetReducer } from './reset_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: AuthReducer,
    resetmsg: ResetReducer,
    data: ChangeFormKeyReducer
});

export default rootReducer;
