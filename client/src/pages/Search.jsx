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

    save = body => {
        booksAPI.saveBook(body)
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        });;
        console.log('saved?')
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <input onChange={this.handleInputChange} className="form-control" name="search" type="text" value={this.state.search} 
                        style={{
                            marginBottom: '.3em'
                        }} />
                        <button onClick={this.handleSearch} className="btn btn-primary"
                        style={{
                            marginBottom: '1em'
                        }}>
                            Search
                        </button>
                    </form>
                </div>
                <div className="row">
                    {this.state.books && this.state.books.map(book => <Book key={book.id} image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null} title={book.volumeInfo.title} description={book.volumeInfo.description} author={book.volumeInfo.authors && book.volumeInfo.authors.join(", ")} link={book.volumeInfo.infoLink} click={this.save} />)}
                </div>
            </div>
        )
    }
}

export default Search;