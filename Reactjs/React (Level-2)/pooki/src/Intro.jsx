//Intro.jsx
function Intro({userName,textColor,bgColor}){
    let styles={color:textColor,backgroundColor:bgColor};
    return(
    <h1 style={styles}>Hello, {userName}</h1>
    )
}
export default Intro;