import React from 'react';

require('../css/loading.css');

export class Loader extends React.Component{

  getContainerStyle(active){
      var visibility = "hidden"
      if (active){
          visibility = "visible"
      }
      return {
          'visibility': visibility,
      }
  }

  render(){
      // console.log("loader");
      const active = true;
      return (
              <div className="load-container load8"
                   style={this.getContainerStyle(active)}>
                <div className="loader">Loading...</div>
              </div>
        )
  }

}
