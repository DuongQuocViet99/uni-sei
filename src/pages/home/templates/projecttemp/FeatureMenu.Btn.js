import { IconButton, MenuButton } from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";

export default function MenuBtn() {
  return (
    <>
      <MenuButton
        as={ IconButton }
        color='#6d6875'
        size='sm'  
        bg='white'
        fontSize='xl'
        icon={ <FiMoreHorizontal /> } 
        _hover={{ bg: 'rgba(255, 205, 178, 0.6)' }}
        _focus={{ outline: 'none' }}
        _active={{ bg: '#ffcdb2', color: 'white' }}
      />
    </>
  );
}