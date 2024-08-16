import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

//Props = read-only properties that are shared between components. 
//A parent component can send data to a child comp <Component key=value>

//propTypes = a mechanism that ensures that the passed value is the correct datatype. 
//age: PropTypes.number

//defaultProps = default values for props in case they are not passed from the parent component 
//name: "Guest"


//conditional rendering = allows you to control what gets rendered in your application based on certain conditions 
//(show, hide, or change components)

function App() {
  const fruits = [{id: 1, name: 'apple', calories: 95},
    {id: 2, name: 'orange', calories: 45},
    {id: 3, name: 'banana', calories: 105},
    {id: 4, name: 'coconut', calories: 159},
    {id: 5,name: 'pineapple', calories: 37}]

    const vege = [{id: 6, name: 'potato', calories: 110},
      {id: 7, name: 'celery', calories: 15},
      {id: 8, name: 'carrots', calories: 25},
      {id: 9, name: 'corn', calories: 63},
      {id: 10,name: 'brocoli', calories: 50}]

  return(
    <>
      <Header></Header> 
      <Food></Food>
      <Footer></Footer>
      <Card></Card>
      <Button></Button>
      <Student name="SpongeBob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name='Sandy' age={27} isStudent={true}></Student>
      <Student></Student>
      <UserGreeting isLoggedIn={true} userName="Emily"></UserGreeting>
      {fruits.length>0 ?<List items = {fruits} category='Fruits'></List> : null}
      {vege.length>0 ?<List items = {vege} category='Vegetables'></List> : null}
    </>
  );
}

export default App
