export default function Headline({title,button}){
    return (
        <>
         <h1>{title}</h1>
      <button>{button}</button>
      <p>{title="Hello World"?"description":null}</p>
        </>
    )
}