import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            nameDatePair: {}
        }
        this.callbackFunction = this.callbackFunction.bind(this);
    }
    callbackFunction = (childData) => {
        this.setState({nameDatePair: childData.nameDatePair}, ()=>{
            // console.log(this.state);
        });
    }
    render() {
        return (<div className="container-fluid">
            <center>
                <h2>Menu scheduler</h2>
            </center>
            <div className="container">
                <Bookings parentCallback = {this.callbackFunction}></Bookings>
                <Error dataFromParent = {this.state}></Error>
                <Meals dataFromParent = {this.state}></Meals>
            </div>
        </div>);
    }
}

export default App;