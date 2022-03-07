import { IconButton, MenuButton } from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";

export default function BtnOfAct() {
  return (
    <>
      <MenuButton
        size='sm'  
        bg='white'
        rounded='sm'
        fontSize='2xl'
        color='#6d6875'
        opacity= { 0.6 }
        as={ IconButton }
        icon={ <FiMoreHorizontal /> } 
        _hover={{ opacity: 1 }}
        _focus={{ outline: 'none' }}
        _active={{ color: 'sei.red', opacity: 1 }}
      />
    </>
  );
}