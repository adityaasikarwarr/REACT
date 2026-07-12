function List(props) {
  //   const fruits = [
  //     { id: 1, name: "Apple", calories: 95 },
  //     { id: 2, name: "Banana", calories: 105 },
  //     { id: 3, name: "Cherry", calories: 50 },
  //     { id: 4, name: "Date", calories: 277 },
  //     { id: 5, name: "Elderberry", calories: 145 },
  //   ];

  //   fruits.sort((a , b) => a.name.localeCompare(b.name)); it sorts the fruits in alphabetical order based on their names. The localeCompare method is used to compare the names of the fruits, which ensures that the sorting takes into account the correct alphabetical order for different languages and character sets.

  // fruits.sort((a ,b) => b.name.localeCompare(a.name)); // it sorts the fruits in reverse alphabetical order based on their names. The localeCompare method is used to compare the names of the fruits, which ensures that the sorting takes into account the correct alphabetical order for different languages and character sets.

  // fruits.sort((a,b) => a.calories - b.calories); // it sorts the fruits in ascending order based on their calorie content. The comparison function subtracts the calorie value of fruit b from that of fruit a, resulting in a positive, negative, or zero value that determines the order of the fruits in the sorted array.

  // fruits.sort((a, b) => b.calories - a.calories); // it sorts the fruits in descending order based on their calorie content. The comparison function subtracts the calorie value of fruit a from that of fruit b, resulting in a positive, negative, or zero value that determines the order of the fruits in the sorted array.

  // const lowCal = fruits.filter((fruit) => fruit.calories < 100); // it filters the fruits array to create a new array called lowCal that contains only the fruits with a calorie content less than 100. The filter method iterates through each fruit in the original array and applies the provided condition (fruit.calories < 100) to determine whether to include the fruit in the new array.

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b> calories
    </li>
  ));

  return (
    <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}

List.defaultProps = {
  items: [],
  category: "Items",
};

export default List;
