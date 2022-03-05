import { Text } from "@chakra-ui/react";

export default function TextS( props ) {
  return (
    <>
      <Text
        color={ props.color ?? '#6d6875' }
        fontFamily='Quicksand'
        fontWeight='black'
        { ...props }
      >
        { props.children }
      </Text>
    </>
  );
}