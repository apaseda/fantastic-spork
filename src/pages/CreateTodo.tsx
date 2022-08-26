import { FormEvent } from "react";
import { NewForm } from "../components";
import { Button } from "../ui";
import { useHistory } from "react-router-dom"; // used for routing from the component

function CreateTodo() {
  const history = useHistory();

  const createTodo = (event: FormEvent, formData: {username: string, password: string}) => {
    event.preventDefault();
    console.log(event, {formData});
    history.replace('/');
  };
  return (
    <div>
      <h2>New Todos</h2>
      <NewForm submitHandler={createTodo}>
        <Button text="Submit" type="button" />
      </NewForm>
    </div>
  );
}

export default CreateTodo;
