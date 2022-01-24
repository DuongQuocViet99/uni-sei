import { Heading } from "@chakra-ui/react";

export default function Type({ children }) {
  return (
    <>
      <Heading 
        size='xs' 
        opacity='0.5' 
        fontFamily='Quicksand'
      >
        { children }
      </Heading>
    </>
  );
}