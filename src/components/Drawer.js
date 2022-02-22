import {
  DrawerHeader, 
  DrawerFooter, 
  DrawerOverlay, 
  DrawerContent, 
  useDisclosure,
  DrawerBody, 
  Drawer, 
  Box
} from '@chakra-ui/react';
import { FiBarChart2, FiX } from 'react-icons/fi';
import IconButtonSC from './IconButton';

export default function DrawerSC() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <IconButtonSC 
        onClick={ onOpen }
        bg='sei.gray'
        color='white'  
        fontSize='2xl'
        transform='rotate(90deg)'
        icon={ <FiBarChart2/> } 
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