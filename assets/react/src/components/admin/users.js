
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/admin';


class UsersRow extends Component{

  render(){
    return (
      <tr key={this.props.email}>
        <td style={{width: 20 + 'em'}}> {this.props.email} </td>
        <td style={{width: 8 + 'em'}}> {this.props.roles} </td>
      </tr>)
  }

}

class UsersTable extends Component{

  render(){
    // console.log(this.props.data);
    // const name = this.props.name;

    const rows = this.props.data.map( (user) => {
      console.log("user", user);
      const email = user.email;
      const roles = user.roles;
      return <UsersRow key={email} email={email} roles={roles} />
    });


    return (
      <div>
        <table className="mdl-data-table mdl-js-data-table  mdl-shadow--2dp">
            <thead>
               <tr>
                  <th>email</th>
                  <th>roles</th>
               </tr>
            </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>)
  }
}



class UsersIndex extends Component{

    componentWillMount(){

      console.log("component will mount")
      // if( keys(this.props.data).length < 1 ){
      //   // console.log("form getting data");
      // // this.props.getData();
      this.props.dispatch(this.props.getUsers());
      // }
    }

    componentDidMount(){
      console.log("componentDidMount");
    }

    onSubmit(){
      // event.preventDefault();
      // this.props.dispatch(this.props.postFormData(this.props.data));
    }

    render(){
      console.log("render");
      console.log(this.props.data.users);

      const usersTable = <UsersTable data={this.props.data.users}/>

      return (
        <div className="maincontainer">
          <h2> Admin </h2>
          {usersTable}
        </div>
      )
    }


}

function mapStateToProps(state, ownProps){

  // console.log(JSON.stringify(state.data["Enery Yield Summary"]["Wind Farm Name Plate"]));

  return { data: state.admin };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    dispatch: dispatch,
    getUsers: getUsers,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
