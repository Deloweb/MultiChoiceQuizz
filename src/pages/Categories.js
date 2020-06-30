import React, { Component } from "react";
import CategoriesData from "./../datas/Categories.json";
import { Link } from "react-router-dom";

class Categories extends Component {
  state = {};
  render() {
    return (
      <div className="columns is-multiline">
        {CategoriesData.map((categorie) => {
          let url = "/categories/" + categorie.title;
          return (
            <div className="column is-one-third myContent">
              <Link to={url}>
                <h2 className="title is-h2 has-text-centered">{categorie.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;
