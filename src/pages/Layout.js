import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FiPlus, FiSearch } from "react-icons/fi";
import IconButton from "components/IconButton";
import Drawer from "components/Drawer";

export default function Layout() {
  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' minH='100vh'>
        <GridItem bg='#6d6875'>
          <VStack pt={ 9 } spacing={ 20 }>
            <Drawer />
            <VStack spacing={ 6 }>
              <IconButton color='#ffb4a2' bg='#6d6875' icon={ <FiPlus fontSize='20px' /> } />
              <IconButton color='#ffb4a2' bg='#6d6875' icon={ <FiSearch fontSize='18px' /> } />
            </VStack>
          </VStack>
        </GridItem>
        <GridItem colSpan={ 11 }>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}