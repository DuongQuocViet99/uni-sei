import {
  Drawer, DrawerBody, DrawerHeader, DrawerFooter, Box, DrawerOverlay, DrawerContent, useDisclosure
} from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';

import IconButton from './IconButton';

export default function _Drawer_() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <IconButton click={ onOpen } color='#ffb4a2' bg='#6d6875' icon={ <FiMenu fontSize='20px' /> } />
      <Drawer isOpen={ isOpen } onClose={ onClose } placement='left'>
        <DrawerOverlay />
        <DrawerContent bg='#6d6875' rounded='0 16px 16px 0'>
          <Box p={ 9 }>
            <IconButton click={ onClose } color='#ffb4a2' bg='#6d6875' icon={ <FiX fontSize='20px' /> } />
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