import Baner from "./HomeMain/Baner";
import BeyondGrocery from "./HomeMain/BeyondGrocery";
import SaveBk from "./HomeMain/Save";
import YourStore from "./HomeMain/YourStore";

export default function MainCenter() {
  return (
    <div>
      <YourStore />
      <BeyondGrocery />
      <SaveBk />
      <Baner />

      <div className="pl-62 p-14 flex justify-center items-center flex-col bg-gray-50">
        
          <img className="w-6" src="./home.svg" alt="" />
          <p className="pt-4">
            <span className="text-2xl font-bold">There's more to explore</span>
          </p>
          <p className="pb-5">
            <span className="text-sm">
              Shop 52 stores (and counting) in Warren.
            </span>
          </p>
          <button className="bg-green-500 cursor-pointer rounded-full text-white font-bold pl-4 pr-4 pt-1.5 pb-1.5">View all stores</button>
        </div>
        
    </div>
  );
}
