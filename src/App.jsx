import React from "react";
import Header from "./Header";
import Slidebar from "./Slidebar";
import NewsFeed from "./NewFeed/NewsFeed";
import "./App.css";
import Widgets from "./Widgets/Widgets";
import Login from "./Login/Login";
import { useStateValue } from "./Redux/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app-body">
            <div className="app-body-slidebar">
              <Slidebar />
            </div>
            <div className="app-body-newsfeed">
              <NewsFeed />
            </div>
            <div className="widget">
              <Widgets />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
