import { useState } from 'react';
import {adminValidation} from '../util/validation';
import AdminPanel from './AdminPanel';
import './adminPanel_login.css';

export default function AdminPanel_login(){

    const [isAdminLogin , setIsAdminLogin] = useState(false);
    const [adminError , setAdminError] = useState({});
    const [haveError , setHaveError] = useState(false);
    const [admin , setAdmin] = useState({username: '' , password: ''});

    const handleChange = (e) => {
        const {name , value} = e.target;

        setAdmin((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        const error = adminValidation(admin.username , admin.password);

        setAdminError(error);

        if(Object.keys(error).length === 0){
            setIsAdminLogin(true);
            setHaveError(false);
        }else{
            setIsAdminLogin(false);
            setHaveError(true);
        }
    };

    const handleKeyDown= (e) => {
        if(e.key === 'Enter'){
            handleSubmit();
        }
    };

    return (<>
        <div className="admin-login-panel-box">
            {!isAdminLogin ? (
                <div className="form-box">
                    <h1>LAKME WEAR <span>ADMIN</span></h1>
                    <hr />
                    <div className='input-field-box'>
                        <p>Username : </p>
                        <input 
                            type="text" 
                            name='username'
                            value={admin.username}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder='Admin name or email'/>
                    </div>
                    <div className="error-box">
                        <small className={haveError ? 'have-error' : ''}>{adminError.usernameError}</small>
                    </div>

                    <div className='input-field-box'>
                        <p>Password : </p>
                        <input 
                            type="password" 
                            name='password'
                            value={admin.password}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder='Admin password'/>
                    </div>
                    <div className='error-box'>
                        <small className={haveError ? 'have-error' : ''}>{adminError.passwordError}</small>
                    </div>
                    <button
                        className="admin-submit-btn"
                        onClick={handleSubmit} >
                            Login
                    </button>
                </div>
            ) : 
                <AdminPanel/>
            }
        </div>
    </>);
}
