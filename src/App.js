import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import NewsList from "./components/news_list/newsList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <NewsList />
    </React.Fragment>
  );
}

export default App;
