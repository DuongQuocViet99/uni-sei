import { Text } from "@chakra-ui/react";

export default function _Text_({ children, size, color }) {
  return (
    <>
      <Text
        color={ color }
        fontSize={ size }
        fontFamily='Quicksand'
        fontWeight='light'
      >
        { children }
      </Text>
    </>
  );
}