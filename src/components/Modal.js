import * as C from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import IconButtonSC from "components/IconButton";

export default function ModalS({ isOpen, onClose, size, children }) {
  return(
    <>
      <C.Modal 
        motionPreset='slideInBottom'
        scrollBehavior='inside'
        isOpen={ isOpen } 
        size={ size } 
      >
        <C.ModalOverlay />
        <C.ModalContent 
          fontFamily='Quicksand' 
          boxShadow='none'
          color='#6d6875'
          bg='none' 
        >
          <C.Box textAlign='right'>
            <IconButtonSC 
              onClick={ onClose }
              icon={ <FiX /> } 
              fontSize='2xl' 
              color='white'
              opacity='0.6' 
              bg='none' 
              size='xs'
              mb={ 2 }
            />
          </C.Box>
          { children }
        </C.ModalContent>
      </C.Modal>
    </>
  );
}