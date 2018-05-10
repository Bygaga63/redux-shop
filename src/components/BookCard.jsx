import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const BookCard = ({ title, author, price, image, onAdd}) => (
    <Card>
        <Image src={image} />
        <Card.Content>
            <Card.Header>
                { title }
            </Card.Header>
            <Card.Meta>
        <span className='date'>
            {author}
        </span>
            </Card.Meta>

        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='rub' />
                {price}
            </a>
        </Card.Content>
        <Button onClick={onAdd}>Добавить в корзину</Button>
    </Card>
)

export default BookCard;