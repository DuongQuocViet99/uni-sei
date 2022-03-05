import { IconButton } from "@chakra-ui/react";

export default function IconButtonS( props ) {
  return (
    <>
      <IconButton
        _hover={{ bg: props.bg, opacity: '1' }}
        color={ props.color ?? '#6d6875' }
        rounded={ props.rounded ?? 'sm' }
        _focus={{ outline: 'none' }}
        _active={{ bg: props.bg }}
        bg={ props.bg ?? 'white' }
        cursor='default'
        { ...props }
        { ...props.editable }
      />
    </>
  );
}