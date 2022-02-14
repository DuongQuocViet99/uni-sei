import {
  Drawer, DrawerBody, DrawerHeader, DrawerFooter, Box, DrawerOverlay, DrawerContent, useDisclosure
} from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';

import IconButtonSC from './IconButton';

export default function DrawerSC() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <IconButtonSC
        m={ 5 }
        size='lg'  
        onClick={ onOpen } 
        color='#6d6875' 
        fontSize='20px'
        icon={ <FiMenu/> } 
      />
      <Drawer isOpen={ isOpen } onClose={ onClose } placement='left'>
        <DrawerOverlay />
        <DrawerContent bg='#6d6875' rounded='0 16px 16px 0'>
          <Box p={ 6 }>
            <IconButtonSC
              boxShadow='md'
              _hover={{ boxShadow: 'sm' }} 
              onClick={ onClose } 
              color='#ffcdb2' 
              bg='#6d6875'
              fontSize='20px' 
              icon={ <FiX/> } 
            />
          </Box>
          <DrawerHeader>
          </DrawerHeader>
            
          <DrawerBody>
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}