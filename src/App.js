import './App.css';
import FilteredList from './FilteredList';

function App() {
  const productList = [
    {name: "Baguette", description: "a traditional French Bread", price: 4.25, type: "Bread", location: "Made In-House", popularity: 10, image: "./assets/BAGUETTE_0.jpeg", favorite: false},
    {name: "Sourdough Stick", description: "a mild sourdough crafted with our 20 yr. old starter, white flour and a hint of our house-milled whole wheat", price: 4.10, type: "Bread", location: "Sourced Locally", popularity: 7, image: "./assets/UNSEEDED BAGUETTE_0.jpeg", favorite: false},
    {name: "Durum Round", description: "a rustic Italian style bread made with mostly durum wheat; full of large holes and lots of flavor", price: 5.35, type: "Bread", location: "Imported", popularity: 11, image: "./assets/DURUM ROUND_0.jpeg", favorite: false},
    {name: "Country Pan Loaf", description: "a classic rustic sourdough highlighting our house-milled whole wheat and rye flour", price: 9.75, type: "Bread", location: "Sourced Locally", popularity: 5, image: "./assets/COUNTRY PAN.jpeg", favorite: false},
    {name: "Pumpkin Seed Bread", description: "a savory bread made with pumpkin puree, seeds and sesame seeds", price: 7.65, type: "Bread", location: "Made In-House", popularity: 14, image: "./assets/PUMPKIN SEED.jpeg", favorite: false},
    {name: "Olive Batard", description: "a classic savory bread with Kalamata & Morrocan oil cured olives", price: 7.85, type: "Bread", location: "Sourced Locally", popularity: 2, image: "./assets/OLIVE BATARD_0.jpeg", favorite: false},
    {name: "VT Cheddar Cheese Bread", description: "a savory mild sourdough studded with chunks of cheddar cheese", price: 7.75, type: "Bread", location: "Made In-House", popularity: 1, image: "./assets/CHEESE BREAD_0.jpeg", favorite: false},
    {name: "Walnut Raisin Batard", description: "a dense, crusty sourdough made with our house-milled whole wheat and rye flour, packed with toasted walnuts and raisins", price: 8.35, type: "Bread", location: "Sourced Locally", popularity: 6, image: "./assets/WALNUT RAISIN_0.jpeg", favorite: false},
    {name: "Multigrain Round", description: "a dense, hearty sourdough made with our house-milled whole wheat and rye flours, packed with flavor and fiber", price: 4.25, type: "Bread", location: "Imported", popularity: 15, image: "./assets/MULTIGRAIN ROUND_0.jpeg", favorite: false},
    {name: "Salted Butter", description: "a classic salted spread", price: 1.25, type: "Butter", location: "Made In-House", popularity: 16, image: "./assets/salted butter.jpg", favorite: false},
    {name: "Whipped Butter", description: "a light spread with our salted butter whipped to perfection", price: 2.15, type: "Butter", location: "Made In-House", popularity: 8, image: "./assets/whipped butter.jpg", favorite: false},
    {name: "Honey Margarine", description: "a mild margarine incorporated with local wildflower honey", price: 2.25, type: "Butter", location: "Made In-House", popularity: 4, image: "./assets/Honey-Butter-blog-2.jpg", favorite: false},
    {name: "Maple Butter", description: "a sweet spread made with with traditional Vermont maple syrup", price: 2.35, type: "Butter", location: "Imported", popularity: 9, image: "./assets/maple butter.png", favorite: false},
    {name: "Apple Margarine", description: "a fruity twist on our mild margarine, made with Granny Smith and Honeycrisp puree", price: 4.85, type: "Butter", location: "Made In-House", popularity: 13, image: "./assets/Instant-Pot-Apple-Butter-The-Live-In-Kitchen-4.jpg", favorite: false},
    {name: "Pesto Parmesan Butter", description: "a savory spread made with house carrot-top pesto and parmesan",price: 4.25, type: "Butter", location: "Imported", popularity: 3, image: "./assets/square-pesto-butter-on-marble-tray-735x735.jpg", favorite: false},
    {name: "Garlic Herb Margarine", description: "a rich spread made with an assortment of herbs and roasted garlic", price: 3.35, type: "Butter", location: "Sourced Locally", popularity: 12, image: "./assets/Garlic-Herb-Butter-Recipe-Square.jpg", favorite: false},
  ]

  return (
    <div className="App">
      <div className="header">
        <img src="./assets/nice-toasted-bread-free-vector.jpg" height={180}/>
        <div>
          <p className="title">Bread & Butter</p>
          <p className="subtitle">BAKE SHOP</p>
        </div>
      </div>
      <div className="body">
        <FilteredList list={productList} />
      </div>
    </div>
  );
}

export default App;
