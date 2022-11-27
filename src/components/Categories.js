import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"


export default function Categories() {



  return (
    <Container>
      <p>Processador</p>
      <p>Placa mãe</p>
      <p>Placa de vídeo</p>
      <p>Memória Ram</p>
      <p>SSD/HD</p>
      <p>Gabinete</p>
      <p>Fonte</p>
    </Container>
  )
}

const Container = styled.div`
  height: 40px;
  display: flex;
  padding: 0 100px 0 100px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 4px solid black;
  img {
    height: 40px;
  }
  p {
    font-weight: 700;
  }
`
