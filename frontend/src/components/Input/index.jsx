import styled from "styled-components";

const Input = styled.input((props) => ({
  padding: ".5rem",
  fontSize: props.type === "submit" ? "1.5rem" : "1.3rem",
  border: props.type === "submit" ? "none" : "1px solid #888",
  color: props.type === "submit" ? "#fff" : "#000",
  backgroundColor: props.type === "submit" ? "#4A154B" : "#fff",
  fontWeight: props.type === "submit" ? "500" : "300",
}));

export default Input;
