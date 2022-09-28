import { Box, Container, Text, Button, Image, Input,InputGroup,InputRightElement,Flex,Spacer } from "@chakra-ui/react";
 import { ViewIcon,ViewOffIcon } from '@chakra-ui/icons';

import React, { useState } from 'react';


const Register = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  return (
    <>
      <Container p={10} maxW="container.lg">
        <Text fontSize="4xl">Create your account</Text>
        <Text>Sign up to access Google Digital Garage free online courses</Text>
      </Container>
     
      <Box  align='center'>
      <Box w="100%" mt={20} h="450px" bg="gray.100"></Box>
      <Box w='50%'  position="absolute" top='80' left='400' bg='white'>
        <Box pt={30} pb={10} pr={10} pl={10}  boxShadow='xl'>
          <Button p={5} align='start' mb={10} bg="white"  boxShadow='xl'  >
            {" "}
            <Image
              src="https://learndigital.withgoogle.com/static/digital-workshop/assets/icons/google-button-g.png"
              alt="google"
              boxSize="20px"
           
            />{" "}
            
            <Text>Register with Google</Text>{" "}
          </Button>
          <Text align='left' mb={5}  fontSize="2xl">Or continue with email</Text>
          <Input variant="flushed" placeholder="Email" mb={5} />
          <InputGroup size="md">
            <Input
              variant='flushed'
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Choose a password "
              
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <ViewIcon/> : <ViewOffIcon/>}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text align='left' mb={10}>
           Use 6 or more characters with a mix of letters, numbers & symbols
          </Text>
        </Box>
        <Flex mt={3}>
            <Text align='left'>Already have an account? Sign in.</Text>
            <Spacer/>
            <Button>Continue</Button>
        </Flex>
      </Box>
      </Box>
      
    </>
  );
};
export default Register;
