import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { TextField } from 'redux-form-material-ui'

import { resetPassword } from '../../actions';

const paperStyle = {
    marginTop: 50,
    paddingBottom: 50,
    paddingTop: 25,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
};

class Reset extends Component{

  onSubmit(props){
      const token = this.props.location.query.token;
      this.props.dispatch(this.props.resetPassword(props, token));
  }

  render(){

    const { handleSubmit } = this.props;

    const renderTextField = props => (
        <TextField hintText={props.label}
          floatingLabelText={props.label}
          errorText={props.touched && props.error}
          {...props}
        />
      );

    return(
      <div className="logincontainer">
        <Paper style={paperStyle}>
          <h4>New password</h4>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <Field name="password"
                 type="password" 
                 component={renderTextField}
                 label="password"/>

          <div>
            <RaisedButton style={{ marginTop: 50 }}
                          type="submit"
                          label="Submit"/>

            <Link className="btn btn-link" to="/signin">back to login</Link>
          </div>
        </form>
        </Paper>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps){
   return {};
    // console.log(state.reset);
    // console.log(state.reset.error);
    // console.log(state.resetmsg.error_msg);
    //
    // return { success_msg: state.resetmsg.success_msg,
    //          error_msg: state.resetmsg.error_msg };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    dispatch: dispatch,
    resetPassword: resetPassword,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ form: 'reset' })(Reset)
);
