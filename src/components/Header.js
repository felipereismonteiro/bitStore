import styled from "styled-components"
import logo from "../assets/images/logo.png"
import Icons from "./icons";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Icons/>
    </Container>
    
  )
}

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 4px solid black;
  img {
    height: 40px;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    img {
      width: 70%;
      height: auto;
      margin: 20px;
    }
  }
`
