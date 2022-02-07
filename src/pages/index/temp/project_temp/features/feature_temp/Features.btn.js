import { IconButton, MenuButton } from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";

export default function FeatureBtn() {
  return (
    <>
      <MenuButton
        as={ IconButton }
        color='#6d6875'
        size='sm'  
        bg='white'
        fontSize='xl'
        rounded='sm'
        icon={ <FiMoreHorizontal /> } 
        _hover={{ bg: 'rgba(109, 104, 117, 0.2)' }}
        _focus={{ outline: 'none' }}
        _active={{ bg: '#6d6875', color: 'white' }}
      />
    </>
  );
}