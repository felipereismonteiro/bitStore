import styled from "styled-components"
import { Bars } from "react-loader-spinner"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../constants/url"
import Context from "../context/context"

export default function SignInPage() {
  const [loading, setLoading] = useState(false)
  const [button, setButton] = useState(false)
  const [token, setToken] = useContext(Context)
  const navigate = useNavigate()

  async function change(e) {
    try {
      e.preventDefault()

      const userForm = {
        email: e.target.email.value,
        password: e.target.senha.value,
      }

      setLoading(true)
      setButton(true)

      const promisse = await axios.post(`${BASE_URL}/sign-in`, userForm)
      setToken(promisse.data)
      localStorage.setItem("bearer", promisse.data)
      alert("Logado!!!")
      navigate("/")
    } catch (err) {
      console.log(err.response.data)
      alert("Email ou senha invalidos!!!")
      setLoading(false)
      setButton(false)
    }
  }
  return (
    <Container>
      <Text>Entrar</Text>
      <Form onSubmit={change}>
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="password" name="senha" placeholder="Senha" required />
        <Button disabled={button}>
          {loading ? (
            <Bars
              height="40"
              width="40"
              color="white"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "Logar"
          )}
        </Button>
      </Form>

      <Link to="/sign-up" style={{ textDecoration: "none", margin: "10px" }}>
        Não possui uma conta? Cadastre-se agora!
      </Link>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.h1`
  font-size: 30px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  margin: 20px;
  transition-timing-function: ease-out;
  border-radius: 2px;
  padding: 10px;
  font-size: 20px;
  &:focus {
    outline: none;
    border-bottom: 3px solid black;
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 50px;
  border: none;
  outline: none;
  background: #2f2f2f;
  color: #fff;
  font-size: 22px;
  border-radius: 40px;
  text-align: center;
  box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin: 10px;
  transition: 0.2s;
  &:active {
    /* transform: translateY(2px); */
    width: 145px;
  }
`
