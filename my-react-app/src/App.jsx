import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './button.jsx'
import Student from './Student.jsx'


//Props = read-only properties that are shared between components. 
//A parent component can send data to a child comp <Component key=value>

//propTypes = a mechanism that ensures that the passed value is the correct datatype. 
//age: PropTypes.number

//defaultProps = default values for props in case they are not passed from the parent component 
//name: "Guest"

function App() {
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
    </>
  );
}

export default App
