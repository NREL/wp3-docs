
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { keys, get, flatten } from "lodash";
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';

import { changeFormKey } from '../actions/index';
import { postFormData, postUpload } from '../actions/index';
import { getData, clearData } from '../actions/index';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class FormRow extends Component{

  render(){
    const key = this.props.name;
    const category = this.props.category;
    const data = this.props.data[category][key];
    return (<tr key={key}>
      <td style={{width: 20 + 'em'}}> {key} </td>
      <td style={{width: 8 + 'em'}}>
        <input className="mdl-textfield__input"
             type="number"
             style={{width: 100 + '%'}}
             id={key}
             value={data.value}
             onChange={this.props.onChange.bind(this, category, key, "value")}
            />
      </td>
      <td style={{width: 5 + 'em'}}>
        {`${data.value}%`}
      </td>
      <td style={{width: 25 + 'em'}}>
      <input className="mdl-textfield__input"
           type="text"
           style={{width: 100 + '%'}}
           id={key}
           value={data.comment}
           onChange={this.props.onChange.bind(this, category, key, "comment")}
          />
      </td>
    </tr>)
  }
}

class FormRowSummary extends Component{

  render(){
    const key = this.props.name;
    const category = this.props.category;
    const data = this.props.data[category][key];

    return (<tr key={key}>
      <td style={{width: 20 + 'em'}}> {key} </td>
      <td style={{width: 10 + 'em'}}>
      <input className="mdl-textfield__input"
           type="number"
           style={{width: 100 + '%'}}
           id={key}
           value={data.value}
           onChange={this.props.onChange.bind(this, category, key, "value")}
          />
      </td>
      <td>
        {this.props.units}
      </td>
    </tr>)
  }
}

class FormSection extends Component{

  render(){

    const name = this.props.name;

    const rows = keys(this.props.data[this.props.name]).map( (item) => {
        const category = this.props.name;
        const key = item;
        return <FormRow key={`${category}${key}`}
                        name={key}
                        category={category}
                        data={this.props.data}
                        onChange={this.props.onChange}/>

    });

    return (
      <div>
        <h3>{name}</h3>
        <table className="mdl-data-table mdl-js-data-table  mdl-shadow--2dp">
            <thead>
               <tr>
                  <th>Category</th>
                  <th>loss %</th>
                  <th></th>
                  <th>Comments</th>
               </tr>
            </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>)
  }
}


class FormIndex extends Component{

    componentWillMount(){
      console.log("component will mount")
      if( keys(this.props.data).length < 1 ){
        // console.log("form getting data");
      // this.props.getData();
        this.props.dispatch(this.props.getData());
      }
    }

    componentDidMount(){
      console.log("componentDidMount");
    }

    onSubmit(){
      event.preventDefault();
      this.props.dispatch(this.props.postFormData(this.props.data));
    }

    onClear(event){
      event.preventDefault();
      this.props.dispatch(this.props.clearData());

    }

    onReload(event){
      event.preventDefault();
      this.props.dispatch(this.props.getData());
    }


    energyYieldSummary(){

      if(get(this.props.data, "Enery Yield Summary")){

        const windFarmNamePlate = <FormRowSummary category="Enery Yield Summary"
                                                  name='Wind Farm Name Plate'
                                                  units="GWhr/yr"
                                                  data={this.props.data}
                                                  onChange={this.props.onChange}/>

        const grossOuput = <FormRowSummary category="Enery Yield Summary"
                                                  name='Gross Output'
                                                  units="MN"
                                                  data={this.props.data}
                                                  onChange={this.props.onChange}/>
        return(
            <div>
            <h3>Enery Yield Summary</h3>
            <table className="mdl-data-table mdl-js-data-table  mdl-shadow--2dp">
            <tbody>
                {windFarmNamePlate}
                {grossOuput}
              </tbody>
            </table>
            </div>
        )
      }
    }

    availability(){
      if(get(this.props.data, "Availability")){
        return (<FormSection name="Availability"
                              data={this.props.data}
                              onChange={this.props.onChange} />)
      }
    }

    wakeEffect(){
      if(get(this.props.data, "Wake Effect")){
        return (<FormSection name="Wake Effect"
                              data={this.props.data}
                              onChange={this.props.onChange} />)
      }
    }

