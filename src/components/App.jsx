import React, {Component} from 'react';
import axios from 'axios';
import {MenuComponent} from "./Menu";
import { Container } from 'semantic-ui-react';
import BookCard from "./BookCard";
import { Card } from 'semantic-ui-react'
import Filter from "../containers/Filter";


class App extends Component {

    componentWillMount() {
        const { setBooks } = this.props;
        axios.get("/books.json").then( ({ data }) => {
            setBooks(data);
        } )
    }

    render() {
        const { books, isReady } = this.props;
            return(
                <Container>
                    <MenuComponent/>
                    <Filter/>
                    <Card.Group itemsPerRow={4}>
                        {!isReady
                            ? "Загрузка..."
                            : books.map((book, key) => (
                                <BookCard key={key} {...book}/>
                            ))
                        }
                    </Card.Group>
                </Container>

        );
    }
}

export default App;
