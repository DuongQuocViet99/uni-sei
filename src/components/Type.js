import { Heading } from "@chakra-ui/react";

export default function Type({ children }) {
  return (
    <>
      <Heading 
        size='sm' 
        opacity='0.4' 
        fontFamily='Quicksand'
      >
        { children }
      </Heading>
    </>
  );
}