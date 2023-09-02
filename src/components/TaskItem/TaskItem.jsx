import styled from "styled-components";
import { ButtonView } from "../Button/Button";
const TaskView = styled.li`
  position: relative;
  background: #191919;
  min-height: 320px;
  padding: 12px 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 12px;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  transition: background 0.3s, color 0.3s;
  color: white;
  justify-content: space-between;

  &:hover {
    background: #323232;
  }
`;

const Image = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  border-bottom: 1px solid #333d51;
  padding-bottom: 8px;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MadeView = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color:rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid gold;
`;

export function TaskItem({ task, onClick }) {
  return (
    <>
      <TaskView>
        <div>
          <ImageContainer>
            <Image
              onClick={onClick}
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
              alt=""
            />
            <span>{task.name}</span>
          </ImageContainer>

          <span>{task.desc}</span>
        </div>

        <ActionsContainer>
          {" "}
          <>{task.done ? <MadeView>Zrobione</MadeView> : ""}</>
          {/* <div>{!task.done ? <ButtonView>Zrób</ButtonView> : ""}</div> */}
        </ActionsContainer>
      </TaskView>
    </>
  );
}
