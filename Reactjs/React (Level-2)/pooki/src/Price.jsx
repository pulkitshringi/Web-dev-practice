// Price.jsx
export default function Price({index}){
    let newPrice=["2000","3000","4000","1000"];
    let oldPrice=["3000","4000","5000","2000"];
    let divStyle={
        backgroundColor:"#e0c367",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
    };
    return(
<div style={divStyle}>
        <span style={{textDecoration:"line-through"}}>{oldPrice[index]}</span> &nbsp; <span><b>{newPrice[index]}</b></span>
        </div>
)
}