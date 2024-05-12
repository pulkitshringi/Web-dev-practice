export default function List({features}){
    return(
        <p style={features[0]=="first"?{backgroundColor:"pink"}:{backgroundColor:"red"}}>{features.map((f)=><li>{f}</li>)}</p>
    )
}     