import logo from "./logo.svg";
import pic from "./pic.jpg";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <header>
        <div className="container"></div>
        <img className="image" src={pic} alt="pic" />
        <h1 className="name">{props.price}</h1>
        <p className="Description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className="cart-button">Add To Cart</button>
      </header>
    </div>
  );
}

export default App;
