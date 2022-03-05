import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import useProject from "datafetching/useProject";
import Project from "pages/index/temp/Base";
import useUser from "datafetching/useUser";
import Map from "render/Map";

export default function Index({ state, reduxActDefaultState }) {
  const { project } = useProject();
  const { user } = useUser();
  useEffect(() => reduxActDefaultState( project ), [ reduxActDefaultState, project ]);
  
  return (
    <>
      <Grid templateColumns='repeat(6, 1fr)' gap={ 4 } p={ 4 }>
        <Map data={ state } render={( i, k ) =>
          <GridItem key={ k } p={ 4 } rounded='sm' boxShadow='md' _hover={{ boxShadow: 'base' }}>
            <Project project={ i } user={ user } index={ k } />
          </GridItem>
        }/>
      </Grid>
    </>
  );
}