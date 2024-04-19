import { useRef, useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  console.log("component restarted");

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Entered email:", enteredValues.email);
    console.log("Entered password:", enteredValues.password);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    //triggered onBlur, when user has edited the field and moved on to something else i.e., after its focus is gone
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  /*
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Entered email:", email.current.value);
    console.log("Entered password:", password.current.value);
  }

  const email = useRef();
  const password = useRef();
*/

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            //ref={email}
            value={enteredValues.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please include a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            //ref={password}
            value={enteredValues.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
