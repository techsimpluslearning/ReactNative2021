import React from "react";

// const LogginFormHooks = () => {
//   const [username, setUsername] = React.useState("");
//   const [pass, setPass] = React.useState("");

//   return (
//     <div>
//       <h2>Login Your Account</h2>
//       <input
//         style={Styles.textInput}
//         value={username}
//         onChange={(event) => setUsername(event.target.value)}
//         id="username"
//         type="text"
//       />
//       <br />
//       <br />
//       <input
//         value={pass}
//         onChange={(event) => setPass(event.target.value)}
//         style={Styles.textInput}
//         type="text"
//         id="password"
//       />
//       <br />
//       <br />
//       <button style={Styles.loginButton}>Login</button>
//     </div>
//   );
// };

// const LogginFormHooks = () => {
//   const [values, setValues] = React.useState({
//     username: "",
//     pass: "",
//   });

//   const handleUsername = (event) => {
//     const value = event.target.value;
//     setValues({ username: value });
//   };

//   const handlePass = (event) => {
//     const value = event.target.value;
//     setValues({ pass: value });
//   };

//   return (
//     <div>
//       <h2>Login Your Account</h2>
//       <input
//         style={Styles.textInput}
//         value={values.username}
//         onChange={(event) => handleUsername(event)}
//         id="username"
//         type="text"
//       />
//       <br />
//       <br />
//       <input
//         value={values.pass}
//         onChange={(event) => handlePass(event)}
//         style={Styles.textInput}
//         type="text"
//         id="password"
//       />
//       <br />
//       <br />
//       <button style={Styles.loginButton}>Login</button>
//     </div>
//   );
// };

const LogginFormHooks = () => {
  const [values, setValues] = React.useState({
    username: "",
    pass: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const Id = event.target.id;
    setValues({
      ...values,
      [Id]: value,
    });
  };

  return (
    <div>
      <h2>Login Your Account</h2>
      <input
        style={Styles.textInput}
        value={values.username}
        onChange={(event) => handleChange(event)}
        id="username"
        type="text"
      />
      <br />
      <br />
      <input
        value={values.pass}
        onChange={(event) => handleChange(event)}
        style={Styles.textInput}
        type="text"
        id="pass"
      />
      <br />
      <br />
      <button style={Styles.loginButton}>Login</button>
    </div>
  );
};

const Styles = {
  loginButton: {
    width: "100px",
    height: "30px",
    borderRadius: "10px",
    backgroundColor: "#00365A",
    border: "none",
    color: "white",
  },
  textInput: { width: "300px", height: "30px", borderRadius: "10px" },
};

export default LogginFormHooks;
