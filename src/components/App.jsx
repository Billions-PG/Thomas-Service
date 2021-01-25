import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ItemList from './ItemList.jsx';
import './style.css';

const testAlso = [
  {
    name: 'also1 is a very long message to test out the elipses, hopefully it works!',
    shopName: 'test1',
    imageUrl: 'http://placeimg.com/640/480/fashion',
    price: {
      display: '$18.99',
      onSale: true,
      salePrice: '$9.45',
      salePercentage: 0.5,
    },
    shipping: {
      display: 'Free shipping eligible',
    },
  },
  {
    name: 'also is a very long message to test out the elipses, hopefully it works!',
    shopName: 'test2',
    imageUrl: 'http://placeimg.com/640/480/fashion',
    price: {
      display: '$18.99',
    },
    shipping: {
      display: 'Free shipping eligible',
    },
  },
  {
    name: 'also is a very long message to test out the elipses, hopefully it works!',
    shopName: 'test3',
    imageUrl: 'http://placeimg.com/640/480/fashion',
    price: {
      display: '$18.99',
    },
    shipping: {
      display: 'Free shipping eligible',
    },
  },
  {
    name: 'also is a very long message to test out the elipses, hopefully it works!',
    shopName: 'test4',
    imageUrl: 'http://placeimg.com/640/480/fashion',
    price: {
      display: '$18.99',
    },
    shipping: {
      display: 'Free shipping eligible',
    },
  },
];
const testShop = [
  {
    name: 'shop is a very long message to test out the elipses, hopefully it works!',
    shopName: 'test1',
    imageUrl: 'http://placeimg.com/640/480/fashion',
    price: {
      display: '$18.99',
    },
    shipping: {
      display: 'Free shipping eligible',
    },
  },
  {
    name: 'shop is a very long message to test out the elipses, hopefully it works!',
    shopName: 'test2',
    imageUrl: 'http://placeimg.com/640/480/fashion',
    price: {
      display: '$18.99',
    },
    shipping: {
      display: 'Free shipping eligible',
    },
  },
  {
    name: 'shop is a very long message to test out the elipses, hopefully it works!',
    shopName: 'test3',
    imageUrl: 'http://placeimg.com/640/480/fashion',
    price: {
      display: '$18.99',
    },
    shipping: {
      display: 'Free shipping eligible',
    },
  },
  {
    name: 'shop is a very long message to test out the elipses, hopefully it works!',
    shopName: 'test4',
    imageUrl: 'http://placeimg.com/640/480/fashion',
    price: {
      display: '$18.99',
    },
    shipping: {
      display: 'Free shipping eligible',
    },
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopItems: testShop,
      alsoItems: testAlso,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get(`/item/${2}`)
      .then((res) => this.setState({
        alsoItems: res.data[0],
        shopItems: res.data[1],
      }))
      .catch((err) => err);
  }

  render() {
    return (
      <>
        <Container fluid className="d-flex justify-content-center row align-items-center">
            <Col className="ml-4">
              <h3>More from this shop</h3>
            </Col>
            <Col className="d-flex justify-content-center row align-items-center">
              <Button style={{ borderRadius: 20 }} className="mr-3" variant="outline-dark" size="sm">See more</Button>
            </Col>
            <Col className="m-0">
              <h3>You may also like</h3>
            </Col>
            <Col className="d-flex justify-content-center row align-items-center">
              <Button style={{ borderRadius: 20 }} className="mr-3" variant="outline-dark" size="sm">See more</Button>
            </Col>
        </Container>
        <ItemList alsoItems={this.state.alsoItems} shopItems={this.state.shopItems} />
      </>

    );
  }
}

export default App;
