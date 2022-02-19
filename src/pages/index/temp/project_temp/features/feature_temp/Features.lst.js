import { MenuItem, MenuList } from "@chakra-ui/react";
import { FiCheck, FiPaperclip, FiTrash2 } from "react-icons/fi";
import Map from "render/Map";

const featureList = [
  { text: 'Pending', icon: FiPaperclip, status: 1 },
  { text: 'Done', icon: FiCheck, status: 0 },
  { text: 'Delete', icon: FiTrash2 }
];

export default function FeatureLst({ project, reduxActchangeStatus }) {
  return (
    <>
      <MenuList 
        p={ 0 } 
        border='none' 
        bg='white'
        color='sei.gray'
        boxShadow='xl'
        fontFamily='Quicksand' 
        fontSize='15px'
      >
        <Map data={ featureList } render={( i, k ) => 
          <MenuItem
            key={ k }
            opacity={ 0.6 }
            fontWeight='black'
            cursor='default'
            _hover={{ bg: 'white', color: 'sei.red', opacity: 1 }}
            icon={ <i.icon fontSize='16px' /> }
            onClick={() => {
              i.text === 'Pending' && reduxActchangeStatus( project, 1 )
              i.text === 'Done' && reduxActchangeStatus( project, 0 )
            }}
          >
            { i.text }
          </MenuItem>
        }/>
      </MenuList>
    </>
  );
}