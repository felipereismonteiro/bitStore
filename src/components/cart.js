import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart() {
  <CartUser>
    <AiOutlineShoppingCart style={{ fontSize: "50px", cursor: "pointer" }} />
    <Number>0</Number>
  </CartUser>;
}
const CartUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin: 25px;
  right: 100px;
`
const Number = styled.h1`
  width: 10px;
  height: 10px;
  position: absolute;
  margin-bottom: 55px;
  margin-left: 50px;
`
