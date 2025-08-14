import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import ProductTable from "./ProductTable";
import Modal from "./Modal";
import ProductForm from "./ProductForm";
import { ClipLoader } from "react-spinners";

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

  const [productsPromise, setProductPromise] = useState({
    pending: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    setProductPromise({ pending: true, data: null, error: false });

    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Product data reeceived:", data);
        setShowCreateModal(false);
        setProductPromise({ data });
      })
      .catch((err) => {
        console.error("Error creating product:", err);
        setProductPromise({ pending: false, data: null, error: err });
      });
  }

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
        >
          <ProductForm
            value={createData}
            onChange={(obj) => {
              setCreateData(obj);
            }}
          />
          {createPromise.pending && <span>Loading...</span>}
          <div className="flex justify-end mt-6 gap-2">
            <button
              onClick={() => setShowCreateModal(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Close
            </button>
            <button
              onClick={createNewProduct}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-blue-600"
            >
              {createPromise.pending ? (
                <ClipLoader color={"blue"} size={20} />
              ) : (
                "Submit"
              )}
            </button>
            {createPromise.error ? (
              <p className="error">Soemthing went wrong .. </p>
            ) : null}
          </div>
        </Modal>

        <Modal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          heading="Update the Product"
        >
          <ProductForm />

          <div className="flex justify-end mt-6 gap-2">
            <button
              onClick={() => setShowCreateModal(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Close
            </button>
            <button
              onClick={updateProduct}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
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
          <div className="flex justify-end mt-6 gap-2">
            <button
              onClick={() => setShowCreateModal(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Close
            </button>
            <button
              onClick={createNewProduct}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
