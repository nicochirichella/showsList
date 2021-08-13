import React from "react";
import Card from "./Card.js";

export default class ItemsList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      items: []
    };
    this.dataReturned = null;
  }

  componentDidMount() {
    const item1 = {
      author: "Nico chiri",
      title: "RIVER CAMPEON LIBERTADORES 2018",
      date: "9/12/2018",
      description: "Alegría eterna para el pueblo",
      likes: 193,
      isLiked: true
    };

    const item2 = {
      author: "Capitan Merluza",
      title: "MESSI AL PSG",
      date: "11/08/2021",
      description: "Sufre el barcelona",
      likes: 10,
      isLiked: true
    };

    const items = [item1, item2];
    this.dataReturned = true;
    this.setState({ items });
    /*fetch("https://google.com")
      .then(async (data) => {
        console.log("hola");
        
      })
      .catch((err) => console.error(err));*/
  }

  render() {
    return this.dataReturned ? (
      <ul>
        {this.state.items.map((item, i) => (
          <Card
            author={item.author}
            title={item.title}
            date={item.date}
            description={item.description}
            liked={item.isLiked}
            likeCount={item.likes}
          />
        ))}
      </ul>
    ) : (
      <h1>cargando</h1>
    );
  }
}
