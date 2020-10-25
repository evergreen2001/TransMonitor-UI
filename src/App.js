import "./App.css";
import Header from "./components/Header/index";
import SideNav from "./components/SideNav/index";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
function App() {
  return (
   
    <div className>
      <Header />
      <MDBRow>
        <MDBCol lg="2">
          <SideNav />
        </MDBCol>
       
       
      </MDBRow>

    </div>
   

  );
}

export default App;
