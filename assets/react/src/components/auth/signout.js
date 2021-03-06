import React, {Component} from 'react';
import { connect } from 'react-redux';

import { signoutUser } from '../../actions';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

const paperStyle = {
    marginTop: 50,
    paddingBottom: 50,
    paddingTop: 25,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
};

class Signout extends Component{

  componentWillMount(){
    this.props.dispatch(this.props.signoutUser());
  }

  render(){
    return (
      <div className="logincontainer">
          <Paper style={paperStyle}>
          <h4>Success</h4>
          <p> You are securely logged out!</p>
          <Link className="btn btn-primary" to="/signin">login</Link>
        </Paper>

      </div>
    )
  }

}

function mapDispatchToProps(dispatch, ownProps){

  return {
    dispatch: dispatch,
    signoutUser: signoutUser,
  }
}

export default connect( null, mapDispatchToProps )(Signout)
