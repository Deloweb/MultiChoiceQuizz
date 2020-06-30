import React, { Component } from 'react';

class Question extends Component {
    state = {  }
    render() { 
        return ( 
            <li className="question">
                {this.props.title}
            </li>
         );
    }
}
 
export default Question;