import { Heading } from "@chakra-ui/react";

export default function _Heading_({ children, size, fontWeight, opacity='1', letterSpacing='normal' }) {
  return (
    <>
      <Heading 
        size={ size } 
        opacity={ opacity } 
        letterSpacing={ letterSpacing }
        fontWeight={ fontWeight }
        fontFamily='Quicksand'
      >
        { children }
      </Heading>
    </>
  );
}