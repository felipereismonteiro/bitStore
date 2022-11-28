import styled from "styled-components"
import { BASE_URL } from "../constants/url"
import {
  AiOutlineLogin,
  AiOutlineShoppingCart,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai"
import {ImExit} from "react-icons/im"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Icons() {
  const token = localStorage.getItem("bearer")
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}/shoppingCart`, config)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((er) => {
        console.log(er.response.data)
      })
  }, [open])

  function totalPrice() {
    let price = 0
    products.forEach((e) => (price += e.price))
    return price
  }

  async function deleteProduct(id) {
    try {
      axios.delete(`${BASE_URL}/${id}`, config)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <Container>
      {token && (
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
          <TotalPrice>
            <p>R${totalPrice()}</p>
            <button onClick={() => {navigate("/checkout")}}>Finalizar Compra</button>
          </TotalPrice>
        </Carrinho>
      )}
      <SignUser>
        {!token ? (
          <AiOutlineLogin onClick={() => navigate("/sign-in")} />
        ) : (
          <ImExit onClick={() => (localStorage.removeItem("bearer"), navigate("/"))} style={{ fontSize: "50px", cursor: "pointer" }} />
        )}
      </SignUser>
    </Container>
  )
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
`
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
`
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
`
const Number = styled.h1`
  position: absolute;
  top: -2%;
  right: 10%;
  @media (max-width: 768px) {
    top: 2px;
    right: 8px;
  }
`
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
  padding-bottom: 60px;
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
    margin-right: 20px;
    font-size: 10px;
    max-width: 150px;
  }
  .preco {
    font-size: 15px;
    color: green;
  }
`

const TotalPrice = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
  border-top: 1px solid black;
  width: 100%;
  height: 60px;
  p {
    color: green;
    font-size: 20px;
  }
  button {
    border: none;
    background-color: green;
    color: white;
    border-radius: 5px;
    height: 30px;
    cursor: pointer;
  }
`
