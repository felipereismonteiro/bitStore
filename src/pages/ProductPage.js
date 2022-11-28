import Header from "../components/Header"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../constants/url"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import { Oval } from "react-loader-spinner"
import Icons from "../components/icons"
import { AiOutlineRollback } from "react-icons/ai";

export default function ProductPage() {
  const params = useParams()
  const [product, setProduct] = useState()
  const token = localStorage.getItem("bearer")
  const navigate = useNavigate()
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }

  useEffect(() => {
    const request = axios.get(
      `${BASE_URL}/products?productId=${params.idProduct}`
    )
    request.then((res) => {
      setProduct(res.data)
    })
    request.catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Header />
      <Container>
        {product ? (
          <>
            <img src={product.image} />
            <WriteDiv>
              <h1>{product.name}</h1>
              <h2>R${product.price}</h2>
              <button
                onClick={() => {
                  const body = {
                    idProduct: params.idProduct,
                  }
                  const request = axios.post(
                    `${BASE_URL}/shoppingCart`,
                    body,
                    config
                  )
                  request.then(() => {})
                  request.catch(() => {
                    navigate("/sign-in")
                  })
                }}
              >
                Adicionar ao Carrinho
              </button>
              <p>{product.description}</p>
            </WriteDiv>
          </>
        ) : (
          <Oval
            height={80}
            width={80}
            color="black"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="grey"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )}
      </Container>
      <Back>
          <AiOutlineRollback style={{cursor: "pointer"}} onClick={() => navigate("/")}/>
      </Back>
      <Icons />

    </>
  )
}
const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 80%;
  height: 90vh;
  padding: 50px;
  img {
    width: 50%;
    margin-right: 40px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
    padding: 15px;
    width: 100%;
    img {
      width: 100%;
      margin: none;
    }
  }
`
const WriteDiv = styled.div`
  height: 100%;

  h1 {
    font-size: 30px;
    margin-bottom: 5%;
  }

  h2 {
    font-size: 40px;
    color: green;
    margin-bottom: 5%;
  }

  button {
    width: 100%;
    height: 5%;
    border: none;
    border-radius: 5px;
    background-color: green;
    color: white;
    margin-bottom: 5%;
    cursor: pointer;
  }

  p {
    font-size: 20px;
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 30px;
    }
    button {
      height: 40px;
    }
    p {
      font-size: 15px;
    }
  }
`
const Back = styled.div`
  width: 50px;
  height: 50px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`
