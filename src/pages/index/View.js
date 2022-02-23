import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import useProject from "datafetching/useProject";
import useUser from "datafetching/useUser";
import Project from "pages/index/temp/Project";
import Map from "render/Map";

export default function View({ state, reduxActDefaultState }) {
  const { project } = useProject();
  const { user } = useUser();
  useEffect(() => reduxActDefaultState( project ), [ reduxActDefaultState, project ]);
  
  return (
    <>
      <Grid templateColumns='repeat(6, 1fr)' gap={ 4 } p={ 4 }>
        <Map data={ state } render={( i, k ) =>
          <GridItem key={ k } p={ 4 } boxShadow='md' rounded='xl' _hover={{ boxShadow: 'base' }}>
            <Project index={ k } project={ i } user={ user } />
          </GridItem>
        }/>
      </Grid>
    </>
  );
}