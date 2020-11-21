import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import { Router, Switch, Route } from "react-router-dom";
// import {handleLogin} from '../action/loginAction'
// import {addHSNAction} from '../action/addHSNAction';
// import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';

import AlertBar from '../components/Alertbar'
import { RootRef } from '@material-ui/core';
//import {Router} from react-router-dom;



export  default class  taxesMaster extends Component {

    

    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange(event) {
        
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        console.log(event.target.name)

        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);
            let input = {};
            input["taxname"] = "";
            input["taxperc"]="";
            input["description"] = "";
            this.setState({ input: input });
            alert('Tax is Added');
            console.log(this.state.taxname);
            console.log(this.state.taxperc);
            console.log(this.state.description);
        }
        this.setState({
            taxname:'',
            taxperc:'',
            description:''
        })
        
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

         if (!input["taxname"]) {
            isValid = false;
            errors["taxname"] = "Please enter your taxname.";
        } else if (input["taxname"].length !== 4) {
            isValid = false;
            errors["taxname"] = "Please enter proper input";
        }

        if (!input["taxper"]) {
            isValid = false;
            errors["taxper"] = "Please enter your Percentage .";
        }

        if (typeof input["taxper"] !== "undefined") {

            var pattern = new RegExp(`^-?[0-9]*$`);
            if (!pattern.test(input["taxper"])) {
                isValid = false;
                errors["taxper"] = "Please enter only decimal values.";
            } else if (input["taxper"].length !== 10) {
                isValid = false;
                errors["taxper"] = "Please enter Proper Percentage Value .";
            }
        }

        if (!input["description"]) {
            isValid = false;
            errors["description"] = "Please enter your Description.";
        } else if (input["description"].length !== 10) {
            isValid = false;
            errors["description"] = "Please enter 10 characters";
        }

        this.setState({
            errors: errors
        });
 const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({taxname: this.state.input.taxname,taxperc:this.state.input.taxperc,description:this.state.input.description })
    };
    fetch('http://148.72.208.43:5010/taxtype', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
console.log(this.state.input);
        return isValid;
    }

   

    render() 
    {
        

       return(

<Route>
           <span>
               <br/><br/>
               <div className="row">
                    <div className="col col-10">
                        <div style={{marginTop:'5%'}}>
                        <h3>Taxes Master</h3>
                        </div>
                    </div>
               </div>
               <br/><br/>
               <div className="row" >
                   <div className="col col-11"  >
                       {/* <div className="row">
                           <div className="col col-12" style={{background:'#28B463'}}><b></b></div>
                       </div> */}
                       <div className="row">
                       <div className="col col-12" style={{textAlign:'left', boxShadow: '0 4px 8px 0 rgba(28,32,36,.2)'}}>
                        <br/>
                       

                        <form  onSubmit={this.handleSubmit}  noValidate autoComplete="on">


                            


                           <TextField label="taxname" variant="outlined" name="taxname"
                           value={this.state.input.taxname}
                           onChange={this.handleChange} style={{minWidth:'90%'}} required maxLength='4'/><br/>
                            <span style={{ color: 'red' }} >{this.state.errors.taxname}</span>
                              <br/>
                           <TextField label="taxperc" variant="outlined" name="taxperc"  
                           value={this.state.input.taxperc}
                           onChange={this.handleChange} style={{minWidth:'90%'}} required maxLength="10" /><br/>
                            <span style={{ color: 'red' }} >{this.state.errors.taxperc}</span>
                              <br/>


                            <TextField id="outlined-basic" label="description" variant="outlined" name="description"
                            value={this.state.input.description}
                            onChange={this.handleChange}
                           style={{minWidth:'90%'}} required maxLength='10'/><br></br>
                            <span style={{ color: 'red' }} >{this.state.errors.description}</span>
                           <br/> 

                            <div style={{minWidth:'50%', textAlign:'left'}}>
                            <button type="button" onClick={this.handleSubmit}>
                              Add 
                             
                            </button></div>
                            
                        </form>
                        <br/>
                    </div>
                       </div>
                   </div>
               </div>
               <br/><br/>
               <br/><br/><br/><br/>
               <br/><br/><br/>
            </span>       
            </Route>
                    
      )
     }
}


function mapStateToProps(state){
    return {taxesMaster:state.taxesMaster};
  }
//export default connect(mapStateToProps,{})(withRouter( taxesMaster ));

// export default TaxesMaster;


