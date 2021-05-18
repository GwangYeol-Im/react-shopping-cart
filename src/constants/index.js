import noImage from '../assets/image/noImage.jpeg';

export const ACTION_TYPE = {
  PRODUCTS: {
    FETCH_PRODUCTS: 'products/patchProducts',
    ADD_TO_CART: 'products/addToCart',
    INCREASE_QUANTITY: 'products/increaseQuantity',
    DECREASE_QUANTITY: 'products/decreaseQuantity',
    TOGGLE_CHECKED: 'products/toggleChecked',
    TOGGLE_ENTIRE_CHECKED: 'products/toggleEntireChecked',
    DELETE_CHECKED: 'products/deleteCheckedProducts',
    DELETE: 'products/deleteProduct',
  },
  ORDER: {
    ADD_TO_ORDER_LIST: 'orders/addToOrderList',
  },
};

export const FALLBACK = {
  PRODUCT: {
    IMG_URL: noImage,
    NAME: '상품명 없음',
    PRICE: -1,
    QUANTITY: 1,
    CHECKED: true,
  },
};

export const ROUTE = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/product-detail',
  CART: '/cart',
  ORDER_PAYMENT: '/order-payment',
  COMPLETED_ORDER: '/completed-order',
};

export const PRODUCT = {
  QUANTITY: {
    MIN: 1,
    MAX: 100,
  },
};

export const MESSAGE = {
  PRODUCTS: {
    ADD_TO_CART_CONFIRM: '해당 상품을 장바구니에 추가하시겠습니까?',
    ADD_TO_CART_ALERT: '장바구니에 추가되었습니다.',
  },
  CART: {
    CHECK_PRODUCT_REQUEST: '주문할 상품을 선택해 주세요.',
  },
};
