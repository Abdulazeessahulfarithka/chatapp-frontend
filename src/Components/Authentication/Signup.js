import React from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  VStack,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";

const SignUp = () => {
  return (
    <VStack margin="5px">
      <FormControl Required>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name" placeholder="Enter your name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input type="password" name="password" />
          <InputRightElement width="4rem">
            <Button h="1.75rem" size="sm" bg="white"></Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>upload your pic</FormLabel>
        <Input type="file" name="pic" />
      </FormControl>
      <Button
        colorScheme="teal"
        width="100%"
        type="submit"
        // onClick={handleSubmit}
        // style={{ marginTop: 15 }}
        // isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
