import styled from "styled-components";
import { useState } from "react";
import { keyframes } from "styled-components";
import { ButtonView } from "../Button/Button";

const fadeIn = keyframes`
 0% { transform: translateX(-100%); }
 100% { transform: translateX(0%); }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  gap: 6px;
  transform: translate(-100%);
  background: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 50;
  padding: 24px;
  border-right: 3px solid #bd9a26;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  max-width: 100vw;
  transition: all 1s;
  animation-name: ${fadeIn};
  animation-duration: 0.8s;
`;

const InputView = styled.textarea`
  display: flex;
  padding: 8px 12px;
  border: 1px solid #bd9a26;
  border-radius: 5px;
  background: black;
  color: #bd9a26;
  &:focus {
    outline: none;
  }
`;

export function Form({ showValue, onFormSubmit }) {
  const [textareaValue, setTextareaValue] = useState(
    "Lorem ipsum dolor, sit amet."
  );

  console.log(textareaValue)


  return (
    <form onSubmit={(event) => {
      event.preventDefault;

      onFormSubmit(textareaValue)
    }}>
      <Container style={showValue ? { transform: `translate(0)` } : ""}>
        <InputView
          onChange={(event) => {
            setTextareaValue(event.target.value.trim());
          }}
          placeholder="Form"
          value={textareaValue}
          name="text"
          id="text"
        />
        <ButtonView type={"submit"}>
          Dodaj
        </ButtonView>
      </Container>
    </form>
  );
}
