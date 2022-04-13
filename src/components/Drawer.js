import { Link } from 'react-router-dom';
import * as C from '@chakra-ui/react';
import { IBtnDrawer, IBtnDrawerClose } from 'components/IconButton';
import { BtnDrawer } from 'components/Button';
import DividerOrigin from './Divider';

export default function DrawerS() {
  const { isOpen, onOpen, onClose } = C.useDisclosure();
  const token = localStorage.getItem('TOKEN');
  
  function signOut() {
    localStorage.removeItem('TOKEN');
    onClose();
  }

  return (
    <>
      <IBtnDrawer onClick={ onOpen } />
      
      <C.Drawer 
        placement='left'
        isOpen={ isOpen } 
        onClose={ onClose } 
      >
        <C.DrawerOverlay bg='rgba(36, 36, 35, 0.4)' />
        <C.DrawerContent bg='sei.black'>
          <C.Box p={ 5 }>
            <IBtnDrawerClose onClick={ onClose } />
          </C.Box>
          <C.DrawerHeader>
            <DividerOrigin />
          </C.DrawerHeader>
          <C.DrawerBody>
            { token ?
              <BtnDrawer 
                w='full'
                as={ Link }
                to='/account'
              >
                Tài khoản
              </BtnDrawer>
            :
              <C.Stack>
                <BtnDrawer as={ Link } to='/signin'>
                  Sign in
                </BtnDrawer>
                <BtnDrawer as={ Link } to='/signup'>
                  Sign up
                </BtnDrawer>
              </C.Stack>
            }
          </C.DrawerBody>
          <C.DrawerFooter>
            { token && 
              <BtnDrawer onClick={() => signOut() }>
                Sign out
              </BtnDrawer>
            }
          </C.DrawerFooter>
        </C.DrawerContent>
      </C.Drawer>
    </>
  );
}