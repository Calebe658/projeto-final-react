
const UserGreeting = ({
    isLoggedIn,
    nomeDaGeladeira
}) => {

    return (
        <div>
            {
                isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>
            }

            <h1>
                {nomeDaGeladeira}
            </h1>
        </div>
    );
}

export default UserGreeting
