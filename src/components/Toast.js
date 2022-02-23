import { Box, Divider, HStack } from "@chakra-ui/react";
import HeadingSC from "components/Heading";
import TextSC from "components/Text";
import FilterToMap from "render/FilterToMap";

const statusList = [
  { type: 'success', color: '#89b0ae' },
  { type: 'error', color: 'sei.red' },
  { type: 'warning', color: 'sei.yellow' }
];

export default function ToastSC({ heading, text, status }) {
  return (
    <>
      <FilterToMap data={ statusList } condition={ s => s.type === status } render={( i, k ) => 
        <Box key={ k } bg='sei.gray' p={ 2 } rounded='sm'>
          <HStack>
            <Divider 
              border='5px' 
              borderColor={ i.color } 
              orientation='vertical' 
              h='40px' 
              rounded='full'
            />
            <Box>
              <HeadingSC color='white' fontSize='md'>{ heading }</HeadingSC>
              <TextSC fontSize='sm' color='white'>{ text }</TextSC>
            </Box>
          </HStack>
        </Box>
      }/>
    </>
  );
}