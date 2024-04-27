//Form.jsx
export default function Form(){
    return (
        <form onSubmit={(ev)=>{ev.preventDefault();console.log("Form Submited");}}>
            <label htmlFor="username">Username : </label>
            <input type="text" id="username"placeholder="Enter Username" />
            <button>Submit</button>
        </form>
    )
}