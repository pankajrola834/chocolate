import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='fullForm'>
            <form action="action_page.php" method="post">
                <div className='h1Login'>
                    <h1>Login</h1>
                </div>
                <div>
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                        <button  className='loginbtn' onClick={()=>{
                            navigate('/')
                        }}>Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember"/> Remember me
                        </label>
                </div>

                <div class="container" style={{backgroundColor:"#f1f1f1"}}>
                    <button type="button" class="cancelbtn" onClick={()=>{
                        navigate('/')
                    }}>Cancel</button>
                </div>
        </form >
        </div>
        </>
    )

}

export default LoginPage;