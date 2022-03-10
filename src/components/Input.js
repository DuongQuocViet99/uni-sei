import { Input } from "@chakra-ui/react";

export default function InputS( props ) {
  return (
    <>
      <Input 
        rounded='sm'
        fontWeight='black'
        fontFamily='Quicksand'
        focusBorderColor='sei.gray'
        borderColor='rgba(109, 104, 117, 0.2)'
        _hover={{ borderColor: 'rgba(109, 104, 117, 0.4)' }}
        _placeholder={{ fontSize: '15px', color: 'sei.gray' }}
        { ...props }
      />
    </>
  );
}