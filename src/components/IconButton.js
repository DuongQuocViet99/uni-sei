import { IconButton } from "@chakra-ui/react";

export default function _IconButton_({ icon, color, click, bgGradient, bg='white', size='md', rounded='sm' }) {
  return (
    <>
      <IconButton
        size={ size }
        rounded={ rounded }
        icon={ icon }
        color={ color }
        bg={ bg }
        onClick={ click }
        bgGradient={ bgGradient }
        boxShadow='lg'
        cursor='default'
        _hover={{ bg, boxShadow: 'base' }}
        _focus={{ outline: 'none' }}
        _active={{ bg }}
      />
    </>
  );
}