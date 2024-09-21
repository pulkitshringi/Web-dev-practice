//Button.jsx
let btnEvent =()=>{ console.log("Button Pressed :)");
}
export default function Button(){
    return (
        <div><button onClick={btnEvent}>Click Me</button></div>
    )
}