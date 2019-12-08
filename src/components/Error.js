import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

// const Error = (() => {
//     return (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
//             <div id="list">
//             <div className="error-msg">
//                     <i className="fa fa-times-circle"></i>
//             <p>Error! No menu generated for insert_person_name</p>
//                     </div>
//             </div>
//         </div>);
// });

class Error extends Component {

        constructor(props){
            super(props);
            this.state = {
                error: true
            };
        }
    
        componentWillReceiveProps(data) {
            this.setState({...data.dataFromParent}, ()=>{
            })
        }
        render() {
                let items = [];
                let data = this.state.nameDatePair;
                console.log(this.data);
                for(let key in data){
                        if(data[key].length == 0){
                                items.push(
                                        <div key={key} className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error">
                                                <div id="list">
                                                         <div className="error-msg">
                                                        <i className="fa fa-times-circle"></i>
                                                                <p>Error! No menu generated for {key}</p>
                                                        </div>
                                                </div>
                                        </div>
                                )
                        }
                }
                return (<div>
                        {items}
                </div>);
                }
        }
export default Error;
