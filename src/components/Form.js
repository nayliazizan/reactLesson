import { useState } from "react";

function Form() {
    const intialValue = {
        name: "",
        email: "",
        username: "",
        password: ""
    }

    const [formData, setFormData] = useState(intialValue);

    const hnadleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, undefined, 2));
    }

    return (
        <form onSubmit={hnadleSubmit}>
            <h2>User Registration Form</h2>
            <label>Name: </label>
            <input 
                type="text" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <br/>
            <label>Email: </label>
            <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <br/>
            <label>Username: </label>
            <input 
                type="text" 
                value={formData.username} 
                onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
            <br/>
            <label>Password: </label>
            <input 
                type="password" 
                value={formData.password} 
                onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <button type="submit">Submit</button>
            <p>{JSON.stringify(formData)}</p>
        </form>
    );
}

export default Form;