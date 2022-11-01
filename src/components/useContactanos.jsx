import { useState } from "react";



const useContactanos = (initalData, onValidate) => {
    

    const [form, setForm] = useState(initalData);

    const [errors, setErrors] = useState({});
    
    console.log(form);
    

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        })
        
        
    };

    
    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.checked 
            
        })
        console.log(e.target.checked);
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = onValidate(form)
        setErrors(err)

        console.log(Object.keys(err).length);

        if(Object.keys(err).length === 0){
           console.log("enviando...")
           setForm(initalData)
        }
    };



    return {form, errors,handleChange, handleSubmit, handleChecked}

}
 
export default useContactanos;