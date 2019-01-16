var GroceryList = (props) => {

  var onGroceryListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
    <ul>
      <li onClick={onGroceryListItemClick}>{props.groceryItem[0]}</li>
      <li onClick={onGroceryListItemClick}>{props.groceryItem[1]}</li>
    </ul>
  );
};

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryItem={['Cucumbers', 'Kale']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

