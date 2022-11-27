import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { Oval } from "react-loader-spinner";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Sign from "../components/sign";
import Cart from "../components/cart";

export default function HomePage() {
  const [products, setProducts] = useState();
  const mockup = {
    category: "processador",
    description:
      "O Ryzen 7 5800X3D conta com 8 núcleos otimizados para plataformas de jogos de alto FPS. Os processadores AMD Ryzen série 5000 capacitam a próxima geração de jogos exigentes, proporcionando experiências imersivas únicas e dominando qualquer tarefa multithread como 3D e renderização de vídeo e compilação de software.",
    image:
      "https://images.kabum.com.br/produtos/fotos/320796/processador-amd-ryzen-5-5500-cache-19mb-3-7ghz-4-2ghz-max-turbo-am4-100-100000457box_1647636457_gg.jpg",
    name: "Processador AMD Ryzen 7 5800X3D, 3.4GHz (4.5GHz Max Turbo), Cache 100MB, AM4, Sem Vídeo - 100-100000651WOF",
    price: 1999.99,
    _id: "6382570bd284db2c652fa7e9",
  };

  useEffect(() => {
    const request = axios.get(`${BASE_URL}/products`);
    request.then((res) => {
      console.log(res);
      setProducts(res.data);
    });
    request.catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <Header />
      <Categories />
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
      <Sign />
      <Cart />
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
