import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import ProductTable from "./ProductTable";
import Modal from "./Modal";
import ProductForm from "./ProductForm";

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [createData, setCreateData] = useState({
    productName: "",
    productLink: "",
    productQuantity: 1,
    orderStatus: "Pending",
  });
  const [updateProduct, setUpdateProduct] = useState({});
  const [createPromise, setCreatePromise] = useState({
    pending: false,
    data: null,
    error: false,
  });

  function createNewProduct() {
    setCreatePromise({ pending: true, data: null, error: false });

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("New product created:", data);
        setShowCreateModal(false);
        setCreatePromise({ pending: false, data: data, error: false });
      })
      .catch((err) => {
        console.error("Error creating product:", err);
        setCreatePromise({ pending: false, data: null, error: err });
      });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <Navbar onNewClick={() => setShowCreateModal(true)} />
        <ProductTable
          onNotesClick={() => setShowNotesModal(true)}
          onEditClick={() => setShowEditModal(true)}
        />

        <Modal
          show={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          heading="Create New Product"
          onSubmitClick={createNewProduct}
        >
          <ProductForm
            value={createData}
            onChange={(obj) => {
            setCreateData(obj);
            }}
          />
          
        </Modal>

        <Modal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          heading="Update the Product"
        >
          <ProductForm />
        </Modal>

        <Modal
          show={showNotesModal}
          onClose={() => setShowNotesModal(false)}
          heading="Additional Notes"
        >
          <textarea
            type="textbox"
            placeholder="write additional infromation related to orders"
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>
        </Modal>
      </div>
    </>
  );
}

export default App;
