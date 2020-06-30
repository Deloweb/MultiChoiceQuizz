import React, { Component } from "react";
import Quizzs from "./../datas/Quizzs.json";
import Questions from "./../datas/Questions.json";

class Categorie extends Component {
  state = {};

  render() {
    let nameQuizz = this.props.match.params.id;
    let idQuizz = Quizzs.map((quizz) => {
      if (quizz.titleSlug === nameQuizz) {
        let quizzId = quizz.id;
        return quizzId;
      }
    });
    let quizzId = idQuizz.filter(function(x) {return x !== undefined});
console.log(quizzId)
    return (
      <div className="columns is-multiline">
        {Number(quizzId) ? (
          Questions.filter(
            (quizz) => quizz.idQuizz === Number(quizzId)
          ).map((quiz) => {
            return <div className="column is-one-third myContent">
              <p>{quiz.title}</p>
            </div>;
          })
        ) : (
          <p>test</p>
        )}
      </div>
    );
  }
}

export default Categorie;
