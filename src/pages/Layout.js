import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiBox, FiPlus, FiStar } from "react-icons/fi";
import { IBSSidebar } from "components/IconButton";
import DividerS from "components/Divider";
import DrawerSC from "components/Drawer";
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
        templateColumns='repeat(16, 1fr)'
      >
        <GridItem
          borderRight='1px' 
          borderColor='rgba(109, 104, 117, 0.2)'
        >
          <VStack
            pt={ 6 }
            top={ 0 }
            spacing={ 8 }
            position='sticky'
          >
            <DrawerSC />
            <DividerS w='20px' />
            <Map data={ featureList } render={( i, k ) => 
              <IBSSidebar
                key={ k }
                as={ Link }
                to={ i.url }
                icon={ <i.icon/> } 
                boxShadow={ i.url === pathname ? 'xl' : 'none' }
                color={ i.url === pathname ? 'sei.orange' : '#cfcdd2' } 
              />
            }/>
          </VStack>
        </GridItem>
        <GridItem colSpan={ 15 }>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}