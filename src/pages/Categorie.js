import React, { Component } from "react";
import Quizzs from "./../datas/Quizzs.json";
import Categories from "./../datas/Categories.json";

class Categorie extends Component {
  state = {};

  render() {
    let nameCategorie = this.props.match.params.id;
    let idCategorie = Categories.map((categorie) => {
      if (categorie.title === nameCategorie) {
        let categorieId = categorie.id;
        return categorieId;
      }
    });
    let categorieId = idCategorie.filter(function (x) {
      return x !== undefined;
    });

    return (
      <div className="columns is-multiline">
        {Number(categorieId) ? (
          Quizzs.filter(
            (categorie) => categorie.idCategorie === Number(categorieId)
          ).map((quiz) => {
            return (
              <p className="column is-one-third myContent">{quiz.title}</p>
            );
          })
        ) : (
          <p>test</p>
        )}
      </div>
    );
  }
}

export default Categorie;