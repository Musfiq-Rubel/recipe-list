import React, { Component } from 'react';
import './form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            foodName:'',
            image:'',
            ingredients:''
        }
        this.state = this.initialState;
    }

    onChangeHandler = event =>{
        this.setState({
            [event.target.name] : event.target.value
        });
        console.log(event.target.value);
        
    }

    onClickHandler = event =>{
        event.preventDefault();
        this.props.addHandler(this.state)
       this.refs.myForm.reset();

 }
  

  
    render() { 
       
        return(
            <form 
                style={{display:this.props.styles}}
                ref="myForm" className="form-control-group">
                <label>Food Name</label>
                <input 
                   onChange={this.onChangeHandler}
                   type="text" 
                   name="foodName" 
                   placeholder="Food Name" 
                   className="form-control"/>
   
                <label>Food Image Url</label>
                <input 
                   onChange={this.onChangeHandler}
                   type="text" 
                   name="image" 
                   placeholder="(optional)Food Image Url" 
                   className="form-control"/>
   
                <label>Ingredients</label>
                <textarea 
                  onChange={this.onChangeHandler}
                  rows="4" 
                  cols="20" 
                  name="ingredients" 
                  placeholder="Ingredient"
                  className="form-control"/>
               
               
                <button 
                   onClick={this.onClickHandler}
                   className="btn btn-info coral-background">Add new Recipe</button>
                  
            </form>
            
        );
    }
}
 




export default Form;