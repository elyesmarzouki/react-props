
function Profile(props){
    function handleName(e){
        e.preventDefault();
        alert(`${props.fullName}`)
    }
    const styleObject = {color: "red" , textAlign:"center"}
    return(
        <>
        <a href="/" onClick={handleName}>Click Me</a>
        <h1 style={styleObject}>Bonjour, je m'appelle {props.fullName}, je travaille en tant que {props.profession} et voici ma bio :{props.bio}
        {props.children}
        </h1>
        </>
    );
}

export default Profile