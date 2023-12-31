import { TaskItem } from "../TaskItem/TaskItem";
import { Container } from "../styles/Container";
import { Form } from "../Form/Form";
import { useState } from "react";
import { getSubheading } from "../../utils/getSubheading";
import styled from "styled-components";

const WrapperView = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  padding: 10px;
  list-style: none;
  gap: 24px;

  @media (min-width: 500px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 768px) {
    grid-template-columns: auto auto auto;
  }

  @media (min-width: 1200px) {
    grid-template-columns: auto auto auto auto auto;
  }
`;

const AddElement = styled.button`
  position: fixed;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  border: 2px solid gold;
  color: gold;
  font-size: 45px;
`;

const HeadingText = styled.span`
  color: white;
`;

let iterator = 8;

export function TasksWrapper() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Imię Nazwisko",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      name: "Imię Nazwisko",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      name: "Imię Nazwisko",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      name: "Imię Nazwisko",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,
      name: "Imię Nazwisko",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 6,
      name: "Imię Nazwisko",
      desc: "Lorem ipsum dolor",
      done: true,
    },
    {
      id: 7,
      name: "Imię Nazwisko",
      desc: "Lorem ipsum dolor",
    },
  ]);

  const [isFormShown, setFormShown] = useState(false);

  function handleShow() {
    setFormShown(true);
  }

  function markDone(task) {
    setData((prevData) =>
      prevData.map((el) => {
        if (el.id != task.id) {
          return el;
        }
        return {
          ...el,
          done: true,
        };
      })
    );
  }

  function addNewTask(newTask) {
    newTask.preventDefault;
    setData((prevTasks) => [
      ...prevTasks,
      { id: iterator++, name: "Imię Nazwisko", desc: newTask },
    ]);
    setFormShown(false);
  }

  function deleteItem(id) {
    setData((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Container>
        {isFormShown ? (
          <Form
            showValue={isFormShown}
            onFormSubmit={(newTask) => {
              addNewTask(newTask);
            }}
          />
        ) : (
          ""
        )}
        <HeadingText>{getSubheading(data.length)}</HeadingText>
        <WrapperView>
          {data.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDeleteButtonClick={() => {
                deleteItem(task.id);
              }}
              onDoneButtonClick={() => {
                markDone(task);
              }}
            />
          ))}
          {!isFormShown && <AddElement onClick={handleShow}>+</AddElement>}
        </WrapperView>
      </Container>
    </>
  );
}
