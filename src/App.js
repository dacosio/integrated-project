import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc,
  query,
  orderBy,
  getCountFromServer,
} from "firebase/firestore";
import { Pagination } from "./components/base/Button/Pagination";
import { Page } from "./components/base/Button/Page";
import { db } from "./config/firebaseConfig";

class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.data().title;
    this.author = data.data().author;

    const date = new Date(data.data().date);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    this.date = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  toString() {
    return `${this.id} :: ${this.title} :: ${this.author}`;
  }
}

function App() {
  const resultNumberPerPage = 5;
  const pageNumberPerGroup = 5;
  const [resultNumber, setResultNumber] = useState();
  const [currentRownum, setCurrentRownum] = useState(0);
  const [results, setResults] = useState([]);
  const [title, setTitle] = useState("Title");
  const [author, setAuthor] = useState("Salamat Po");

  const collectionRef = collection(db, "posts");

  const inputTitleHandler = (event) => {
    setTitle(event.target.value.trim());
  };

  const inputAuthorHandler = (event) => {
    setAuthor(event.target.value.trim());
  };

  const addDataHandler = () => {
    addDoc(collectionRef, {
      title: title,
      author: author,
      date: Date.now(),
    })
      .then(() => {
        console.log("Data added.");

        setPage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteDataHandler = (id) => {
    const docRef = doc(db, "posts", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Data deleted.");

        setPage();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setPage = async () => {
    setResultNumber((await getCountFromServer(collectionRef)).data().count);

    const _query = query(collectionRef, orderBy("date", "desc"));

    const _results = [];
    (await getDocs(_query)).docs
      .slice(currentRownum, currentRownum + resultNumberPerPage)
      .forEach((data) => {
        _results.push(new Post(data));
      });

    setResults(_results);
  };

  useEffect(() => {
    console.log("Rendered.");
    setPage();
  }, [currentRownum]);

  return (
    <div className="App">
      <input
        type="text"
        onChange={inputTitleHandler}
        value="Title"
        placeholder="title"
      ></input>
      <input
        type="text"
        onChange={inputAuthorHandler}
        value="Salamat Po"
        placeholder="author"
      ></input>
      <button className="btn btn-primary" onClick={addDataHandler}>
        Add
      </button>
      <Page
        results={results}
        columnList={["ID", "Title", "Author", "Date"]}
        onDelete={deleteDataHandler}
      ></Page>
      <Pagination
        resultNumber={resultNumber}
        resultNumberPerPage={resultNumberPerPage}
        pageNumberPerGroup={pageNumberPerGroup}
        sendRownum={(rownum) => setCurrentRownum(rownum)}
      ></Pagination>
    </div>
  );
}

export default App;
