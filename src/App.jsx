import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import ProductTable from "./ProductTable";
import Modal from "./Modal";

function App() {
  useEffect(() => {
    main();
  }, []);

  function main() {
    console.log("hiiiiiii");
  }

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(true);

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
          <input
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-2 border rounded-md"
          ></input>
        </Modal>

        <Modal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          heading="Update the Product"
        >
          <input
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-2 border rounded-md"
          ></input>
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
