import React, {Component} from 'react';
import booksAPI from '../util/booksAPI';
import Book from '../components/Book';

class Saved extends Component {
    state = {
        books: [],
        search: ''
    }

    componentDidMount() {
        booksAPI.getSaved()
            .then(result => {
                console.log(result)
                this.setState({books: result.data});
            })
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value });
    }


    render() {
        return(
            <div className="container">
            <div className="row"
            style={{
                marginBottom: '1em'
            }}>
                <form>
                    <input onChange={this.handleInputChange} className="form-control" name="search" type="text" value={this.state.search} />
                </form>
            </div>
            <div className="row">
                {this.state.books && (this.state.search ? this.state.books.filter(book => (book.title.toLowerCase().indexOf(this.state.search) !== -1)).map(book => <Book key={book._id} image={book.image} title={book.title} description={book.description} author={book.author.join(", ")} link={book.infoLink} />):
                this.state.books.map(book => <Book key={book._id} image={book.image} title={book.title} description={book.description} author={book.authors && book.authors.join(", ")} link={book.infoLink} />))}
            </div>
        </div>
        )
    }
}

export default Saved;