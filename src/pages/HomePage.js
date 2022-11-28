import styled from "styled-components";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [products, setProducts] = useState();
  const [filter, setFilter] = useState("/products");
  const navigate = useNavigate()

  useEffect(() => {
    const request = axios.get(`${BASE_URL}${filter}`);
    request.then((res) => {
      setProducts(res.data);
    });
    request.catch((error) => {
      console.log(error);
    });
  }, [filter]);

  return (
    <>
      <Header />
      <Categories setFilter={setFilter} />
      <Container>
        {products ? (
          products.map((e) => (
            <Product key={e._id}>
              <img src={e.image} alt="product" />
              <p>{e.name}</p>
              <h1>R${e.price}</h1>
              <button onClick={() => {navigate(`/product/${e._id}`)}}>Comprar</button>
            </Product>
          ))
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
    </>
  );
}

const Container = styled.div`
  /* background-color: blue; */
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
`;
const Product = styled.div`
  height: 330px;
  margin: 10px;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border: 1px solid black;
  position: relative;
  padding-bottom: 35px;
  border-radius: 5px;
  h1{
      color: green;
      font-weight: 700;
    }
  img {
    height: 200px;
  }
  p {
    text-align: center;
  }
  button{
    width: 100%;
    position: absolute;
    bottom: 0;
    border: none;
    background-color: gray;
    height: 28px;
    color: white;
    cursor: pointer;
    :hover{
      background-color: black;
    }
  }
`;
