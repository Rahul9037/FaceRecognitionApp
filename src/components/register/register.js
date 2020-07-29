import React,{Component} from 'react';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            name : '',
            email : '',
            password : '',
            errorMessage : ''
        }
    }

    onTextChange = (e) => {
        const { name , value} = e.target;
        this.setState({ [name] : value});
    }

    onSubmit = (e) => {
        fetch('https://facefinderapi.herokuapp.com/register' , { 
            method : 'post',
            headers : { 'Content-Type' : 'application/json'},
            body : JSON.stringify({
                name : this.state.name,
                email : this.state.email,
                password : this.state.password
            })
        })
        .then(resp => resp.json())
        .then(jsonresp  => {
            if(jsonresp.id)
            {
                this.props.loadUser(jsonresp);
                this.props.onRouteChange('home')
            }
            else{
                this.setState({errorMessage : jsonresp})
            }
        })
    }

    render(){
    return (
        <article className="mw6 center br3 pa3 pa4-ns mv3 ba b--black-10 centre shadow-5">
            <main className="pa3 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw8 ph0 mh0 ">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input 
                            className="pa2 input-reset b--black ba bg-transparent hover-white w-100" 
                            type="text" 
                            name="name" 
                            id="name"
                            onChange = {this.onTextChange}  
                            required />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            className="pa2 input-reset b--black ba bg-transparent hover-white w-100" 
                            type="email" 
                            name="email"
                            id="email"
                            onChange = {this.onTextChange}  
                            required />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset b--black ba bg-transparent hover-white w-100" 
                            type="password" 
                            name="password" 
                            id="password"
                            onChange = {this.onTextChange}  
                            required />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                        onClick={this.onSubmit}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register" />
                    </div>
                    { this.state.errorMessage ? <div className="lh-copy mt3">
                        <p style={{color :'red',fontWeight: "bold"}}>{this.state.errorMessage}</p>
                    </div>  : null } 
                </div>
            </main>
        </article>
    )}
}

export default Register;