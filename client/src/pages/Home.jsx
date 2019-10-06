import React from 'react';
import {Link} from 'react-router-dom';

function Home () {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Google Books Search</h1>
            <p className="lead">Welcome to Google Books Search</p>
            <hr className="my-2" />
            <p>Continue to the search page to search for books</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/search" role="button">Search</Link>
            </p>
        </div>
    )
}

export default Home;