import styled from "styled-components";
const Button = styled.button`
  padding: 8px 12px;
  border: 1px solid #bd9a26;
  border-radius: 5px;
  background: transparent;
  cursor: pointer;
  color: #bd9a26;
  transition: color .4s, background .8s;

  &:hover {
    color: white;
    background: #bd9a26;
  }
`;

export function ButtonView({ children, onClick, type }) {
  return (
    <>
      <Button onClick={onClick} type={type}>{children}</Button>
    </>
  );
}
