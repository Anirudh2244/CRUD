import React, { useEffect, useState } from "react";

function ProductForm(props) {
  const [productName, setProductName] = useState(
    props.value?.productName || ""
  );
  const [productLink, setProductLink] = useState(
    props.value?.productLink || ""
  );
  const [productQuantity, setProductQuantity] = useState(
    props.value?.productQuantity || 1
  );
  const [orderStatus, setOrderStatus] = useState(
    props.value?.productStatus || "Pending"
  );

  useEffect(() => {
    if (props.onChange) {
      props.onChange({
        productName,
        productLink,
        productQuantity,
        orderStatus,
      });
    }
  }, [productName, productLink, productQuantity, orderStatus]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm">Product Name</label>
          <input
            type="text"
            value={props.value?.productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="text-sm">Product Link</label>
          <input
            type="text"
            value={props.value?.productLink}
            onChange={(e) => setProductLink(e.target.value)}
            placeholder="Enter product link"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="text-sm">Quantity</label>
          <input
            type="number"
            value={props.value?.productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            min="1"
            placeholder="Enter quantity"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="text-sm">Date</label>
          <input
            type="date"
            value={new Date().toISOString().split("T")[0]}
            readonly
            className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="text-sm">Status</label>
          <select
            className="w-full px-4 py-2 border rounded-md pr-10"
            value={props.value?.orderStatus}
            onChange={(e) => setOrderStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </select>
        </div>
        
      </div>
    </div>
  );
}

export default ProductForm;
