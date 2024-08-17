function ButtonTwo(){
    let count = 0;

    const handleClick = (e) => e.target.textContent = 'OUCH!'; 

    /*const handleClick = (name)=>{
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }
        else{
            console.log(`${name} stop clicking me`)
        }
    };

    const handleClick2 = (name)=>{
        console.log(`${name} stop clicking me`)
    }*/

    //return(<button onClick={()=>handleClick2('Emily')}>Click Me</button>); //when I click on the button, do this ()=>
    return(<button onClick= {(e)=>handleClick(e)}>Click Me</button>); //in the event I click, do this ()=>
}

export default ButtonTwo;