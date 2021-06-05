import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Product,
  Image,
  Description,
  Name,
  Price,
} from './index.styles';
import { Cart } from '../../assets/svg';

const ProductItem = ({
  imageUrl,
  name,
  price,
  onProductClick,
  onCartButtonClick,
}) => (
  <Container>
    <Product onClick={onProductClick}>
      <Image src={imageUrl} alt={name} />
      <Description>
        <div>
          <Name>{name}</Name>
          <Price>{price} 원</Price>
        </div>
      </Description>
    </Product>
    <button type="button" onClick={onCartButtonClick}>
      <Cart width="30" height="30" />
    </button>
  </Container>
);

ProductItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
