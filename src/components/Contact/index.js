import React from "react";
import {
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  ContactContainer,
  Form,
  FormContent,
  Text,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <FormWrap>
          <Icon to="/up_project">Logo</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </ContactContainer>
    </>
  );
};

export default Contact;
