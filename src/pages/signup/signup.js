import { Box, Flex, FormControl, FormHelperText, FormLabel, Stack } from "@chakra-ui/react";
import { ButtonST2 } from "components/Button";
import { InputST2 } from "components/Input";

export default function SignUp() {
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
          color='sei.gray'
        >
          <FormControl>
            <FormLabel htmlFor='username' fontSize='sm'>USERNAME</FormLabel>
            <InputST2 id='username' type='text' placeholder='USERNAME' />
            <FormHelperText 
              fontSize='xs'
              opacity='0.8'
              color='sei.gray'
            >
              Required. 34 characters or fewer. Letters, digits and @/./+/-/_ only.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='fullname' fontSize='sm'>FULLNAME</FormLabel>
            <InputST2 id='fullname' type='text' placeholder='FULLNAME' />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='password' fontSize='sm'>PASSWORD</FormLabel>
            <InputST2 id='password' type='password' placeholder='PASSWORD' />
            <FormHelperText color='sei.gray' fontSize='xs'>
              Your password must contain at least 8 characters.
              Your password can't be entirely numeric.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='passwordconfirmation' fontSize='sm'>PASSWORD CONFIRMATION</FormLabel>
            <InputST2 id='passwordconfirmation' type='password' placeholder='PASSWORD CONFIRMATION' />
          </FormControl>
          <Box textAlign='right'>
            <ButtonST2>Sign up</ButtonST2>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}