import styled from "styled-components";
import {BASE_URL} from "../constants/url";
import {
  AiOutlineLogin,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineCloseCircle,
  AiOutlineClose,
  AiOutlineEdit
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Context from "../context/context";
import axios from "axios";

export default function Icons() {
  const [token] = useContext(Context);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/shoppingCart`, config).then((res) => {
      console.log(res.data)
    }).catch(er => {
      console.log(er.response.data);
    })
  }, [])

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
        {open === false &&
          <>
            <AiOutlineShoppingCart
              onClick={() => setOpen(true)}
              style={{ fontSize: "50px", cursor: "pointer" }}
            />
            <Number>0</Number>
          </>
        }
        
      </CartUser>
      {open && 
        <Carrinho>
          <AiOutlineCloseCircle onClick={() => setOpen(false)} style={{fontSize: "20px", margin: "5px", position: "fixed", cursor: "pointer"}}/>
          <Product>
            <img src="https://images.kabum.com.br/produtos/fotos/320796/processador-amd-ryzen-5-5500-cache-19mb-3-7ghz-4-2ghz-max-turbo-am4-100-100000457box_1647636457_gg.jpg" alt="" />
            <p>Processador AMD Ryzen 7 5800X3D, 3.4GHz (4.5GHz Max Turbo), Cache 100MB, AM4, Sem Vídeo - 100-100000651WOF</p>
            <AiOutlineClose style={{color: "red", border: "1px solid red", marginRight: "5px", cursor: "pointer"}}/>
            <AiOutlineEdit style={{color: "green", border: "1px solid green", cursor: "pointer"}}/>
          </Product>
        </Carrinho>}
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
const Carrinho = styled.div`
  width: 350px;
  height: 500px;
  background-color: white;
  position: fixed;
  bottom: 27px;
  right: 115px;
  border-radius: 5px;
  border: 1px solid black;
  overflow-y: auto;
  padding-bottom: 15px;
  @media (max-width: 768px) {
    right: 10px;
    bottom: 80px;
  }
`
const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  img {
    height: 50px;
  }
  p {
    margin-left: 10px;
    margin-right: 60px;
    font-size: 10px;
    max-width: 150px;
  }
`