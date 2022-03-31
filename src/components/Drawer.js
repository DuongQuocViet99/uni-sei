import { FiBarChart2, FiEdit2, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as C from '@chakra-ui/react';
import { IBSDrawerBtn, IBSDrawerOutline, IBSDrawerClose } from 'components/IconButton';
import { BTSAuth, BTSDrawer } from 'components/Button';

export default function DrawerS() {
  const { isOpen, onOpen, onClose } = C.useDisclosure();
  const token = localStorage.getItem('TOKEN');

  return (
    <>
      {/* OPEN */}
      <IBSDrawerBtn 
        onClick={ onOpen }
        icon={ <FiBarChart2 /> } 
        transform='rotate(90deg)'
      />
      {/* CONTENT */}
      <C.Drawer 
        placement='left'
        isOpen={ isOpen } 
        onClose={ onClose } 
      >
        <C.DrawerOverlay bg='rgba(109, 104, 117, 0.4)' />
        <C.DrawerContent bg='sei.gray'>
          {/* CLOSE BTN */}
          <C.Box p={ 6 }>
            <IBSDrawerClose 
              icon={ <FiX /> }
              onClick={ onClose } 
            />
          </C.Box>
          {/* HEADER */}
          <C.DrawerHeader>
            <C.Divider borderColor='rgba(243, 219, 206, 0.4)' />
          </C.DrawerHeader>
          {/* BODY */}
          <C.DrawerBody>
            { token &&
              <C.ButtonGroup isAttached variant='outline' >
                <BTSDrawer>
                  Yasuo hasagi
                </BTSDrawer>
                <IBSDrawerOutline icon={ <FiEdit2 /> } />
              </C.ButtonGroup>
            } 
            { !token &&
              <C.Stack>
                <BTSAuth as={ Link } to='/signin'>
                  Sign in
                </BTSAuth>
                <BTSAuth as={ Link } to='/signup'>
                  Sign up
                </BTSAuth>
              </C.Stack>
            }
          </C.DrawerBody>
          {/* FOOTER */}
          <C.DrawerFooter alignSelf='start'>
            { token && 
              <BTSDrawer onClick={() => {
                localStorage.removeItem('TOKEN');
                onClose();
              }}>
                Sign out
              </BTSDrawer>
            }
          </C.DrawerFooter>
        </C.DrawerContent>
      </C.Drawer>
    </>
  );
}