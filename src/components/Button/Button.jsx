import styled from "styled-components";
const Button = styled.button`
  padding: 8px 12px;
  border: 1px solid gold;
  border-radius: 5px;
  background: transparent;
  cursor: pointer;
  color: gold;
  transition: color .4s, background .8s;

  &:hover {
    color: white;
    background: gold;
  }
`;

export function ButtonView({ children, onClick, type }) {
  return (
    <>
      <Button onClick={onClick} type={type}>{children}</Button>
    </>
  );
}
