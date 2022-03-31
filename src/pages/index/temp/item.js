import Name from "redux/index/bindings/ren";
import { TSDatetime } from "components/Text";

export default function Item({ index, project }) {
  return (
    <>
      <Name index={ index } project={ project } />
      <TSDatetime>
        { project.timecreate.split(' ')[0] }
      </TSDatetime>
    </>
  );
}