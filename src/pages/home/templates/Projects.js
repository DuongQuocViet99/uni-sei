import { Grid, Text, Stack, Flex, Spacer } from "@chakra-ui/react";
import FilterToMap from "render/FilterToMap";
import EditableHeading from "pages/home/templates/projecttemp/EditableHeading";
import HeadingSC from "components/Heading";
import UserList from "./projecttemp/UserList";
import FeatureMenu from "./projecttemp/FeatureMenu";

export default function Projects({ project, anchor }) {
  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={ 4 }>
        <FilterToMap data={ project } condition={ p => p.anchor === anchor } render={ ( i, k ) =>
          <Stack key={ k } spacing={ 1 } p={ 6 } boxShadow='md' rounded='xl' _hover={{ boxShadow: 'base' }}>
            <HeadingSC size='md' letterSpacing="wide">
              <EditableHeading data={ i } />
            </HeadingSC>
            <Stack spacing={ 6 }>
              <Text fontSize='xs' opacity='0.5'> { i.timecreate.split(' ')[0] } </Text>
              <Flex>
                <UserList project={ i } />
                <Spacer />
                <FeatureMenu />
              </Flex>
            </Stack>
          </Stack>
        }/>
      </Grid>
    </>
  );
}