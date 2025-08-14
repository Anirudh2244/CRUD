import React, { useState } from "react";

const ProductTable = (props) => {
  // const [products, setProducts] = useState([]);

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
    <div className="w-4/5 mt-24">
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
            {props.products.map((p, index) => (
              <tr key={p.id} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{p.productName}</td>
                <td className="px-4 py-2">
                  <a
                    href={p.productLink}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                </td>
                <td className="px-4 py-2">{p.productQuantity}</td>
                <td className="px-4 py-2">{p.productDate}</td>

                <td className="px-4 py-2">
                  <button
                    onClick={() => statusBtn(p.id)}
                    className={`min-w-[80px] px-3 py-1 rounded-full text-white text-sm text-center ${
                      p.orderStatus === "Done" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {p.orderStatus}
                  </button>
                </td>

                <td className="px-4 py-2 flex gap-2 items-center justify-center">
                  <button
                    onClick={() => props.onEditClick()}
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
                  <button
                    onClick={() => props.onNotesClick()}
                    className="px-3 py-1 text-white rounded bg-blue-600 hover:bg-blue-700"
                  >
                    Notes
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
