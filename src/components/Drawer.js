import * as C from '@chakra-ui/react';
import { FiBarChart2, FiX } from 'react-icons/fi';
import IconButtonSC from 'components/IconButton';

export default function DrawerS() {
  const { isOpen, onOpen, onClose } = C.useDisclosure();
  
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
      <C.Drawer isOpen={ isOpen } onClose={ onClose } placement='left'>
        <C.DrawerOverlay />
        <C.DrawerContent bg='#6d6875' rounded='0 16px 16px 0'>
          <C.Box p={ 6 }>
            <IconButtonSC
              boxShadow='md'
              _hover={{ boxShadow: 'sm' }} 
              onClick={ onClose } 
              color='#ffcdb2' 
              bg='#6d6875'
              fontSize='20px' 
              icon={ <FiX/> } 
            />
          </C.Box>
          <C.DrawerHeader>
          </C.DrawerHeader>
            
          <C.DrawerBody>
          </C.DrawerBody>

          <C.DrawerFooter>
          </C.DrawerFooter>
        </C.DrawerContent>
      </C.Drawer>
    </>
  );
}