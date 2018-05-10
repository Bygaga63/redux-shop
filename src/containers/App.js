import {connect} from 'react-redux';
import * as booksActions from '../actions/books';
import App from "../components/App";
import {bindActionCreators} from 'redux';
import orderBy from 'lodash/orderBy.js';

const sortBy = (books, filterBy, searchQuery) => {
    books = filterBooks(books, searchQuery)
    switch (filterBy) {
        case "all":
            return books;
        case "price_high":
            return orderBy(books, "price", "desc");
        case "price_low":
            return orderBy(books, "price", "asc");
        case "author":
            return orderBy(books, "author", "asc");
        default:
            return books;
    }

};

const filterBooks = (books, searchQuery) => (
    books.filter(
        o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    ));

const mapStatToProps = ({books, filter}) => ({
    books: books.items && sortBy(books.items, filter.filterBy, filter.searchQuery),
    isReady: books.isReady,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
});


export default connect(mapStatToProps, mapDispatchToProps)(App);