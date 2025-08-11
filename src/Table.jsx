import React, { useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "SOLARA Blendkwik Portable Blender",
      amazonLink:
        "https://www.amazon.in/dp/B0D1MZ7Z5W?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
      quantity: 2,
      date: "2025-08-10",
      status: "Done",
    },
    {
      id: 2,
      name: "SOLARA Electric Kettle 1.5 Litre",
      amazonLink:
        "https://www.amazon.in/dp/B0CT5WN7Q7?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
      quantity: 1,
      date: "2025-08-09",
      status: "Pending",
    },
    {
      id: 3,
      name: "SOLARA Cast Iron Tawa",
      amazonLink:
        "https://www.amazon.in/dp/B0CLPB7CTY?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
      quantity: 3,
      date: "2025-08-08",
      status: "Pending",
    },
    {
      id: 3,
      name: "Reginald Men Sunscreen SPF",
      amazonLink:
        "https://www.amazon.in/dp/B0DT49ZWR5?ref=ppx_yo2ov_dt_b_fed_asin_title",
      quantity: 3,
      date: "2025-08-08",
      status: "Done",
    },
    {
      id: 3,
      name: "Mantra Herbal De-Tan Scrub",
      amazonLink:
        "https://www.amazon.in/dp/B0B77C24NH?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
      quantity: 3,
      date: "2025-08-08",
      status: "Pending",
    },
    {
      id: 3,
      name: "Simpl Living Nylon Fabric Belt",
      amazonLink:
        "https://www.amazon.in/dp/B0DXFJ9JMQ?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1&psc=1",
      quantity: 3,
      date: "2025-08-08",
      status: "Done",
    },
  ]);

  const statusBtn = (id) => {
    console.log("Status:", id);
  };

  const handleEdit = (id) => {
    console.log("Edit product:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete product:", id);
  };

  return (
    <div className="w-4/5 mt-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Amazon Link</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={p.id} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2">
                  <a
                    href={p.amazonLink}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                </td>
                <td className="px-4 py-2">{p.quantity}</td>
                <td className="px-4 py-2">{p.date}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => statusBtn(p.id)}
                    className={`min-w-[80px] px-3 py-1 rounded-full text-white text-sm text-center ${
                      p.status === "Done" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {p.status}
                  </button>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(p.id)}
                    className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
