import React from "react";
import Book from "./Book";

/**
 * Grid to display all the books that we just got
 */
export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: undefined,
    };
  }
  componentDidMount() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA9KMdYzvCU-Auu92oeBQIyqN-cT34rNH8"
    )
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          books: res,
        });
      });
  }
  render() {
    let volumes = null;
    if(this.state.books){
        volumes = this.state.books.items.map((item,index)=>{
            return <Book key = {index} url={item.volumeInfo.imageLinks.thumbnail}/>
        });
    }
    return (
      <div className="grid-container">
        {volumes}
      </div>
    );
  }
}
