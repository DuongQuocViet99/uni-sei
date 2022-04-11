import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { FiBox, FiPlus, FiStar } from "react-icons/fi";
import { IBtnSidebar } from "components/IconButton";
import DividerOrigin from "components/Divider";
import DrawerS from "components/Drawer";
import Map from "render/Map";

const featureList = [
  { icon: FiBox, label: 'Project', url: '/' }, 
  { icon: FiPlus, label: 'New', url: '/new' },  
  { icon: FiStar, label: 'Premium', url: '/premium' }
];

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <Grid
        minH='100vh'
        templateColumns='repeat(18, 1fr)'
      >
        <GridItem>
          <VStack
            pt={ 5 }
            top={ 0 }
            spacing={ 10 }
            position='sticky' 
          >
            <DrawerS />
            <DividerOrigin w='20px' />
            <VStack spacing={ 6 }>
              <Map data={ featureList } render={( i, k ) => 
                <IBtnSidebar
                  i={ i }
                  key={ k }
                  pathname={ pathname }
                />
              }/>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem colSpan={ 17 }>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}