import styled from "styled-components";
import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/context";

export default function Sign() {
  const [token] = useContext(Context);
  const navigate = useNavigate();

  return (
    <SignUser>
      {token === undefined ? (
        <AiOutlineLogin
          onClick={() => navigate("/sign-in")}
          style={{ fontSize: "50px", cursor: "pointer" }}
        />
      ) : (
        <AiOutlineUser style={{ fontSize: "50px", cursor: "pointer" }} />
      )}
    </SignUser>
  );
}

const SignUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100px;
  position: fixed;
  bottom: 0;
  right: 10px;
`;
