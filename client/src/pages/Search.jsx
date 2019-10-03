import React, { Component } from 'react';
import Book from '../components/Book';
import booksAPI from '../util/booksAPI';

class Search extends Component {
    state = {
        books: [],
        search: ''
    }

    componentDidMount() {
        this.search()
        
    }

    search = () => {
        booksAPI.searchBook(this.state.search)
            .then(res => {
                console.log(res.data.items)
                this.setState({ books: (res.data.items) });
            })
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value });
    }

    handleSearch = event => {
        event.preventDefault();
        this.search();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <input onChange={this.handleInputChange} className="form-control" name="search" type="text" value={this.state.search} />
                        <button onClick={this.handleSearch} className="btn btn-primary">Search</button>
                    </form>
                </div>
                <div className="row">
                    {this.state.books && this.state.books.map(book => <Book key={book.id} image={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} description={book.volumeInfo.description} author={book.volumeInfo.authors && book.volumeInfo.authors.join(", ")} link={book.volumeInfo.infoLink} />)}
                </div>
            </div>
        )
    }
}

export default Search;