import { Signup } from "@/components/Signup";
import { Background } from "@/components/Background";

function Index() {
  return (
    <div className=" flex w-full h-full">
      <div className="w-1/2 h-screen flex justify-center items-center">
        <Signup />
      </div>
      <div className="w-1/2 h-screen">
        <Background />
      </div>
    </div>
  );
}
export default Index;
