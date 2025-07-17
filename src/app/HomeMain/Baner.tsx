export default function Baner() {

  interface Stores{
    id:number;
    sale:string;
    order:string;
    location:string;
  }

  const stores:Stores[]=[
    {id:1,sale:'$15 off ',order:'order $75+',location:'At Kohls · Expires Oct 8'},
    {id:2,sale:'$10 off ',order:'order $50+',location:'At Sally Beauty · Expires Aug 11'},
  ]
  return (
    <div className="pl-62 pr-6 pb-4 grid grid-cols-2 gap-8">
      {stores.map((item)=>(
        <div key={item.id} className="w-full">
        <div className="flex items-center justify-between pb-2 ">
          <div className="flex">
            <img
              className="bg-amber-200 w-14 rounded-sm my-auto"
              src=""
              alt="./logo.jpg"
            />
            <div className="pl-2">
              <p>
                <span className="text-lg font-bold">{item.sale}</span>
                <span className="font-bold"> {item.order}</span>
              </p>
              <p className="text-xs">{item.location}</p>
            </div>
          </div>
          <div>
            <button className="cursor-pointer bg-gray-100 rounded-full text-sm pl-4 pr-4 p-1">
              Shop
            </button>
          </div>
        </div>
        <img
          className=" rounded-3xl "
          src="./baner.webp"
          alt="./baner.jpg"
        />
      </div>
      ))}
    </div>
  );
}
