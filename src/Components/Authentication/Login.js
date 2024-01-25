import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { Button, FormLabel } from "react-bootstrap";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  return (
    <VStack spacing="5px">
      <FormControl>
        <FormLabel>Enter your name</FormLabel>
        <Input type="email" placeholder="Enter Your name" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input type={"password"} placeholder="Enter Your Password" />
          <InputRightElement width="4rem">
            <Button h="1.75rem" size="sm" bg="white"></Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="teal"
        width="100%"
        style={{ marginTop: 15 }}
        isLoading={loading}
      ></Button>
    </VStack>
  );
};

export default Login;
