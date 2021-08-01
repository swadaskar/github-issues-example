import React from "react";
import Button from "./Button";
import {connect} from 'react-redux';

const UpperNav = (props) => {
  const incrementw = () => {
    props.dispatch({type: "INCREMENTW"});
  };
  const increments = () => {
    props.dispatch({ type: "INCREMENTS" });
  };
  const incrementf = () => {
    props.dispatch({ type: "INCREMENTF" });
  };

  return (
    <div className="navbar">
      <div className="left">
        <h3>
          <a href="#">facebook</a>/<a href="#">create-react-app</a>
        </h3>
      </div>
      <div className="right">
        <Button
          text="Watch"
          className="fa fa-eye"
          onClick={incrementw}
          count={props.count}
        />
        <Button
          text="Star"
          className="fa fa-star"
          onClick={increments}
          count={props.counts}
        />
        <Button
          text="Fork"
          className="fa fa-code-fork"
          onClick={incrementf}
          count={props.countf}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count,
  counts: state.counts,
  countf: state.countf
});

export default connect(mapStateToProps)(UpperNav);