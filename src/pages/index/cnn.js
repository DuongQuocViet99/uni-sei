import { Grid, GridItem, LinkBox } from "@chakra-ui/react";
import { useEffect } from "react";
import useProject from "datafetching/useProject";
import Item from "pages/index/temp/item";
import Map from "render/Map";

export default function Index({ state, reduxActDefProj }) {
  const { project } = useProject();
  useEffect(() => 
    reduxActDefProj( project ), 
    [ reduxActDefProj, project ]
  );
  
  return (
    <>
      <Grid
        p={ 4 }
        gap={ 2 } 
        templateColumns='repeat(5, 1fr)'
      >
        <Map data={ state } render={( i, k ) =>
          <GridItem 
            key={ k }
            p={ 4 }  
            rounded='sm'
            border='1px' 
            as={ LinkBox }
            borderColor='rgba(109, 104, 117, 0.2)'
          >
            <Item index={ k } project={ i } />
          </GridItem>
        }/>
      </Grid>
    </>
  );
}