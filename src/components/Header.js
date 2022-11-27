import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import logo from "../assets/images/logo.png"

export default function Header() {
  return (
    <Container>
      <img src={logo} />
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
`
