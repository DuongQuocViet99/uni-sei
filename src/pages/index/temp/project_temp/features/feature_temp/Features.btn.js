import { IconButton, MenuButton } from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";

export default function FeatureBtn() {
  return (
    <>
      <MenuButton
        opacity= { 0.6 }
        as={ IconButton }
        color='#6d6875'
        size='sm'  
        bg='white'
        fontSize='2xl'
        rounded='sm'
        icon={ <FiMoreHorizontal /> } 
        _hover={{ opacity: 1 }}
        _focus={{ outline: 'none' }}
        _active={{ color: 'sei.red', opacity: 1 }}
      />
    </>
  );
}