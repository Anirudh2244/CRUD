import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  useEffect(() => {
    main();
  }, []);

  function main() {
    console.log("hiiiiiii");

    // API fetch calls
    // fetch("http://localhost:3000/products")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));

    // async function getData() {
    //   try {
    //     let res = await fetch("http://localhost:3000/products");
    //     let data = await res.json();
    //     console.log(data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // getData();

    // const resquestInIt = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name: 'New Item' }),
    // };

    // fetch('http://localhost:3000/products', resquestInIt)
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err));

    // async function postData() {
    //   try {
    //     let res = await fetch('http://localhost:3000/products', resquestInIt);
    //     let data = await res.json();
    //     console.log(data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // postData()

    // const putInIt = {
    //   method: 'PUT',
    //   headers: {'content-type': 'application/json'},
    //   body: JSON.stringify({ name: 'Updated Item', price: 100 })
    // }

    // fetch('http://localhost:3000/products/1', putInIt)
    // .then(res=> res.json())
    // .then(data=> console.log(data))
    // .catch(err=> console.log(err))

    // async function putData(){
    //   try{
    //     let res = await fetch('http://localhost:3000/products/1', putInIt);
    //     let data = await res.json();
    //     console.log(data);
    //   } catch(err){
    //     console.log(err)
    //   }
    // }
    // putData()

    // let patched =  {
    //     method: 'PATCH',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ price: 120 })
    //   }

    //   fetch('http://localhost:3000/products/1', patched)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err));

    // async function patchData() {
    //   try {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', patched)
    //     ;
    //     const data = await res.json();
    //     console.log(data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }

    // fetch('http://localhost:3000/products/3255', {
    //     method: 'DELETE'
    //   })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err));

    // async function deleteData() {
    //   try {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    //       method: 'DELETE'
    //     });
    //     const data = await res.json();
    //     console.log(data);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }

    // deleteData()
  }

  return (
    <>
      <div className="flex">
        <Navbar />
      </div>
    </>
  );
}

export default App;
