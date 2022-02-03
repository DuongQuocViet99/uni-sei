import { Menu } from "@chakra-ui/react";
import MenuBtn from "./FeatureMenu.Btn";
import MenuList from "./FeatureMenu.Lst";

export default function FeatureMenu() {
  return (
    <>
      <Menu autoSelect={ false }>
        <MenuBtn />
        <MenuList />
      </Menu>
    </>
  );
}