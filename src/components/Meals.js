import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

// const Meals = (() => {
//     return (<div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
//             <ol id="list">
//                         <li className="morning">Breakfast for insert_person_name</li>
//                         <li className="afternoon">Lunch for insert_person_name</li>
//                         <li className="night">Dinner for insert_person_name</li>
//             </ol>
//         </div>);
// });

class Meals extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(data) {
        this.setState({...data.dataFromParent}, ()=>{
        })
    }

    render() {
        let items = [];
        let data = this.state.nameDatePair;
        for(let key in data){
            data[key].map((value ,i)=>{
                items.push(
                <li key={key + i} className="morning">Breakfast for {key} on {value}</li>
                )
                items.push(
                <li key={key + i + 1} className="afternoon">Lunch for {key} on {value}</li>
                )
                items.push(
                <li key={key + i + 2} className="night">Dinner for {key} on {value}</li>
                )
            })
        }
        return (
            <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
                <ol id="list">
                    {items}
                </ol>
            </div>);
    }
}
export default Meals;
