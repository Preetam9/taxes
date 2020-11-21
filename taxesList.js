import React, {Component}from 'react';
import {BrowserRouter as Router,Link,NewLink,Prompt,Redirect} from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlertBar from '../components/Alertbar'
import {handleAddtaxes} from '../action/addtaxesAction'
import taxesMaster from './taxesMaster';
import './../App.css'

// import HSNMaster from './HSNMaster';
// import HSNMaster from './HSNMaster';

import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import { styled } from '@material-ui/core';

import Modal from '@material-ui/core/Modal';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
 
class taxesList extends Component {

    constructor(props){
        super(props)
        this.state = {}
        this.handleAddtaxes = this.handleAddtaxes.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            error: null,
            isLoaded: false,
            isAddModelOpen:false,
            items: []
            // response: {}
          };
    }


    componentDidMount() {
        // fetch("http://localhost:3001/HSNCodes")
        // fetch("http://2rk3y.mocklab.io/json/1")
        // fetch("http://parchi.randr-it-solutions.com/getHSNCodes.php")
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // fetch("https://run.mocky.io/v3/a12b55e7-e608-402f-820c-32de2eb50a35")
        // https://run.mocky.io/v3/51220119-de22-49ef-a5a9-1a090a0b981e
        const taxesUrl="http://6ey81.mocklab.io/thing/8"
         fetch(taxesUrl)
         
         
          .then(res => res.json())
          .then(
            result => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            error => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
          );
      }

   

    handleAddtaxes(e){
      e.preventDefault();
      console.log('handleAddtaxes')
        // Prevent default behavior
        //const data = new FormData(e.target);
        // Access FormData fields with `data.get(fieldName)`
        //var username=data.get('username');
        //var password=data.get('password');
        //this.props.handleLogin({"username":username,"password":password},this.props.history)
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps')
        //this.setState(nextProps.login);
    }

    handleOpen(e){
      console.log('Handle to Open')
      this.setState({isAddModelOpen:true})
    };
  
    handleClose(e){
      console.log('Handle to Close')
      this.setState({isAddModelOpen:false})
    };

    handleDeleteItem(itemid){
      const {items} = this.state;
      this.setState({
        items:items.filter(item =>item.id !== itemid)
      })
    }
    
    //   const hsnUrl = "http://56543.mocklab.io/thing/1/handleDeleteItem"
    //   const formData = new FormData();
    //   formData.append('itemid', itemid);
  
    //   const options = {
    //     method: 'POST',
    //     body: formData
    //   }

    //   fetch(hsnUrl, options)
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         this.setState({
    //           isLoaded: true,
    //           items: result,
    //           respone : result,
    //           items: items.filter(item =>item.id !== itemid)
    //         });
    //       },
    //       (error) => {
    //         this.setState({isLoaded: true,
    //           error: error});
    //       }
    //     )
    // }

    

    
    render() {      
        const { error, isLoaded, items } = this.state;

        if (error) {
          return <div>Error: {this.error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
              console.log(this.state.items);
              const body = (
                <div className="jss67" style={{opacity: 1, transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',  top: '70%', left: '70%', transform: 'translate(50%, 450%)', maxWidth:'50%'}}>
                   {/* Test Hello... */}
                   <taxesMaster/>
                </div>
              );
       return(
            <span>
                <br/><br/>
                <div className="row justify-content-center">
                        <div className="col col-10">
                            <h3>Taxes</h3>
                        </div>
                </div>
                <br/><br/>
                <div className="row justify-content-center">
                    <div className="col col-md-4 col-11">
                        {/* <div className="row">
                            <div className="col col-12" style={{background:'#28B463'}}><b>Login</b></div>
                        </div> */}
                        <div className="row">
                        <div className="col col-12" style={{textAlign:'left', boxShadow: '0 4px 8px 0 rgba(28,32,36,.2)'}}>
                        <AlertBar/>
                            <br/>

                            
                            
                            {items.map(item => (
                              
                                <CardContent key={item.id}>
                                 
                                   <Card >
                                        <div><Typography className="taxname">
                                           <br/><b>taxname:</b> &nbsp; {item.taxname} 
                                            <span className="iconButton">
                                               <IconButton onClick={() => this.handleDeleteItem(item.id)}>
                                                 <DeleteIcon ></DeleteIcon>&nbsp;
                                               </IconButton>
                                            
                                               <IconButton onClick={() => this.handleEditItem(item.id)}>
                                                 <EditIcon></EditIcon>
                                               </IconButton></span>
                                        </Typography> </div>
                                        <br/>
                                         <div><Typography className="taxperc">
                                           <br/><b>taxperc:</b> &nbsp; {item.taxperc} 
                                            <span className="iconButton">
                                               <IconButton onClick={() => this.handleDeleteItem(item.id)}>
                                                 <DeleteIcon ></DeleteIcon>&nbsp;
                                               </IconButton>
                                            
                                               <IconButton onClick={() => this.handlEditItem(item.id)}>
                                                 <EditIcon></EditIcon>
                                               </IconButton></span>
                                        </Typography> </div>
                                       
                                          <br/>




                                          <br/>
                                        <Typography>
                                           <b>description:&nbsp; </b>
                                           <span >{item.description}</span>
                                        </Typography><br/>
                                    </Card>
                                    
                                </CardContent>         
                            ))}
                          
                                <div style={{minWidth:'50%', textAlign:'left'}}>
                                  <Button type="button" onClick={this.handleOpen}>
                                    Add Tax Record
                                    </Button>
                                  <Modal
                                    open={this.state.isAddModelOpen}
                                    onClose={this.handleClose}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                  >

                                  <div className="jss67" style={{opacity: 1, transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',  top: '70%', left: '70%', transform: 'translate(50%, 10%)', maxWidth:'50%', maxHeight:'490px'}}>
                                    <taxesMaster/>
                                  </div>
                                  </Modal>
                                </div>
                    
                            <br/>
                        </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <br/><br/><br/><br/>
                <br/><br/><br/>
                </span>               
            )
        
        }
    }
}
function mapStateToProps(state){
    return {login:state.login};
  }

export default connect(mapStateToProps,{handleAddtaxes})(withRouter(taxesList));
