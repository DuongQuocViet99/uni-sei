import { Grid, Text, AvatarGroup, Avatar, Stack } from "@chakra-ui/react";
import FilterToMap from "render/FilterToMap";
import EditableHeading from "pages/home/templates/heading/EditableHeading";
import Heading from "components/Heading";

export default function Projects({ project, user, pin }) {
  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={ 4 }>
        <FilterToMap data={ project } condition={ p => p.pin === pin } render={ ( i, k ) =>
          <Stack 
            key={ k } 
            spacing={ 1 }
            p={ 6 }
            boxShadow='md'
            rounded='xl'
            _hover={{ boxShadow: 'base' }}
          >
            <Heading size='md' fontWeight='light' letterSpacing="wide">
              <EditableHeading data={ i } />
            </Heading>
            <Stack spacing={ 6 }>
              <Text fontSize='xs' opacity='0.5'> { i.timecreate.split(' ')[0] } </Text>
              <AvatarGroup size='xs'>
                {
                  user?.filter( u => u.projectid === i.projectid ).map(( i, k ) => 
                    <Avatar key={ k } bg='#6d6875' color='white' name={ i.name } />   
                  )
                }
              </AvatarGroup>
            </Stack>
          </Stack>
        }/>
      </Grid>
    </>
  );
}