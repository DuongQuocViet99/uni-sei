import { IconButton } from "@chakra-ui/react";

export default function _IconButton_({ icon, color, click, bg='white' }) {
  return (
    <>
      <IconButton
        cursor='default'
        rounded='sm'
        boxShadow='lg'
        icon={ icon }
        color={ color }
        bg={ bg }
        onClick={ click }
        _hover={{ bg, boxShadow: 'base' }}
        _focus={{ outline: 'none' }}
        _active={{ bg }}
      />
    </>
  );
}