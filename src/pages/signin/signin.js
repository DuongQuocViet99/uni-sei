import { Box, Flex, Stack } from "@chakra-ui/react";
import { ButtonST2 } from "components/Button";
import { InputST2 } from "components/Input";

export default function SignIn() {
  return (
    <>
      <Flex
        h='100vh'
        align='center'
        justify='center'
      >
        <Stack
          p={ 4 }
          w='full'
          maxW='md'
          spacing={ 4 }
          boxShadow='xl'
          textAlign='right'
        >
          <InputST2 type='text' placeholder='USERNAME' />
          <InputST2 type='password' placeholder='PASSWORD' />
          <Box>
            <ButtonST2>Sign in</ButtonST2>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}