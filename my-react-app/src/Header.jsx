

function Header(){
    return(   //can only return a single element but you can put in children elements within
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li> 
                    <li><a href="#">About</a></li> 
                    <li><a href="#">Services</a></li> 
                    <li><a href="#">Contact</a></li> 
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header