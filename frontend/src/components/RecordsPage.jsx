import { RecordLeft } from "./RecordLeft";
import { RecordRight } from "./RecordRight";

const RecordsPage = () => {
  return (
    <div className="w-screen h-screen gap-[24px]  flex items-center justify-center">
      <RecordLeft />
      <RecordRight />
    </div>
  );
};

export default RecordsPage;
