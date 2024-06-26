import { useState } from "react";

const Home = () => {

    const [pwd,setPwd] = useState('');
    const [result,setResult] = useState();

    const checkUpper = (password) => {
        for(let i=0;i<password.length;++i){
            if(password[i] === password[i].toUpperCase()){
                return true;
            }
        }
        return false;
    }

    const checkLower = (password) => {
        for(let i=0;i<password.length;++i){
            if(password[i] === password[i].toLowerCase()){
                return true;
            }
        }
        return false;
    }

    const checkNumber = (password) => {
        for(let i=0;i<password.length;++i){
            if(!isNaN(password[i])){
                return true;
            }
        }
        return false;
    }
    const verify = (password) =>{
        if(password.length > 10){
            setResult('Invalid password: Length should be less than 10 characters');
        }
        else if(!checkUpper(password)){
            setResult('Invalid password: Password should have uppercase characters');
        }
        else if(!checkLower(password)){
            setResult('Invalid password: Password should have lowercase characters');
        }
        else if(!checkNumber(password)){
            setResult('Invalid password: Password should have numbers');
        }
        else{
            setResult('Valid password');
        }
    }
    return ( 
        <div className="home">
            <h2>Welcome to password validator!!</h2>
            <form>
                <label>Enter the password to verify:</label>
                <input 
                    type="text"
                    value = {pwd}
                    onChange = {(e)=> setPwd(e.target.value)}
                />
            </form>
            <button onClick={()=>verify(pwd)}>verify</button>
            <p>{result}</p>
        </div>
        
     );
}
 
export default Home;