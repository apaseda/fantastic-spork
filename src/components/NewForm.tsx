import { ChangeEvent, FC, FormEvent, useState } from "react";

type FormProps = {
  children: React.ReactNode;
  submitHandler: (event: FormEvent, formData: {username: string, password: string}) => void;
};

const NewForm: FC<FormProps> = ({ children, submitHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(event: FormEvent) => submitHandler(event, {username, password})}>
      <div className="form-group">
        <label htmlFor="username">Name</label>
        <input
          type="text"
          id="username"
          required
          name="username"
          value={username}
          onChange={(event: any) => setUsername(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name=""
          id="password"
          className="form-control"
          value={password}
          onChange={(event: any) => setPassword(event.target.value)}
        />
      </div>
      {/* {children} */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewForm;
