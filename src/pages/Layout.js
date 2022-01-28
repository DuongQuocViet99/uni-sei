import { Grid, GridItem, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FiHelpCircle, FiPlus, FiSearch, FiStar } from "react-icons/fi";
import IconButton from "components/IconButton";
import Drawer from "components/Drawer";

export default function Layout() {
  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' minH='100vh'>
        <GridItem bg='#6d6875'>
          <VStack pt={ 9 } spacing={ 20 }>
            <Drawer />
            <VStack spacing={ 8 } justify='end'>
              <IconButton color='#ffb4a2' bg='#6d6875' icon={ <FiPlus fontSize='20px' /> } />
              <IconButton color='#ffb4a2' bg='#6d6875' icon={ <FiSearch fontSize='18px' /> } />
              <IconButton color='#ffb4a2' bg='#6d6875' icon={ <FiStar fontSize='18px' /> } />
              <IconButton color='#ffb4a2' bg='#6d6875' icon={ <FiHelpCircle fontSize='18px' /> } />
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