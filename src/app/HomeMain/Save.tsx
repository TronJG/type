export default function SaveBk() {
  interface Stores {
    id:number;
    name: string;
    delivery: string;
    categories:string;
    piece:string;
  }

  const stores:Stores[]=[
    {id:1,name:'ALDI',delivery:'Delivery by 10:45am tomorrow',categories:'Groceries · Produce · Organic',piece:'Low prices'},
    {id:2,name:'Giant Eagle',delivery:'Delivery by 10:45am ',categories:'',piece:'Loyalty savings'},
    {id:3,name:'ALDI Express',delivery:'Delivery by 10:45am tomorrow',categories:'',piece:'Low prices'},
    {id:4,name:'Shop`n Save',delivery:'Delivery by 10:45am tomorrow ',categories:'Groceries · Produce · Organic',piece:'Lots of deals'},
    {id:5,name:'H.P. Nemenz Food Stores',delivery:'Delivery by 10:45am tomorrow ',categories:'Groceries',piece:'Low prices'},
    {id:6,name:'Market District',delivery:'Delivery by 10:45am ',categories:'',piece:'Low prices'},
  ]
  return (
    <div className="pl-62 p-8 w-fit">
      <p className="font-bold text-2xl pb-2">Stores to help you save</p>
      <div className="grid grid-cols-3 gap-6">
        {stores.map((item)=>(
          <div key={item.id} className="flex p-2 border border-gray-200 rounded-xl">
          <img
            className="my-auto w-14 rounded-lg bg-amber-200"
            src=""
            alt="./logo.jpg"
          />
          <div className="pl-4 pr-4">
            <p className="font-bold">{item.name}</p>
            <p>
              <span className={`text-sm ${item.delivery?.includes("Delivery")?'text-green-800':''}`}>{item.delivery}</span>
              <span className="text-sm">·</span>
              <span className="text-sm">3.5 mi</span>
              <span className="text-sm">·</span>
              <span className="text-sm">$</span>
            </p>
            <p>
              <span className="text-sm">{item.categories}</span>
            </p>
            <p>
              <span className="text-sm bg-gray-100">{item.piece}</span>
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
