import React from "react";

export default class Book extends React.Component{
    render(){
        return(
            <div>
                <img src = {this.props.url} alt="Book Thumbnail"></img>
            </div>
        )
    }
}