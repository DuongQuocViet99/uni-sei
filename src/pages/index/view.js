import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import useProject from "datafetching/useProject";
import Project from "pages/index/temp/base";
import useUser from "datafetching/useUser";
import Map from "render/Map";

export default function Index({ state, reduxActDefaultState }) {
  const { project } = useProject();
  const { user } = useUser();
  useEffect(() => reduxActDefaultState( project ), [ reduxActDefaultState, project ]);
  
  return (
    <>
      <Grid 
        p={ 4 }
        gap={ 4 } 
        templateColumns='repeat(6, 1fr)' 
      >
        <Map data={ state } render={( i, k ) =>
          <GridItem 
            p={ 4 } 
            key={ k } 
            rounded='sm' 
            boxShadow='md' 
            _hover={{ boxShadow: 'base' }}
          >
            <Project 
              index={ k } 
              project={ i } 
              user={ user } 
            />
          </GridItem>
        }/>
      </Grid>
    </>
  );
}