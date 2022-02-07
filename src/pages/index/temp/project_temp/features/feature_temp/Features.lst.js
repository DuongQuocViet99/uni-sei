import { Box, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { FiAnchor, FiCheck, FiTrash2 } from "react-icons/fi";
import axios from "axios";
import Map from "render/Map";

const featureList = [
  { text: 'pending', icon: FiAnchor },
  { text: 'done', icon: FiCheck },
  { text: 'delete', icon: FiTrash2 }
];

export default function FeatureLst({ project, reduxActchangeStatus }) {
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
              _hover={{ boxShadow: 'md', bg: 'white' }}
              icon={ <i.icon fontSize='18px' /> } 
              onClick={() => {
                if ( i.text === 'pending' ) {
                  reduxActchangeStatus( project, 1 )
                  axios({
                    method: 'PUT', 
                    url: `http://localhost:3001/project/${ project.projectid }/anchor`, 
                    data: { anchor: 1 } 
                  })
                } 
                else if ( i.text === 'done' ) {
                  reduxActchangeStatus( project, 0 )
                  axios({
                    method: 'PUT', 
                    url: `http://localhost:3001/project/${ project.projectid }/anchor`, 
                    data: { anchor: 0 } 
                  })
                }
              }}
            >
              { i.text }
            </MenuItem>
          </Box>
        }/>
      </MenuList>
    </>
  );
}