import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FiHelpCircle, FiPlus, FiSearch, FiStar } from "react-icons/fi";
import IconButtonSC from "components/IconButton";
import DrawerSC from "components/Drawer";
import TooltipSC from "components/Tooltip";
import Map from "render/Map";

const featureList = [
  { icon: FiPlus, label: 'New' }, 
  { icon: FiSearch, label: 'Search' }, 
  { icon: FiStar, label: 'Premium' },
  { icon: FiHelpCircle, label: 'Q&A' }
];

export default function Layout() {
  return (
    <>
      <Grid templateColumns='repeat(16, 1fr)' minH='100vh'>
        <GridItem borderRight='1px solid rgba(109, 104, 117, 0.2)'>
          <Box position='sticky' top={ 0 }>
            <DrawerSC />
            <VStack mt={ 20 } spacing={ 6 }>
              <Map data={ featureList } render={( i, k ) => 
                <TooltipSC key={ k } label={ i.label } placement='right'>
                  <Box>
                    <IconButtonSC opacity='0.6' fontSize='20px' icon={ <i.icon/> } />
                  </Box>
                </TooltipSC>
              }/>
            </VStack>
          </Box>
        </GridItem>
        <GridItem colSpan={ 15 }>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}