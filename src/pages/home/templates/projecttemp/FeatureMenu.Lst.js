import { Box, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { FiAnchor, FiCheck, FiX } from "react-icons/fi";
import Map from "render/Map";

const featureList = [
  { text: 'pending', icon: FiAnchor },
  { text: 'done', icon: FiCheck },
  { text: 'delete', icon: FiX }
]

export default function MenuLst() {
  return (
    <>
      <MenuList p={ 0 } rounded='none'>
        <Map data={ featureList } render={( i, k ) => 
          <Box key={ k }>
            { i.text === 'delete' && <MenuDivider borderColor='rgba(109, 104, 117, 0.4)' /> }
            <MenuItem 
              color='#6d6875'
              fontFamily='Quicksand'
              fontWeight='black'
              _hover={{ bg: 'rgba(255, 205, 178, 0.6)' }} 
              icon={ <i.icon /> } 
            >
              { i.text }
            </MenuItem>
          </Box>
        }/>
      </MenuList>
    </>
  );
}