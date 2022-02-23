import { Menu } from "@chakra-ui/react";
import FeatureBtn from "pages/index/temp/project_temp/features/feature_temp/Features.btn";
import FeatureLst from "redux/index/bindings/Features.del";

export default function Features({ project, index }) {
  return (
    <>
      <Menu autoSelect={ false }>
        <FeatureBtn />
        <FeatureLst index={ index } project={ project } />
      </Menu>
    </>
  );
}