    electric(){
      if(get(this.props.data, "Electrical efficiency")){
        return (<FormSection name="Electrical efficiency"
                              data={this.props.data}
                              onChange={this.props.onChange} />)
      }
    }

    turbine(){
      if(get(this.props.data, "Turbine Performance")){
        return (<FormSection name="Turbine Performance"
                              data={this.props.data}
                              onChange={this.props.onChange} />)
      }
    }

    environmental(){
      if(get(this.props.data, "Environmental")){
        return (<FormSection name="Environmental"
                              data={this.props.data}
                              onChange={this.props.onChange} />)
      }
    }

    curtailments(){
      if(get(this.props.data, "Curtailments")){
        return (<FormSection name="Curtailments"
                              data={this.props.data}
                              onChange={this.props.onChange} />)
      }
    }


    chartData(){
      return flatten(keys(this.props.data).map( (key)=>{
        return keys(this.props.data[key]).map( (category)=>{
          // console.log(key, category);
          // console.log(this.props.data[key][category]);
          const tmp = get(this.props.data[key][category], 'value');
          if( tmp === "" ){
            return 0;
          }
          return tmp;
        })
      }));
    }

    upload(){
      this.refs.fileInput.value = "";
      this.refs.fileInput.click()
      // console.log(this.refs.fileInput.value);
    }

    onChange(e){
      // console.log("onChange");
      e.preventDefault();
      // console.log(e);
      // var files;
      // if (e.dataTransfer) {
      //     files = e.dataTransfer.files;
      // } else if (e.target) {
      //     files = e.target.files;
      // }


      this.props.dispatch(this.props.postUpload(e));
    }


    render(){


      const chartData = this.chartData();
      // console.log(chartData);

      // <div className="sparklines">
      //   <Sparklines data={chartData}
      //               height={40}
      //               width={400}>
      //     <SparklinesBars style={{ fill: 'slategray', barWidth: "10", fillOpacity: ".5" }} />
      //     <SparklinesLine style={{ stroke: "#41c3f9", strokeWidth: "0.5", fill: "none" }} />
      //   </Sparklines>
      // </div>


      //
      // <button className="btn btn-default" onClick={this.onReload.bind(this)}>reload</button>
      // <button className="btn btn-danger" onClick={this.onClear.bind(this)}>clear</button>

      return (

        <div className="maincontainer">


            <Tabs>
            <TabList>
                <Tab>Form</Tab>
                <Tab>Upload</Tab>
            </TabList>

            <TabPanel>
            <div>
              <RaisedButton style={{ marginTop: 50, marginRight: 20 }}
                            onClick={this.onSubmit.bind(this)}
                            label="Submit"/>

              <Link className="btn btn-link" to="/signout">logout</Link>
            </div>
            {this.energyYieldSummary()}
            {this.availability()}
            {this.wakeEffect()}
            {this.electric()}
            {this.turbine()}
            {this.environmental()}
            {this.curtailments()}

            <div>
              <RaisedButton style={{ marginTop: 50, marginRight: 20 }}
                            onClick={this.onSubmit.bind(this)}
                            label="Submit"/>

              <Link className="btn btn-link" to="/signout">logout</Link>
            </div>

            </TabPanel>

            <TabPanel>
                <div>
                  <input style={{display: 'none' }}
                         type='file'
                         ref='fileInput'
                         onChange={this.onChange.bind(this)} />

                   <div>
                     <RaisedButton style={{ marginTop: 50, marginRight: 20 }}
                                   onClick={this.upload.bind(this)}
                                   label="Upload"/>

                     <Link className="btn btn-link" to="/signout">logout</Link>
                   </div>

              </div>
            </TabPanel>





          </Tabs>
            <br></br>




        </div>
      )

    };

};

function mapStateToProps(state, ownProps){

  // console.log(JSON.stringify(state.data["Enery Yield Summary"]["Wind Farm Name Plate"]));

  return { data: state.data };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    onChange: (category, property, key, evt) => {
      dispatch(changeFormKey(evt, category, property, key));
    },
    dispatch: dispatch,
    getData: getData,
    clearData: clearData,
    postUpload: postUpload,
    postFormData: postFormData
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormIndex);
