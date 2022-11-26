import styled from "styled-components";
import { Bars } from "react-loader-spinner";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(false);
  const navigate = useNavigate();

  async function change(e) {
    try {
      e.preventDefault();

      if (e.target.senha.value !== e.target.confirmeSenha.value) {
        alert("Senhas não coincidem!!!");
        return false;
      }

      const userForm = {
        name: e.target.nome.value,
        email: e.target.email.value,
        password: e.target.senha.value
      }
  
      setLoading(true);
      setButton(true);

      const promisse = await axios.post("https://bitstore.onrender.com/sign-up", userForm);
      console.log(promisse);
      alert("cadastrado!!!");
      navigate("/sign-in")
    } catch (err) {
      console.log(err.response.data);
      setLoading(false);
      setButton(false);
    }
  }

  return (
    <Container>
      <Text>Cadastrar</Text>
      <Form onSubmit={change}>
        <Input type="name" name="nome" placeholder="Nome" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="senha" placeholder="Senha" />
        <Input type="password" name="confirmeSenha" placeholder="Confirme sua senha" />
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
            "Cadastrar"
          )}
        </Button>
      </Form>
      <Link to="/sign-in" style={{textDecoration: "none", margin: "10px"}}>Possui uma conta? Entre agora!</Link>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  font-size: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
`;

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
`;
