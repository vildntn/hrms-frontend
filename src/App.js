import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Navi from "./layouts/NavBar/Navi";
import Dashboard from "./layouts/Dashboard";
// import { Container } from "semantic-ui-react";
// import Footer from "./layouts/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <div className="ui two column grid">
        <div className="column">

      <Navi />
        </div>
        <div className="sixteen wide column" style={{marginTop:'3em'}}>
          <Dashboard />

        </div>
     
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
