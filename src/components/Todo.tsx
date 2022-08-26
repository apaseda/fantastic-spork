import { useState, FC } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

interface TodoProps {
  text: string;
  children: React.ReactNode
}

const Todo: FC<TodoProps> = ({children, text}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = (): void => {
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {children}
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/>}
      {modalIsOpen && <Backdrop onClick={closeModal}/>}
    </div>
  );
}

export default Todo;
