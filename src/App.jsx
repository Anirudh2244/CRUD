import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import ProductTable from "./ProductTable";
import Modal from "./Modal";
import ProductForm from "./ProductForm";
import { BarLoader, ClipLoader } from "react-spinners";

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [createData, setCreateData] = useState({
    productName: "",
    productLink: "",
    productQuantity: 1,
    productDate: new Date().toISOString().split("T")[0],
    orderStatus: "loading",
  });

  const [activeProduct, setactiveProduct] = useState({});

  const [createPromise, setCreatePromise] = useState({
    loading: false,
    data: null,
    error: false,
  });

  const [productsPromise, setProductsPromise] = useState({
    loading: false,
    data: null,
    error: false,
  });

  // GET API CALL TO FETCH THE PRODUCT DATA

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    setProductsPromise({
      loading: true,
      data: productsPromise.data,
      error: false,
    });

    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Product data reeceived:", data);
        setShowCreateModal(false);
        setProductsPromise({ data, loading: false, error: false });
      })
      .catch((err) => {
        console.error("Error creating product:", err);
        setProductsPromise({ loading: false, data: null, error: err });
      });
  }

  // POST API CALL TO CREATE NEW PRODUCT

  function createNewProduct() {
    setCreatePromise({ loading: true, data: null, error: false });

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
        setCreatePromise({ loading: false, data: data, error: false });
        getProducts(); // Refresh table as soon after Post call completion
      })
      .catch((err) => {
        console.error("Error creating product:", err);
        setCreatePromise({ loading: false, data: null, error: err });
      });
  }

  // Edit/Update API CALL

  function updateProduct() {
    setUpdatePromise({ loading: true, data: null, error: false });

    fetch("http://localhost:3000/products/:id", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product Updated:", data);
        setShowCreateModal(false);
        setCreatePromise({ loading: false, data: data, error: false });
        getProducts(); // Refresh table as soon after Post call completion
      })
      .catch((err) => {
        console.error("Error creating product:", err);
        setCreatePromise({ loading: false, data: null, error: err });
      });
  }

  // DELETE FUNCTION

  function deleteProduct(id) {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        getProducts(); // refresh table after deletion
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
      });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        {/* NAVBAR */}
        <Navbar onNewClick={() => setShowCreateModal(true)} />
        <div className="h-24 w-full"></div>

        {productsPromise.loading ? <BarLoader width={"80%"} /> : null}

        <ProductTable
          onNotesClick={() => setShowNotesModal(true)}
          onEditClick={(product) => {
            setactiveProduct(product);
            setShowEditModal(true);
          }}
          onDeleteClick={deleteProduct}
          products={productsPromise?.data || []}
        />

        {/* NEW PRODUCT MODAL AND FORM */}
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

          <div className="flex justify-between items-center mt-6 gap-2">
            <div>
              {createPromise.error ? (
                <span className="error">Soemthing went wrong .. </span>
              ) : null}
              {createPromise.loading && <span>Processing...</span>}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={() => {
                  createNewProduct();
                  getProducts();
                }}
                className="px-4 py-2 rounded text-white bg-blue-700 hover:bg-blue-800 hover w-20"
              >
                {createPromise.loading ? (
                  <ClipLoader color={"white"} size={20} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </Modal>

        {/* EDIT/ UPDATE PRODUCT MODAL AND FORM */}
        <Modal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          heading="Update the Product"
        >
          <ProductForm
            value={activeProduct}
            onChange={(obj) => setactiveProduct(obj)} ////////
          />

          <div className="flex justify-end mt-6 gap-2">
            <button
              onClick={() => setShowEditModal(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Close
            </button>
            <button
              onClick={activeProduct}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </Modal>

        {/* ADDITIONAL NOTES MODAL */}
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
