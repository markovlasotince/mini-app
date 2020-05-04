import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// actions
import { loginUserAction } from "../../../store/actions/auth";

const LoginForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(emailValue, passwordValue));
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmailValue(e.target.value);
    }
    if (e.target.name === "password") {
      setPasswordValue(e.target.value);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="with a placeholder"
          defaultValue=""
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password placeholder"
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default LoginForm;
