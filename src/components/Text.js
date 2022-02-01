import { Text } from "@chakra-ui/react";

export default function TextSC( props ) {
  return (
    <>
      <Text
        color={ props.color ?? '#6d6875' }
        fontFamily='Quicksand'
      >
        { props.children }
      </Text>
    </>
  );
}