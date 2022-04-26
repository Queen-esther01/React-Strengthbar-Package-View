import { Strength, PasswordChecker } from 'react-password-strengthbar-ui';
import { useState } from 'react';
import './App.css';

function App() {

    const [password, setPassword] = useState('');

    const handlepassword = (e) => {
        setPassword(e.target.value);
    }

    const getData = (data) =>{
        console.log(data)
    }

    let result = Strength('password')
    //console.log(result)
    

    return (
        <>
            <div className='h-screen bg-sky-50 flex flex-col justify-center items-center'>
                <div className='w-80 md:w-3/5 md:max-w-lg'>
                    <h1 className='text-sky-900 text-center text-xl md:text-3xl mb-5'>@react-password-strengthbar-ui</h1>
                    <input onChange={handlepassword} className='w-full rounded-md shadow py-2 px-4 focus:outline-sky-400'/>
                    <PasswordChecker password={password} strengthData={getData}/>
                </div>
            </div>
        </>
    );
}

export default App;
