import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

class AppIndex extends Component{

    render(){

      return (
        <div className="maincontainer">
          <div className="sparklines">
            <Sparklines data={[5, 10, 5, 20, 8, 15, 20, 5, 10, 5, 20, 100, 8, 15, 20,5, 10, 5, 20, 8, 15, 20]}
                        height={80}
                        width={400}>
              <SparklinesBars style={{ fill: 'slategray', barWidth: "10", fillOpacity: ".5" }} />
              <SparklinesLine style={{ stroke: "#41c3f9", strokeWidth: "0.5", fill: "none" }} />
            </Sparklines>
          </div>
        </div>
      )

    };

};

export default AppIndex;
