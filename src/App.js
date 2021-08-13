import "./styles.css";
import Card from "./components/Card";
import ItemList from "./components/ItemsList";

function App() {
  const item1 = {
    author: "Nico chiri",
    title: "RIVER CAMPEON LIBERTADORES 2018",
    date: "9/12/2018",
    description: "Alegría eterna para el pueblo",
    likes: 193,
    isLiked: true
  };

  const item2 = {
    author: "Capitan Merluza",
    title: "MESSI AL PSG",
    date: "11/08/2021",
    description: "Sufre el barcelona",
    likes: 10,
    isLiked: true
  };

  const items = [item1, item2];

  return (
    <div className="App">
      <header className="App-header">
        <ItemList />
      </header>
    </div>
  );
}

export default App;
