import PropTypes from 'prop-types'

function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.userName}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;

    if(props.isLoggedIn){
        return welcomeMessage
    }
    else{
        return loginPrompt
    }

    //or return(props.isLoggedIn ?<h2>Welcome{props.userName}</h2> :<h2>Please log in to continue</h2>)
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: 'Guest'
}

export default UserGreeting