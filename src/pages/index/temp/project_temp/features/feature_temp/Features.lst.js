import { MenuItem, MenuList } from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";
import Map from "render/Map";

const featureList = [
  { text: 'Delete', icon: FiTrash2 }
];

export default function FeatureLst({ project, index, reduxActDeleteProject }) {
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
            icon={ <i.icon fontSize='18px' /> }
            onClick={() => {
              reduxActDeleteProject( index, project.projectid )
            }}
          >
            { i.text }
          </MenuItem>
        }/>
      </MenuList>
    </>
  );
}