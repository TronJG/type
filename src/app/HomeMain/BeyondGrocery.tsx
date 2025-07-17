export default function BeyondGrocery() {
  interface Store {
    id: number;
    name: string;
    offer: string;
  }

  const stores: Store[] = [
    { id: 1, name: "Walgreens", offer: "In-store prices" },
    { id: 2, name: "Lowe's", offer: "In-store prices" },
    { id: 3, name: "sams club", offer: "In-store prices" },
    { id: 4, name: "meijer", offer: "By 10:45am" },
    { id: 5, name: "ALDI", offer: "In-store prices" },
    { id: 6, name: "Giant Eagle", offer: "In-store prices" },
    { id: 7, name: "Family Dollar", offer: "By 10:45am" },
    { id: 8, name: "Target", offer: "$15 off" },
    { id: 9, name: "Gordon Food...", offer: "By 10:45am" },
    { id: 10, name: "Gordon Food...", offer: "$15 off" },
    { id: 11, name: "Gordon Food...", offer: "In-store prices" },
  ];
  return (
    <div className="pl-62 p-4">
      <p className="text-2xl font-bold ">Beyond Grocery</p>
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
                  typeof item.offer==='string'&& item.offer.includes("$") ||
                  item.offer.includes("In-store prices")
                    ? "bg-amber-300"
                    : "text-gray-500"
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
