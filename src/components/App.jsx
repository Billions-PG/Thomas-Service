import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ItemList from './ItemList.jsx';
import './style.css';

const testAlso = [
// Front End Expects an array of these objects
//   imageUrl: "https://picsum.photos/id/120/400/300"
// name: "backing Baby long-sleeve"
// price: {display: "$31", worth: 31, onSale: false}
// shipping: {eligibility: true, display: "Free shipping eligible"}
// shopName: "practicalGlobal"
// similarProduct: (7) [78, 41, 49, 63, 20, 2, 57]
// _id: 21
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
//http://54.90.53.234:3003 joey
//http://52.53.221.54:3003 jon
//http://3.15.40.71:3003 pab
// 18.144.9.15 service ec2
  componentDidMount() {
    this.fetchData(`http://18.144.9.15:3003/api/product/${this.props.match.params.id}`);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData(`http://18.144.9.15:3003/api/product/${this.props.match.params.id}`);
      window.scrollTo(0, 0);
    }
  }

  fetchData(path) {
    axios.get(path)
      .then((res) => this.setState({
        alsoItems: res.data[0],
        shopItems: res.data[1],
      }))
      .then(()=> {
        console.log(this.state.alsoItems, this.state.shopItems);
      })
      .catch((err) => err);
  }

  render() {
    return (
      <>
        <Container fluid className="pt-5 mt-5 d-flex justify-content-center row align-items-center">
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
