import PropTypes from 'prop-types'

function List(props){
    /*
    const fruits = [{id: 1, name: 'apple', calories: 95},
        {id: 2, name: 'orange', calories: 45},
        {id: 3, name: 'banana', calories: 105},
        {id: 4, name: 'coconut', calories: 159},
        {id: 5,name: 'pineapple', calories: 37}]*/

    //fruits.sort((a,b)=> a.name.localeCompare(b.name)); //will sort objects by name properties ALPHABETICAL
    //fruits.sort((a,b)=> a.calories - b.calories); //sorts by numbers NUMERICAL

    //const lowCalFruits = fruits.filter(fruit => fruit.calories<100); //gives you a new list with fruits less than 100 cal

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item =>  //.map creates a new array; the thing inside the () is called a parameter
        <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li> //fruit is one individual items from the list fruits; react wants a unique key for each item
    );

    return(<><h3 className="list-category">{category}</h3><ol className="list-items">{listItems}</ol></>); //<ul></ul> is unordered and <ol></ol> is ordered list
}

List.defaultProps = {
    category: 'Category',
    items: []
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number, name:PropTypes.string, calories:PropTypes.number}))
}

export default List