import { IconButton } from "@chakra-ui/react";

export default function _IconButton_( props ) {
  const { 
    icon, color, click, editable, 
    opacity='1', bg='white', size='md', rounded='sm' 
  } = props

  return (
    <>
      <IconButton
        opacity={ opacity }
        size={ size }
        rounded={ rounded }
        icon={ icon }
        color={ color }
        bg={ bg }
        onClick={ click }
        boxShadow='lg'
        cursor='default'
        _hover={{ bg, boxShadow: 'base', opacity: '1' }}
        _focus={{ outline: 'none' }}
        _active={{ bg }}
        { ...editable }
      />
    </>
  );
}