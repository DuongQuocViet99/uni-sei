import { Divider, Grid, GridItem, VStack } from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiBox, FiPlus, FiStar } from "react-icons/fi";
import IconButtonSC from "components/IconButton";
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
      <Grid templateColumns='repeat(16, 1fr)' minH='100vh'>
        <GridItem bg='sei.gray'>
          <VStack position='sticky' top={ 0 } pt={ 6 } spacing={ 8 }>
            <DrawerSC />
            <Divider borderColor='whiteAlpha.600' w='20px'/>
            <Map data={ featureList } render={( i, k ) => 
              <IconButtonSC
                as={ Link }
                to={ i.url }
                key={ k }
                bg='sei.gray'
                fontSize='22px'
                icon={ <i.icon/> } 
                boxShadow={ i.url === pathname ? 'xl' : 'none' }
                color={ i.url === pathname ? 'sei.yellow' : 'white' } 
                opacity={ i.url === pathname ? '1' : '0.4' }
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