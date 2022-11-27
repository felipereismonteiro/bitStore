import styled from "styled-components"
import logo from "../assets/images/logo.png"

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  )
}

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid black;
  img {
    height: 40px;
  }
  @media (max-width: 768px) {
    img {
      width: 90%;
      height: auto;
      margin: 20px;
    }
  }
`
