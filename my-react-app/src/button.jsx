function Button(){

    const styles = {
        backgroundColor: "hsl(200,100%,50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(<button style={styles}>Click me</button>); //this is a inline style (not great for complex styling)
}

export default Button;


//Exporting CSS in three ways:

//Module Way: return<button className = {styles.button}>Click me</button> (dont need to worry about naming conflicts, must make
//deicated folder for the element, make file named button.module.css and export and import styles from './')

//External Way: return<button className = "button">Click me</button> ('button' comes from index.css)

//Inline style: is above
