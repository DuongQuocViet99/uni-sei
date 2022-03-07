import { MenuItem, MenuList } from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";
import Map from "render/Map";

const featureList = [
  { text: 'Delete', icon: FiTrash2 }
];

export default function LstOfAction({ project, index, reduxActDeleteProject }) {
  return (
    <>
      <MenuList 
        p={ 0 } 
        bg='white'
        rounded='sm' 
        border='none'
        boxShadow='lg'
        fontSize='15px'
        color='sei.gray'
        fontFamily='Quicksand' 
      >
        <Map data={ featureList } render={( i, k ) => 
          <MenuItem
            key={ k }
            opacity={ 0.6 }
            cursor='default'
            fontWeight='black'
            icon={ <i.icon fontSize='20px' /> }
            _hover={{ bg: 'white', color: 'sei.red', opacity: 1 }}
            onClick={() => {
              reduxActDeleteProject( index, project.projectid )
            }}
          > { i.text } </MenuItem>
        }/>
      </MenuList>
    </>
  );
}