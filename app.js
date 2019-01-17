class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onGroceryListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onGroceryListItemClick.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryItems={['Cucumbers', 'Kale']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

