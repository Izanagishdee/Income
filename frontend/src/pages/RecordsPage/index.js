import { DashHeader } from "@/components/DashboardHeader";
import RecordsPage from "@/components/RecordsPage";
import { useState } from "react";

function Index() {
  const [show, setShow] = useState(false);
  const showHandle = () => {
    setShow(!show);
    console.log("sdada");
  };
  const handleC = () => {
    setShow(false);
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-100">
      <DashHeader showHandle={showHandle} handleC={handleC} show={show} />
      <RecordsPage />
    </div>
  );
}
export default Index;
