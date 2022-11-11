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
    {name: "Salted Butter", description: "a classic salted spread", price: 1.25, glutenFree: true, dairyFree: false, nutFree: true},
    {name: "Whipped Butter", description: "a light spread with our salted butter whipped to perfection", price: 2.00, glutenFree: true, dairyFree: false, nutFree: true},
    {name: "Honey Margarine", description: "a mild margarine incorporated with local wildflower honey", price: 2.25, glutenFree: true, dairyFree: true, nutFree: true},
    {name: "Maple Butter", description: "a sweet spread made with with traditional Vermont maple syrup", price: 2.35, glutenFree: true, dairyFree: false, nutFree: true},
    {name: "Apple Margarine", description: "a fruity twist on our mild margarine, made with Granny Smith and Honeycrisp puree", price: 4.85, glutenFree: true, dairyFree: true, nutFree: true},
    {name: "Pesto Parmesan Butter", description: "a savory spread made with house carrot-top pesto and parmesan",price: 4.25, glutenFree: true, dairyFree: false, nutFree: true},
    {name: "Garlic Herb Margarine", description: "a rich spread made with an assortment of herbs and roasted garlic", price: 3.35, glutenFree: true, dairyFree: true, nutFree: true},
  ]

  return (
    <div className="App">
      <div className="header">

      </div>
      <div className="body">
        <div className="items">
          <div className="filters">

          </div>
          <div className="cards">
            <FilteredList list={productList} />
          </div>
        </div>
        <div className="cart">

        </div>
      </div>
    </div>
  );
}

export default App;
