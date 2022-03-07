import { Menu } from "@chakra-ui/react";
import FeatureBtn from "pages/index/temp/comp/action/comp/btn";
import FeatureLst from "redux/index/bindings/Features.del";

export default function Act({ project, index }) {
  return (
    <>
      <Menu autoSelect={ false }>
        <FeatureBtn />
        <FeatureLst index={ index } project={ project } />
      </Menu>
    </>
  );
}