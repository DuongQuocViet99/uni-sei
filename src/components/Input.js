import { Input } from "@chakra-ui/react";

export default function InputS( props ) {
  return (
    <>
      <Input 
        _placeholder={{ fontSize: '15px', color: 'sei.gray' }}
        _hover={{ bg: 'rgba(109, 104, 117, 0.4)' }}
        bg='rgba(109, 104, 117, 0.2)'
        focusBorderColor='sei.gray'
        fontFamily='Quicksand'
        fontWeight='black'
        variant='filled'
        rounded='sm'
        { ...props }
      />
    </>
  );
}