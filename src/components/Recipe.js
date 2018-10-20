import React, { Component } from 'react';
import './recipe.css';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            foodIisEditable: false,
            ingredientsIsEditable:false
        }
    }

    onKeyPressHandler = (e) =>{
        if(e.key === 'Enter'){
            this.setState({
                foodIisEditable:false,
                ingredientsIsEditable:false
            })
        }
    }

    

    render() { 
         let fName= ( this.state.foodIisEditable === true) ?
                   <input 
                   name="foodName"
                   ref="foodName"
                   onKeyPress={this.onKeyPressHandler}
                   onChange={(e) => this.props.foodEditHandler(this.props.index , e.target.value  )}
                    type="text" value={this.props.recipe.foodName}/>
                   :  <span>{this.props.recipe.foodName}</span>  ;

          let ingredients = (this.state.ingredientsIsEditable === true) ?
          
                    <textarea 
                    rows="4"
                    cols="35"
                    name="ingredients"
                    ref="ingredients"
                    onKeyPress={this.onKeyPressHandler}
                    onChange={(e) => this.props.ingredientsEditHandler(this.props.index , e.target.value )} 
                    value={this.props.recipe.ingredients}></textarea>
                    :  <p>{this.props.recipe.ingredients} </p>
                       

        return ( 
             <div id="wrapper" >
                <div id="recipe" >
                    <div id="title">
                    
                    {fName}
                    <span 
                      onClick={this.props.delHandler}
                      className="btn-edt-del">
                    <i
                     className="fas fa-trash-alt" ></i>
                    
                    </span>
                    <span 
                    onClick={() => this.setState({foodIisEditable:true})} 
                    className="btn-edt-del">
                    <i className="fas fa-edit"></i>
                    
                    </span>
                    </div>
                    <div id="recipe-body">
                    <div id="img-box" >
                    
                    </div>
                    <div id="ingredients">
                    <p>{ingredients}</p> 
                    </div>
                    </div>
                    <div id="footer">
                    <span 
                    onClick={() => this.setState({ingredientsIsEditable:true})}
                    className="btn-edt-del">
                    <i className="fas fa-edit"></i>
                    
                    </span>
                    </div>

                </div>
              
                
         </div>
         );
    }
}
 
export default Recipe;