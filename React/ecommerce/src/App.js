import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
function App() {
  return (
    <div>
      <h1>My E-Commerce</h1>

      <Button text="Home" />
      <Button text="Products" />
      <Button text="Cart" />
      <Button text="Login" />
      <Button text="Buy Now" />
    </div>
  );
}

export default App;
