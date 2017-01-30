import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const paperStyle = {
    marginTop: 50,
    paddingBottom: 50,
    paddingTop: 25,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
};

class RequestSent extends Component{

  render(){
    return (
      <div className="logincontainer">
        <Paper style={paperStyle}>
        <h4>Success</h4>
        <p> Please check your email for instructions.</p>
        <div>
        <RaisedButton
              style={{ marginTop: 50, marginRight: 20 }}
              containerElement={<Link to="/request" />}
              linkButton={true}
              label="Request Again"/>

          <Link className="btn btn-primary" to="/signin">login</Link>
        </div>
        </Paper>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch, ownProps){

  return {
    dispatch: dispatch,
  }
}

export default connect( null, mapDispatchToProps )(RequestSent)
