//Product.jsx
import './Product.css';
import Price from './Price';
function Product({title,index}){
    let description=[["8000 DPI","5 Programmable buttons"],["intutive touch surface","designed for ipad pro"],["smooth screen","designed for samsung"],["wireless mouse","Optical Orientation"]];
    return(
    <div className="Product">
        <h1>{title}</h1>
        <p>{description[index][0]}</p>
        <p>{description[index][1]}</p>
        <Price index={index}/>
    </div>
    )
    }

export default Product; 
