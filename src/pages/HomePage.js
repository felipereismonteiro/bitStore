import styled from "styled-components";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { Oval } from "react-loader-spinner";
import Icons from "../components/icons";

export default function HomePage() {
  const [products, setProducts] = useState();
  const [filter, setFilter] = useState("/products");
  console.log(filter)

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
      <Icons />
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
  height: 300px;
  margin: 10px;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  img {
    height: 200px;
  }
  p {
    text-align: center;
  }
`;
