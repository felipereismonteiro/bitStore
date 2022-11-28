import Header from "../components/Header"
import { useParams } from "react-router-dom"
import Categories from "../components/Categories"
import { BASE_URL } from "../constants/url"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import styled from "styled-components"
import { Oval } from "react-loader-spinner"
import Icons from "../components/icons"
import Context from "../context/context"

export default function ProductPage() {
  const params = useParams()
  const [product, setProduct] = useState()
  const [token] = useContext(Context)
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
              <h2>{product.price}</h2>
              <button
                onClick={() => {
                  console.log('oi')
                  const body = {
                    idProduct: params.idProduct
                    }
                  const request = axios.post(`${BASE_URL}/shoppingCart`, body, config)
                  request.then((res) => {
                    console.log(res.data)
                  })
                  request.catch((error) => {
                    console.log(error)
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
      <Icons />
    </>
  )
}

const Container = styled.div`
  /* background-color: red; */
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
  @media (max-width: 1000px) {
    width: 100%;
    height: 100vh;
    margin: 20px;
    padding: none;
    flex-direction: column;
    img {
      width: 80%;
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
  }

  p {
    font-size: 20px;
  }
`
