import React, {Component} from 'react';

class Book extends Component {
    render() {
        return(
        <div className="card col-4">
            <img className="card-img-top" src={this.props.image} alt="book cover" />
            <div className="card-body">
                <h4 className="card-title">{this.props.title}</h4>
                <h5 className="card-title">By: {this.props.author || 'No author listed'}</h5>
                <p className="card-text">{this.props.description}</p>
                <a className="btn btn-secondary" target="_blank" rel="noopener noreferrer" href={this.props.link}>View Book</a>
                {document.location.pathname === '/search' && <button className="btn btn-primary ml-1">Save Book</button>}
            </div>
        </div>
        )
    }
}

export default Book;