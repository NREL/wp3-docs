import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { requestReset } from '../../actions';
import { Link } from 'react-router';

// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { TextField } from 'redux-form-material-ui'


const paperStyle = {
    marginTop: 50,
    paddingBottom: 50,
    paddingTop: 25,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
};

class RequestReset extends Component{

  onSubmit(props){

      console.log(props);
      // console.log(this.props.signinUser);
      // console.log(this.props.dispatch);
      // console.log(this.props);
      this.props.dispatch(this.props.requestReset(props));

      // (this.props.signinUser(props));
  }

  renderSuccess(){
      if( this.props.success_msg !== null ){
        return (
            <div className="alert alert-success">
              <strong> Sent! </strong> {this.props.success_msg}
            </div>
        );
      }
  }


  authError(){

    console.log(this.props.error_msg);

    if( this.props.error_msg !== null ){
      return this.props.error_msg
    }

  }

  render(){

    const { handleSubmit } = this.props;
    const auth_error = this.authError();
    // const renderTextField = props => (
    //     <TextField hintText={props.label}
    //       floatingLabelText={props.label}
    //       errorText={props.touched && props.error}
    //       {...props}
    //     />
    //   )

    return(
      <div className="logincontainer">
        <Paper style={paperStyle}>
        <h4>Reset your password</h4>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <Field name="email"
                 component={TextField}
                 hintText="email"
                 errorText={auth_error}
                 floatingLabelText="email"
                 type="text"/>

          {this.renderSuccess.bind(this)()}

          <div>
          <RaisedButton style={{ marginTop: 50 }}
                        type="Submit"
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
    // console.log(state.reset);
    // console.log(state.reset.error);
    console.log(state.resetmsg.error_msg);

    return { success_msg: state.resetmsg.success_msg,
             error_msg: state.resetmsg.error_msg };
}

function mapDispatchToProps(dispatch, ownProps){
  // console.log(signinUser);

  return {
    dispatch: dispatch,
    requestReset: requestReset,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ form: 'request' })(RequestReset)
);
