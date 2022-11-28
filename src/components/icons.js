import styled from "styled-components";
import { BASE_URL } from "../constants/url";
import {
  AiOutlineLogin,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Context from "../context/context";
import axios from "axios";

export default function Icons() {
  const [token] = useContext(Context);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState();
  const navigate = useNavigate();
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/shoppingCart`, config)
      .then((res) => {
        setProducts(res.data);
        res.data.map(p => console.log(p.price))
      })
      .catch((er) => {
        console.log(er.response.data);
      });
  }, []);

  async function deleteProduct(id) {
    try {
      await axios.delete(`${BASE_URL}/shoppingCart/${id}`, config);
      setOpen(true);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <Container>
      {token !== undefined && (
        <CartUser color={open ? "" : "black"}>
          {open === false && (
            <>
              <AiOutlineShoppingCart
                onClick={() => setOpen(true)}
                style={{
                  fontSize: "50px",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
              />
              <Number>{products.length}</Number>
            </>
          )}
        </CartUser>
      )}
      {open === true && (
        <Carrinho>
          <AiOutlineCloseCircle
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              cursor: "pointer",
              margin: "5px"
            }}
          />
          {products.map((p) => (
            <Product>
              <img src={p.image} alt="" />
              <p>{p.name}</p>
              <p className="preco">{p.price}</p>
              <AiOutlineClose
                onClick={() => deleteProduct(p._id)}
                style={{
                  color: "red",
                  border: "1px solid red",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
            </Product>
          ))}
            <Total><h1>Total: R${total}</h1></Total>
        </Carrinho>
      )}
      <SignUser>
        {token === undefined ? (
          <AiOutlineLogin onClick={() => navigate("/sign-in")} />
        ) : (
          <AiOutlineUser style={{ fontSize: "50px", cursor: "pointer" }} />
        )}
      </SignUser>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  position: fixed;
  right: 10%;
  bottom: 10px;
  @media (max-width: 768px) {
    width: 50px;
    right: 5%;
  }
`;
const SignUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 40px;
  align-items: center;
  width: 50px;
  height: 50px;
  color: black;
  border-radius: 50%;
`;
const CartUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  position: absolute;
  right: 120%;
  color: black;
  border-radius: 50%;
  margin-bottom: 5px;
`;
const Number = styled.h1`
  position: absolute;
  top: -2%;
  right: 10%;
  @media (max-width: 768px) {
    right: 10%;
  }
`;
const Carrinho = styled.div`
  width: 350px;
  height: 500px;
  background-color: white;
  position: fixed;
  right: 18%;
  bottom: 5px;
  border-radius: 5px;
  border: 1px solid black;
  overflow-y: auto;
  box-sizing: border-box;
  @media (max-width: 768px) {
    right: 10px;
    bottom: 80px;
  }
`;
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
    margin-right: 20px;
    font-size: 10px;
    max-width: 150px;
  }
  .preco {
    font-size: 15px;
    color: green;
  }
`;
const Total = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  bottom: 0;
`
