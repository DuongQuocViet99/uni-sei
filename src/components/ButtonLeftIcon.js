import { Button } from "@chakra-ui/react";

export default function ButtonLeftIcon({ children, icon, click }) {
  return (
    <>
      <Button
        p={ 0 }
        onClick={ click }
        leftIcon={ icon } 
        bg='white'
        fontFamily='Quicksand'
        fontWeight='thin'
        fontSize='sm'
        _focus={{ outline: 'none' }}
        _hover={{ bg: 'white' }}
        _active={{ bg: 'white' }}
      >
        { children }
      </Button>
    </>
  );
}