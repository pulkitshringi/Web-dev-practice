// Paragraph.jsx
export default function Paragraph(){
    return (
        <p onDoubleClick={(ev)=>{console.log(ev);console.log("you double clicked :)")}}>A paragprah.</p>
    )
}