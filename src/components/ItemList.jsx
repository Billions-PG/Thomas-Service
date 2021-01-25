import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardDeck from 'react-bootstrap/CardDeck';
import Item from './Item.jsx';

const ItemList = ({ shopItems, alsoItems }) => (
  <Container fluid className="d-flex align-self-center">
    <Container className="w-50 p-2">
      <Row className="m-0">
        <CardDeck className="w-100 m-1">
          <Item item={shopItems[0]} />
          <Item item={shopItems[1]} />
        </CardDeck>
        <CardDeck className="w-100 m-1">
          <Item item={shopItems[2]} />
          <Item item={shopItems[3]} />
        </CardDeck>
      </Row>
    </Container>
    <Container className="w-50 p-2">
      <Row className="m-0">
        <CardDeck className="w-100 m-1">
          <Item item={alsoItems[0]} />
          <Item item={alsoItems[1]} />
        </CardDeck>
        <CardDeck className="w-100 m-1">
          <Item item={alsoItems[2]} />
          <Item item={alsoItems[3]} />
        </CardDeck>
      </Row>
    </Container>
  </Container>

);

export default ItemList;
