import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100vw;
  gap: 1rem;
  @media (min-width: 430px) {
    height: max-content;
    width: max-content;
    padding: 3rem;
    box-shadow: 0px 5px 20px 10px rgb(0 0 0 / 9%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
  }
`;

const Img = styled.img`
  height: 3rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: #1d1c1d;
`;

const FormPage = (props) => {
  return (
    <Form>
      <Link to="/" style={{ textAlign: "center" }}>
        <Img src="/src/slack-logo.svg" />
      </Link>
      <Title>{props.title}</Title>
      {props.children}
    </Form>
  );
};

export default FormPage;
