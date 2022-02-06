import { Box, HStack } from "@chakra-ui/react";
import { FiCheckCircle, FiInfo, FiXCircle } from "react-icons/fi";
import HeadingSC from "components/Heading";
import TextSC from "components/Text";
import FilterToMap from "render/FilterToMap";

const statusList = [
  { type: 'success', color: '#89b0ae', icon: FiCheckCircle },
  { type: 'error', color: '#e5989b', icon: FiXCircle },
  { type: 'warning', color: '#ffcdb2', icon: FiInfo }
];

export default function ToastSC({ heading, text, status }) {
  return (
    <>
      <FilterToMap data={ statusList } condition={ s => s.type === status } render={( i, k ) => 
        <Box key={ k } bg={ i.color } p={ 2 } rounded='sm'>
          <HStack>
            <i.icon color='white' fontSize='18px' />
            <HeadingSC color='white' fontSize='md'>{ heading }</HeadingSC>
          </HStack>
          <TextSC fontSize='sm' color='white'>{ text }</TextSC>
        </Box>
      }/>
    </>
  );
}