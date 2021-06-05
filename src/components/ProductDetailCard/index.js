import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import { Detail, Image, Name, PriceWrapper, Product } from './index.styles';

const BUTTON_COLOR = 'var(--color-brown)';

const ProductDetailCard = ({ imageUrl, name, price, onCartButtonClick }) => (
  <Product>
    <Detail>
      <Image src={imageUrl} alt={name} />
      <Name>{name}</Name>
      <PriceWrapper>
        <span>금액</span>
        <span>{price}원</span>
      </PriceWrapper>
    </Detail>
    <Button backgroundColor={BUTTON_COLOR} onClick={onCartButtonClick}>
      장바구니
    </Button>
  </Product>
);

ProductDetailCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onCartButtonClick: PropTypes.func.isRequired,
};

export default ProductDetailCard;
