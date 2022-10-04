import React,{useState} from 'react';
import '../styles/form.css'
export const Form = ()=>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');


    function onSubmitSimpleForm(event){
        event.preventDefault();
        if(!event.target.name.value && !event.target.email.value){
            return console.log('No Data');
        }
        setName(event.target.name.value);
        setEmail(event.target.email.value)
        console.log(name + email);
        setName('');
        setEmail('');
    }

    function onChange(event){
        if(event.target.name === 'name'){
            setName(event.target.value);
        }else if(event.target.name === 'email'){
            setEmail(event.target.value)
        }  
    }

    return(
        <form className='simpleForm' onSubmit={onSubmitSimpleForm}>
            <div className='formInputs'>
                <label>Name <input 
                placeholder='Enter Your Name'
                onChange={onChange}
                value={name}
                name='name'
                type='text'
                /></label>

                <label>Email <input 
                placeholder='Enter Your Email'
                onChange={onChange}
                value={email}
                name='email'
                type='email'
                /></label>
            </div>
            <div className='submitForm'>
                <input type='submit' value='Send Inquiry'/>
            </div>
            
            
        </form>
    );
}