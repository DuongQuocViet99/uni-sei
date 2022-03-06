import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import Map from "render/Map";

export default function TabsS({ children, tabs }) {
  return (
    <>
      <Tabs variant='unstyled' isFitted>
        <TabList border='2px' rounded='sm'>
          <Map data={ tabs } render={( i, k ) => 
            <Tab 
              key={ k }
              fontSize='xl'
              _active={{ bg: 'sei.gray' }}
              _focus={{ outline: 'none' }}
              _selected={{ color: 'sei.red', bg: 'sei.gray' }}
            > { i } </Tab>
          }/>
        </TabList>
        <TabPanels> { children } </TabPanels>
      </Tabs>
    </>
  );
}