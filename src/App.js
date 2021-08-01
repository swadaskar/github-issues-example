import "./App.css";
import Header from "./components/Header";
import UpperNav from "./components/UpperNav";
import LowerNav from "./components/LowerNav";
import React, { useState, useRef, useCallback } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import useIssues from "./hooks/useIssues";
import Reducer from "./Reducers/Reducer";

const store = createStore(Reducer);

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  const { issues, hasMore, loading, error } = useIssues(pageNumber);

  const observer = useRef();
  const lastIssueRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          console.log('Reached last')
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      <Header />
      <Provider store={store}>
        <UpperNav />
      </Provider>
      <LowerNav />
      {issues.map((issue, index) => {
        if (issues.length === index + 1) {
          return (
            <div className="issue" ref={lastIssueRef} key={index}>
              <h3>{issue.title} </h3>
              <p>
                #{issue.number} opened by {issue.user.login}
              </p>
            </div>
          );
        } else {
          return (
            <div className="issue" key={index}>
              <h3>{issue.title} </h3>
              <p>
                #{issue.number} opened by {issue.user.login}
              </p>
            </div>
          );
        }
      })}
      <div>{loading && <div className="loader"></div>}</div>
      <div>{error && "Error"}</div>
    </div>
  );
}

export default App;
