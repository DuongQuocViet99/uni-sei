import { Menu } from "@chakra-ui/react";
import FeatureBtn from "pages/index/temp/project_temp/features/feature_temp/Features.btn";
import FeatureLst from "redux/index/Bindings/Feature.act";

export default function Features({ project }) {
  return (
    <>
      <Menu autoSelect={ false }>
        <FeatureBtn />
        <FeatureLst project={ project } />
      </Menu>
    </>
  );
}