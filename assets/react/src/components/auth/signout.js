import React, {Component} from 'react';
import { connect } from 'react-redux';

import { signoutUser } from '../../actions';
import { Link } from 'react-router';

class Signout extends Component{

  componentWillMount(){
    this.props.dispatch(this.props.signoutUser());
  }

  render(){
    return (
      <div className="maincontainer">
        <h3>Success</h3>
        <p> You are securely logged out!</p>
        <Link className="btn btn-primary" to="/signin">login</Link>

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
