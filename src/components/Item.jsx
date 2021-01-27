import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = (props) => (

      <Card border="light" className="w-25 m-1"> <Link to={`/product/${props.item._id}`}>

        <Card.Img variant="top" className="p-2" style={{ borderRadius: 15 }} src={props.item.imageUrl} />
        <Card.Body className="p-1">
          <Card.Text className="mb-0 text-truncate">{props.item.name}</Card.Text>
          <Card.Text className="mb-0 text-muted">{props.item.shopName}</Card.Text>
          {props.item.price.onSale
            ? (
              <>
                <Card.Title className="m-0">{props.item.price.salePrice}</Card.Title>
                <Card.Text>
                  <small className="sale mb-0">{props.item.price.display}</small>
                  <small className="percent m-0">
                    {' '}
                    (
                    {props.item.price.salePercentage * 100}
                    % off)
                  </small>
                  {'\n'}
                  <small className="m-0 text-muted">{props.item.shipping.display}</small>
                </Card.Text>
              </>
            )
            : <Card.Title className="m-0">{props.item.price.display}</Card.Title>}
        </Card.Body>
        </Link>
      </Card>

    );

export default Item;
