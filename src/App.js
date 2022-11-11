import logo from './logo.svg';
import './App.css';

function App() {
  const productList = [
    {name: "Baguette", description: "a traditional French Bread", price: 4.25, glutenFree: false, dairyFree: true, nutFree: true},
    {name: "Sourdough Stick", description: "a mild sourdough crafted with our 20 yr. old starter, white flour and a hint of our house-milled whole wheat", price: 4.10, glutenFree: false, dairyFree: true, nutFree: true},
    {name: "Durum Round", description: "a rustic Italian style bread made with mostly durum wheat; full of large holes and lots of flavor", price: 5.35, glutenFree: false, dairyFree: true, nutFree: true},
    {name: "Country Pan Loaf", description: "a classic rustic sourdough highlighting our house-milled whole wheat and rye flour", price: 9.75, glutenFree: false, dairyFree: true, nutFree: true},
    {name: "Pumpkin Seed Bread", description: "a savory bread made with pumpkin puree, seeds and sesame seeds", price: 7.65, glutenFree: true, dairyFree: true, nutFree: false},
    {name: "Olive Batard", description: "a classic savory bread with Kalamata & Morrocan oil cured olives", price: 7.85, glutenFree: true, dairyFree: true, nutFree: true},
    {name: "Vermont Cheddar Cheese Bread", description: "a savory mild sourdough studded with chunks of cheddar cheese", price: 7.75, glutenFree: false, dairyFree: false, nutFree: true},
    {name: "Walnut Raisin Batard", description: "a dense, crusty sourdough made with our house-milled whole wheat and rye flour, packed with toasted walnuts and raisins", price: 8.35,  glutenFree: false, dairyFree: true, nutFree: false},
    {name: "Multigrain Round", description: "a dense, hearty sourdough made with our house-milled whole wheat and rye flours, packed with flavor and fiber", price: 4.25, glutenFree: false, dairyFree: true, nutFree: true},
    {name: "Salted Butter", price: 1.25, glutenFree: true, dairyFree: false, nutFree: true},
    {name: "Whipped Butter", price: 2.00, glutenFree: true, dairyFree: false, nutFree: true},
    {name: "Honey Margarine", price: 2.25, glutenFree: true, dairyFree: true, nutFree: true},
    {name: "Maple Butter", price: 2.35, glutenFree: true, dairyFree: false, nutFree: true},
    {name: "Apple Margarine", price: 4.85, glutenFree: true, dairyFree: true, nutFree: true},
    {name: "Pesto Parmesan Butter", price: 4.25, glutenFree: true, dairyFree: false, nutFree: true},
    {name: "Garlic Herb Margarine", price: 3.35, glutenFree: true, dairyFree: true, nutFree: true},
  ]

  return (
    <div className="App">
      <header className="App-header">
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
          Learn react
        </a>
      </header>
    </div>
  );
}

export default App;
