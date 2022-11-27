import styled from "styled-components";
import {
  AiOutlineLogin,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/context";

export default function Icons() {
  const [token] = useContext(Context);
  const navigate = useNavigate();

  return (
    <Container>
      <SignUser>
        {token === undefined ? (
          <LoginIcon
            onClick={() => navigate("/sign-in")}
          />
        ) : (
          <AiOutlineUser style={{ fontSize: "50px", cursor: "pointer" }} />
        )}
      </SignUser>
      <CartUser>
        <ShoppingCart/>
        <Number>0</Number>
      </CartUser>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  position: absolute;
  right: 10%;
  @media (max-width: 768px) {
    width: 50px;
    right: 5%;
  }
`;
const SignUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100px;
`;
const CartUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100px;
`;
const Number = styled.h1`
  width: 10px;
  height: 10px;
  position: absolute;
  margin-bottom: 55px;
  margin-left: 50px;
  @media (max-width: 768px) {
    margin-bottom: 45px;
  margin-left: 30px;
  }
`;

const ShoppingCart = styled(AiOutlineShoppingCart)`
font-size: 50px;
cursor: pointer;
@media (max-width: 768px) {
    font-size: 30px;
  }`

const LoginIcon = styled(AiOutlineLogin)`
font-size: 50px;
cursor: pointer;
@media (max-width: 768px) {
    font-size: 30px;
  }`