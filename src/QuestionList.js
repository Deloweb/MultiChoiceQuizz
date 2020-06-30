import React, { Component } from 'react';
import Question from "./Question";

class QuestionList extends Component {
    state = {  }

    render() { 
        let listQuestions = this.props.questions.map(question => {
            return <Question title={question.title} />
        })

        return ( 
        <ul className="question-list">
            {listQuestions}
        </ul> 
        );
    }
}
 
export default QuestionList;