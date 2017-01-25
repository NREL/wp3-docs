import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component{

  renderLinks(){

    if(this.props.authenticated){
      return(
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item"> <Link to="/signout">logout</Link> </li>
        </ul>
      )
    }
    else{
      return(
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item"> <Link to="/signin">login</Link> </li>
        </ul>
      )
    }
  }


  render(){
        //  <Link to="/" className="navbar-brand">Benchmarking</Link>

    return (
        <nav className="navbar navbar-light">
          <a href="/" className="navbar-brand">Benchmarking</a>
            {this.renderLinks()}
        </nav>
    );
  }

}

function mapStateToProps(state, ownProps){
    return { authenticated: state.auth.authenticated };
}


export default connect(mapStateToProps)(Header);
