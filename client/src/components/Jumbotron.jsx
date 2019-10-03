import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Google Books Search</h1>
                    <p className="lead">Search Google Books for your favorite titles to add them to your reading list</p>
                    <hr className="my-2" />
                    <p>To get started, simply use the search bar below!</p>
                </div>
            </div>
        )
    }
}
export default Jumbotron;