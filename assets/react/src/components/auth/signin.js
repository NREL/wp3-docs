import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import { signinUser } from '../../actions';
import { TextField } from 'redux-form-material-ui'

const paperStyle = {
    marginTop: 50,
    paddingBottom: 50,
    paddingTop: 25,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
};

class Signin extends Component{

  onSubmit(props){
      console.log(this.props)
      console.log(props);
      this.props.dispatch(this.props.signinUser(props));
  }



  authError(){

    if( this.props.auth.error !== null ){
      return this.props.auth.error
    }

  }

  render(){

    const { handleSubmit } = this.props;
    const auth_error = this.authError();
    // const renderTextField = props => (
    //
    //     <TextField hintText={props.label}
    //       floatingLabelText={props.label}
    //       errorText={props.touched && props.error}
    //
    //     />
    //   )

      // <fieldset className="mdl-textfield mdl-js-textfield">
      //   <label className="mdl-textfield__label">email</label>
      //   <Field name="email" className="mdl-textfield__input" component="input" type="text" required/>
      // </fieldset>
      //
      // <fieldset className="mdl-textfield mdl-js-textfield">
      //   <label className="mdl-textfield__label">password</label>
      //   <Field className="mdl-textfield__input" name="password" component="input" type="password" required/>
      // </fieldset>

    return(
      <div className="logincontainer">
        <Paper style={paperStyle}>
        <h4>Login</h4>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <Field name="email"
                 component={TextField}
                 hintText="email"
                 errorText={auth_error}
                 floatingLabelText="email"
                 type="text"/>
          <Field name="password"
                 component={TextField}
                 hintText="password"
                 required
                 errorText={auth_error}
                 floatingLabelText="password"
                 type="password"/>
          <div>
          <RaisedButton style={{ marginTop: 50 }}
                        type="Submit"
                        label="Submit"/>

          <Link to="/request">Reset your password</Link>
          </div>
        </form>
        </Paper>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps){
    // console.log(state.auth);
    return { auth: state.auth };
}

function mapDispatchToProps(dispatch, ownProps){
  // console.log(signinUser);

  return {
    dispatch: dispatch,
    signinUser: signinUser,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ form: 'signin' })(Signin)
);
