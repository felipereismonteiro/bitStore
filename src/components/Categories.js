import styled from "styled-components"

export default function Categories({ setFilter }) {
  function change(e) {
    if (e === true) {
      return setFilter("/products")
    }
    setFilter(`/products?category=${e}`)
  }

  return (
    <Container>
      <p onClick={() => change(true)} style={{ cursor: "pointer" }}>
        Todos
      </p>
      <p onClick={() => change("processador")} style={{ cursor: "pointer" }}>
        Processador
      </p>
      <p onClick={() => change("placa-mae")} style={{ cursor: "pointer" }}>
        Placa mãe
      </p>
      <p onClick={() => change("placa-de-video")} style={{ cursor: "pointer" }}>
        Placa de vídeo
      </p>
      <p onClick={() => change("memoria-ram")} style={{ cursor: "pointer" }}>
        Memória Ram
      </p>
      <p onClick={() => change("ssd-hd")} style={{ cursor: "pointer" }}>
        SSD/HD
      </p>
      <p onClick={() => change("gabinete")} style={{ cursor: "pointer" }}>
        Gabinete
      </p>
      <p onClick={() => change("fonte")} style={{ cursor: "pointer" }}>
        Fonte
      </p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 4px solid black;
  img {
    height: 40px;
  }
  p {
    font-weight: 700;
    margin: 10px;
  }
`
