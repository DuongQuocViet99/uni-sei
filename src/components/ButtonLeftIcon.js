import { Button } from "@chakra-ui/react";

export default function ButtonLeftIcon({ click, icon, children, opacity='1', color='#343434' }) {
  return (
    <>
      <Button
        onClick={ click }
        leftIcon={ icon } 
        color={ color }
        opacity={ opacity }
        p={ 0 }
        bg='white'
        fontFamily='Quicksand'
        fontSize='sm'
        _focus={{ outline: 'none' }}
        _hover={{ bg: 'white', opacity: 0.7 }}
        _active={{ bg: 'white' }}
      >
        { children }
      </Button>
    </>
  );
}