import styled from "styled-components";
import { Bars } from "react-loader-spinner";
import { useState } from "react";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  
  function change(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Text>Entrar</Text>
      <Form onSubmit={change}>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="senha" name="senha" placeholder="Senha" />
        <Button onClick={() => setLoading(true)}>
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
