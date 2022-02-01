import { Heading } from "@chakra-ui/react";

export default function HeadingSC( props ) {
  return (
    <>
      <Heading 
        color={ props.color ?? '#6d6875' } 
        fontFamily='Quicksand' 
        { ...props }
      >
        { props.children }
      </Heading>
    </>
  ); 
}