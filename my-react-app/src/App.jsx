import List from "./List.jsx";
function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Cherry", calories: 50 },
    { id: 4, name: "Date", calories: 277 },
    { id: 5, name: "Elderberry", calories: 145 },
  ];

  const vegetables = [
    { id: 1, name: "Carrot", calories: 41 },
    { id: 2, name: "Broccoli", calories: 34 },
    { id: 3, name: "Spinach", calories: 23 },
    { id: 4, name: "Potato", calories: 77 },
    { id: 5, name: "Tomato", calories: 18 },
  ];

  return (
    <>
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
    </>
  );
}
export default App;

