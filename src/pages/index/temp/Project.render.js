import { Grid, Flex, Box } from "@chakra-ui/react";
import FilterToMap from "render/FilterToMap";
import UsersForThis from "pages/index/temp/project_temp/users/Users.this";
import Features from "pages/index/temp/project_temp/features/Features";
import Heading from "pages/index/temp/project_temp/heading/Heading";
import TextSC from "components/Text";

export default function ProjectRender({ project, user, anchor }) {
  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={ 4 }>
        <FilterToMap data={ project } condition={ p => p.anchor === anchor } render={( i, k ) =>
          <Box key={ k } p={ 6 } boxShadow='md' rounded='xl' _hover={{ boxShadow: 'base' }}>
            <Heading project={ i } /> {/* Heading */}
            <TextSC fontSize='xs' opacity='0.6'> { i.timecreate.split(' ')[0] } </TextSC>
            <Flex justifyContent='space-between' mt={ 4 }> 
              <UsersForThis project={ i } user={ user } /> {/* Users */}
              <Features project={ i } /> {/* Features */}
            </Flex>
          </Box>
        }/>
      </Grid>
    </>
  );
}