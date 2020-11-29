import React, { useEffect, useRef, useContext} from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context"

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log("AuthContext check", authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // const timeout = setTimeout(() => {
    //     alert('save data to cloud');
    // }, 5000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js]", "cleanup work in useEffect");
      // clearTimeout(timeout)
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect 2nd");
    return () => {
      console.log("[Cockpit.js]", "cleanup work in useEffect 2nd");
    };
  });

  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.personsLength < 2) assignedClasses.push(classes.red);
  if (props.personsLength < 1) assignedClasses.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h3>{props.projectTitle}</h3>
      <p className={assignedClasses.join(" ")}>This is working.</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>

      {<button onClick={authContext.login}>Login</button>}
      {/* <AuthContext.Consumer>{(context) => <button onClick={context.login}>Login</button>}</AuthContext.Consumer> */}
      {/* <button onClick={props.login}>Login</button> */}
      {/* <button onClick={() => props.switchNameHandler('bijay')}>switch name</button> */}
    </div>
  );
};

export default React.memo(cockpit);
