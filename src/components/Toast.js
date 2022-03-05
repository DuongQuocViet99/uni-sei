import { Box, Divider, HStack } from "@chakra-ui/react";
import FilterToMap from "render/FilterToMap";
import HeadingSC from "components/Heading";
import TextSC from "components/Text";

const statusList = [
  { type: 'success', color: '#89b0ae' },
  { type: 'warning', color: 'sei.yellow' },
  { type: 'error', color: 'sei.red' }
];

export default function ToastS({ headline, text, status }) {
  return (
    <>
      <FilterToMap data={ statusList } condition={ s => s.type === status } render={( i, k ) => 
        <HStack key={ k } bg='sei.gray' rounded='sm' p={ 2 }>
          <Divider 
            borderColor={ i.color } 
            orientation='vertical' 
            rounded='full'
            border='5px' 
            h='40px' 
          />
          <Box>
            <HeadingSC color='white' fontSize='md'>
              { headline }
            </HeadingSC>
            <TextSC fontSize='sm' color='white'>
              { text }
            </TextSC>
          </Box>
        </HStack>
      }/>
    </>
  );
}