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

class APIKey extends Component{

  render(){

    const token = localStorage.getItem('TOKEN');

    return (
      <div className="apicontainer">
          <Paper style={paperStyle}>
          <h4>API Key</h4>
          <p className="apikey"> {token} </p>
          <Link className="btn btn-primary" to="/template">template</Link>
          <Link className="btn btn-primary" to="/signout">logout</Link>

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

export default connect( null, mapDispatchToProps )(APIKey)
