import { Background } from "@/components/Background";
import { Login } from "@/components/Login";

function Index() {
  return (
    <div className=" flex w-full h-full">
      <div className="w-1/2 h-screen flex justify-center items-center">
        <Login />
      </div>
      <div className="w-1/2 h-screen">
        <Background />
      </div>
    </div>
  );
}
export default Index;
