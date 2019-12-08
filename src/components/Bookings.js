import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

Date.prototype.addDays = function(days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

class Bookings extends Component {

    constructor(props){

      super(props);
      this.state = {
        textFieldValueDate: "",
        textFieldValueName: "",
        nameDatePair: {}
      }
      
      this._handleTextFieldChangeDate = this._handleTextFieldChangeDate.bind(this);
      this._handleTextFieldChangeName = this._handleTextFieldChangeName.bind(this);
      this.getData = this.getData.bind(this);
    }

    _handleTextFieldChangeDate(e){
      this.setState({
        textFieldValueDate: e.target.value
      });
    }

    _handleTextFieldChangeName(e){
      this.setState({
        textFieldValueName: e.target.value
      });
    }

    getDates(startDate, stopDate) {
      let dateArray = new Array();
      let currentDate = startDate;
      while (currentDate <= stopDate) {
          dateArray.push(new Date (currentDate));
          currentDate = currentDate.addDays(1);
      }
      return dateArray;
    }

    getFormattedDate(todayTime) {
      let month = todayTime.getMonth() + 1;
      let day = todayTime.getDate() + 1;
      let year = todayTime.getFullYear();
      return year + "-" + month + "-" + day;
    }

    getDateFormatArray(dateString){
      let arr = dateString.split(" ");
      if(arr.length != 3){
        return [];
      }
      let rawDate = this.getDates(new Date(arr[0]), new Date(arr[2]));
      rawDate.map((value, i)=>{
        rawDate[i] = this.getFormattedDate(rawDate[i]);
      })
      return rawDate;
    }

    getData(){
      let textFieldValueDateTemp = this.state.textFieldValueDate.split("\n");
      let textFieldValueName = this.state.textFieldValueName.split("\n");
      let nameDatePair = {};
      textFieldValueName.map((value,i)=>{
        if(i <= textFieldValueDateTemp.length){
          nameDatePair[value] = this.getDateFormatArray(textFieldValueDateTemp[i]);
        }
      })
      this.setState({nameDatePair}, ()=>{
       // console.log(this.state);
        this.props.parentCallback(this.state);
      });
     
    }

    render() {
        return (
      <div className="row">
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the names (one name per line)"
          value={this.state.textFieldValueName} 
          onChange={this._handleTextFieldChangeName}
        />
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the date range for each name (one range per line)"
          value={this.state.textFieldValueDate} 
          onChange={this._handleTextFieldChangeDate}
        />
        <Button 
          variant="outlined" 
          color="primary" 
          className="block-center" 
          onClick={this.getData}>Get Meals Schedule</Button>
        </div>);
    }
}

export default Bookings;