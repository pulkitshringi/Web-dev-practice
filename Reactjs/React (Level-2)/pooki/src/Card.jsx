//Card.jsx
import Product from './Product'

function Card(){
    let divStyle={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
    };
    return (
        <div style={divStyle}>
        <Product title="Logitech" index={0}/>
        <Product title="Apple Pencil" index={1}/>
        <Product title="Zebronics" index={2}/> 
        <Product title="Petronics Tool" index={3}/>     
        </div>
    )
}
export default Card;    