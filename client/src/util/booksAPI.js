const axios = require('axios');

const queryURL = "https://www.googleapis.com/books/v1/volumes?q="
const booksAPI = {
    searchBook: function(query) {
        query = query.trim().replace(/\s/g, "+");
        return axios.get(queryURL + query);
    }
}

export default booksAPI;