import React , {Component} from 'react';
import ReactDOM from 'react-dom';
class Login extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            Email : '',
            Password : '',
        };
        
    }
    myChangeHandler = (event) => {
        let Email = event.state.Email;
        let Password = event.state.Password;
        this.setState({[Email] : Password});
    }
    render(){
       
        return(
            <form onSubmit ={this.myChangeHandler}>
            <div>
            <div>
                <p>Email :</p>
               <input type="text" name="Email" value={this.state.Email} onChange={this.myChangeHandler}/>
            </div>
            <div><p>Password :</p> 
            <input type="password" name="password" value={this.state.Password} onChange={this.myChangeHandler}/></div>
            </div>
         <div>
             <input type="submit" value="submit"/>
         </div>
         </form>
        );
    }

}
export default Login;
