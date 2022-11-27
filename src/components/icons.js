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
          <AiOutlineLogin
            onClick={() => navigate("/sign-in")}
            style={{ fontSize: "50px", cursor: "pointer" }}
          />
        ) : (
          <AiOutlineUser style={{ fontSize: "50px", cursor: "pointer" }} />
        )}
      </SignUser>
      <CartUser>
        <AiOutlineShoppingCart
          style={{ fontSize: "50px", cursor: "pointer" }}
        />
        <Number>0</Number>
      </CartUser>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SignUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100px;
  position: fixed;
  bottom: 0;
  right: 10px;
`;
const CartUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100px;
  position: fixed;
  bottom: 0;
  right: 80px;
`;
const Number = styled.h1`
  width: 10px;
  height: 10px;
  position: absolute;
  margin-bottom: 55px;
  margin-left: 50px;
`;
