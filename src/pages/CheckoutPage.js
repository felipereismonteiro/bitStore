import Header from "../components/Header"
import { useParams } from "react-router-dom"
import Categories from "../components/Categories"
import { BASE_URL } from "../constants/url"
import { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import { Oval } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import boleto from "../assets/images/boleto.png"
import cartao from "../assets/images/cartao.png"
import pix from "../assets/images/pix.png"

export default function CheckoutPage() {
  const navigate = useNavigate()
  const [payment, setPayment] = useState()
  const [products, setProducts] = useState([])
  const token = localStorage.getItem("bearer")
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }

  useEffect(() => {
    const request = axios.get(`${BASE_URL}/shoppingCart`, config)
    request.then((res) => {
      setProducts(res.data)
    })
    request.catch((error) => {
      console.log(error)
    })
  }, [])

  function totalPrice() {
    let price = 0
    products.forEach((e) => (price += e.price))
    return price
  }

  return (
    <>
      <Header></Header>
      {!token ? (
        <>
          <h1>Faça login para continuar!</h1>
          <button
            onClick={() => {
              navigate("/sign-in")
            }}
          >
            Login
          </button>
        </>
      ) : (
        <Container>
          {products.map((p) => (
            <Product>
              <img src={p.image} alt="" />
              <p>{p.name}</p>
              <p className="preco">{p.price}</p>
              <AiOutlineClose
                onClick={() => {}}
                style={{
                  color: "red",
                  border: "1px solid red",
                  marginRight: "10px",
                  cursor: "pointer",
                  fontSize: "20px",
                  width: "20px",
                }}
              />
            </Product>
          ))}
          <Payment>
            <div
              onClick={() => {
                setPayment("pix")
              }}
            >
              <img src={pix} />
              <Mark color={payment === "pix" ? "grey" : "white"}></Mark>
            </div>
            <div
              onClick={() => {
                setPayment("cartao")
              }}
            >
              <img src={cartao} />
              <Mark color={payment === "cartao" ? "grey" : "white"}></Mark>
            </div>
            <div
              onClick={() => {
                setPayment("boleto")
              }}
            >
              <img src={boleto} />
              <Mark color={payment === "boleto" ? "grey" : "white"}></Mark>
            </div>
          </Payment>
          <Fished>
            <h1>Total = R${totalPrice()}</h1>{" "}
            <button
              onClick={() => {
                const request = axios.post(`${BASE_URL}/checkout`, {paymentMethod: payment} ,config)
                request.then((res) => {
                  console.log(res)
                  alert('Compra realizada com sucesso')
                  navigate("/")
                })
                request.catch((error) => {
                  console.log(error)
                })
              }}
            >
              Finalizar Compra
            </button>
          </Fished>
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border: 4px solid black;
  border-radius: 30px;
  padding: 10px;
  width: 50%;
  @media (max-width: 830px) {
    flex-direction: column;
    padding: 5px;
    width: 90%;
  }
`
const Product = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  img {
    width: 200px;
  }
  p {
    font-size: 13px;
    max-width: 350px;
  }
  .preco {
    font-size: 15px;
    color: green;
  }
  @media (max-width: 830px) {
    img {
      width: 100px;
    }
  }
`
const Payment = styled.div`
  height: 150px;
  width: 100%;
  border-top: 4px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    height: 100px;
    border: 1px solid black;
  }
`

const Fished = styled.div`
  height: 150px;
  width: 100%;
  border-top: 4px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    color: green;
    font-size: 40px;
  }
  button {
    border: none;
    background-color: green;
    color: white;
    border-radius: 5px;
    height: 50px;
    cursor: pointer;
  }
  @media (max-width: 830px) {
    h1 {
      font-size: 20px;
    }
  }
`
const Mark = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 9999px;
  margin-top: 10px;
  background-color: ${(props) => props.color};
`
