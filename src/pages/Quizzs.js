import React, { Component } from "react";
import QuizzsData from "./../datas/Quizzs.json";
import {Link } from "react-router-dom";


class Quizzs extends Component {
  state = {};
  render() {
    return <div className="columns is-multiline">
        {QuizzsData.map(quizz => {
            let url = "/quizzs/" + quizz.titleSlug
            return <div className="column is-one-third myContent"><Link to={url}>
            <h2 className="title is-h2">{quizz.title}</h2>
            </Link></div>
        })}
        </div>;
  }
}

export default Quizzs;
