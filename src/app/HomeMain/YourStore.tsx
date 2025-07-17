export default function YourStore() {
  interface Store {
    id: number;
    name: string;
    offer: string;
  }

  const stores: Store[] = [
    { id: 1, name: "Walgreens", offer: "$5 off" },
    { id: 2, name: "Lowe's", offer: "$15 off" },
    { id: 3, name: "sams club", offer: "By 10:45am" },
    { id: 4, name: "meijer", offer: "By 10:45am" },
    { id: 5, name: "ALDI", offer: "By 10:45am" },
    { id: 6, name: "Giant Eagle", offer: "By 10:45am" },
    { id: 7, name: "Family Dollar", offer: "By 10:45am" },
    { id: 8, name: "Target", offer: "By 10:45am" },
    { id: 9, name: "Gordon Food...", offer: "By 10:45am" },
    { id: 10, name: "Gordon Food...", offer: "By 10:45am" },
  ];
  return (
    <div className="pl-62 p-4">
      <p className="text-2xl font-bold ">Your stores</p>
      <div className="p-2 w-fit flex flex-row space-x-6">
        {stores.map((item) => (
          <div key={item.id}>
            <img
              className="mx-auto w-14 rounded-lg bg-amber-200"
              src=""
              alt="./logo.jpg"
            />
            <div className="flex flex-col ">
              <p className="text-sm pt-2 text-center">{item.name}</p>
              <p
                className={`w-fit text-sm text-center ${
                typeof item.offer==='string'&&  item.offer.includes("$") ? "bg-amber-300" : "text-gray-500"
                }`}
              >
                {item.offer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
