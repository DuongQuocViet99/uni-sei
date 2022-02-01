import { IconButton } from "@chakra-ui/react";

export default function IconButtonSC( props ) {
  return (
    <>
      <IconButton
        cursor='default'
        bg={ props.bg ?? 'white' }
        color={ props.color ?? '#6d6875' }
        rounded={ props.rounded ?? 'sm' }
        _hover={{ bg: props.bg, opacity: '1' }}
        _focus={{ outline: 'none' }}
        _active={{ bg: props.bg }}
        { ...props }
        { ...props.editable }
      />
    </>
  );
}