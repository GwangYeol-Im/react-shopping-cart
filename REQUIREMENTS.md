# 기능 요구사항

## 🌟 공용

- Router

## 🌟 상품 목록

- 상품을 누르면 해당 상품의 상세 페이지로 이동한다.

## 🌟 상품 상세

### 상품이 없는 상태

- 장바구니 버튼을 누른다.
  - 장바구니에 상품을 추가한다.
  - 장바구니로 이동하시겠습니까? 라는 confirm 창이 뜬다.
    - confirm true - 이동
    - confirm false - 그대로 유지

### 상품이 있는 상태

- 장바구니 버튼을 누른다.
  - 이미 장바구니에 상품이 있습니다. 추가하시겠습니까? 라는 confirm 창이 뜬다.
    - confirm true - 상품 추가
    - confirm false - 그대로 유지

## 🌟 장바구니

- 유저가 담은 상품 목록을 볼 수 있다.
- 상품의 수량을 변경할 수 있다.
- 상품을 전체 선택/해제할 수 있다.
  - 선택한 상품을 삭제할 수 있다.
  - 선택한 상품을 주문할 수 있다.

## 🌟 주문/결제

- 유저가 주문한 상품 목록을 볼 수 있다.
- 상품을 결제할 수 있다.

## 🌟 주문 목록

- 유저가 결제한 상품 목록들을 볼 수 있다.
- 유저가 결제한 상품 목록을 다시 장바구니에 담을 수 있다.
- 주문 내역 상세 페이지로 이동할 수 있다.

## 🌟 주문 상세

- 유저가 결제한 상품 목록을 볼 수 있다.
- 유저가 결제한 상품 목록을 다시 장바구니에 담을 수 있다.
- 유저가 결제한 금액의 정보를 볼 수 있다.

## 🌟 컴포넌트 구조도

```
  - component
    - page
      - Products
        - [] ProductList
        - [] ProductDetailCard

      - Shopping
        - [] 장바구니
        - [] 주문결제
        - [] OrderList
        - [] OrderDetail

    - common
      - [x] Button

    - [x] NavBar
    - [x] PageHeader
    - [x] ProductItem
    - [x] ProductDetailCard

    - [x] ShoppingItem
    - [x] OrderItem
    - [] CompletedOrderList
    - [x] PaymentSheet
```
