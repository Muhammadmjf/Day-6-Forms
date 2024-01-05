import logo from "./logo.svg";
import "./App.css";
import { Formik, Field, Form } from "formik";

function App() {
  const init = {
    username: "Muhammad",
    password: "12345",
  };

  function text(value) {
    console.log(value);
  }
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Formik initialValues={init} onsubmit={text}>
        <Form>
          <div>
            <Field name="username" />
          </div>
          <div>
            <Field name="password" />
          </div>
          <button> Login </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
