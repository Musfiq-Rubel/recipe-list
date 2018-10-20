import React, { Component } from 'react';
import {BrowserRouter , Route, Switch} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './components/Form';
import Recipes from  './components/Recipes';
import Navbar from './components/Navbar';

class App extends Component {
    
  constructor(){
    super()
    this.state ={
      recipes:[
        {
          foodName : 'Best grill Salmon',
          ingredients:'Soy Sauce ,Olive Oil ,  Fresh Ginger ,Garlic, Dark Brown Sugar',
          image:'./img/salmon.jpg'


        },

        {
          foodName : 'Mexican chicken burger',
          ingredients:' chicken breast, tsp chipotle paste ,lime, juiced, slices cheese, brioche bun, split, ½ avocado,cherry tomatoes, chopped, pickled jalapeño slices, chopped ,½ small garlic clove, finely grated',
          image:'/img/salmon.jpg'
         },

        {
          foodName : 'Frying pan pizza',
          ingredients:'yellow pepper, deseeded and cut into chunks, courgette , thickly sliced,red onion, cut into wedges, 225g self-raising flour,   tbsp olive oil, plus 1 tsp, tbsp fresh tomato pasta sauce',

          

          

          
          image:'./img/salmon.jpg'


        },

        {
          foodName : 'Vegetarian chilli',
          ingredients:'75g/6oz green lentils ,  tbsp sunflower oil ,  large onion, chopped ,cloves garlic, crushed,capsicorn,tsp chilli powder,400g/14oz cans chopped tomatoes',
          image:'./img/salmon.jpg'


        }
      ] ,
    }
     

      
 
      

  
    this.delHandler = this.delHandler.bind(this);
    this.foodEditHandler = this.foodEditHandler.bind(this);
    this.ingredientsEditHandler = this.ingredientsEditHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    
    
  }
 
  




 

  

  addHandler = (recipe) =>{
   
    let recipes = [...this.state.recipes];
    recipes.push(recipe);
    this.setState({
      recipes:recipes
    });
 }


  delHandler = index =>{
    let recipes=[...this.state.recipes];
    recipes.splice(index,1);

    this.setState({
      recipes:recipes
    })
  }

  foodEditHandler= (index, foodName) =>{
    let newRecipes = this.state.recipes.map((recipe,i) =>{
       if(index ===i){
         return{
          ...recipe,
          foodName,
          
         }
       }
       return recipe 
    })
    this.setState({
      recipes:newRecipes
    })
    console.log(index);

    }


    ingredientsEditHandler= (index,  ingredients) =>{
      let newRecipes = this.state.recipes.map((recipe,i) =>{
         if(index ===i){
           return{
            ...recipe,
            
            ingredients
           }
         }
         return recipe 
      })
      this.setState({
        recipes:newRecipes
      })
      console.log(index);
  
      }

  
 


  render() {
    return (
      <div className="App">

    
      <Navbar setStyle={this.setStyle} />

       <Form 
      styles = {this.state.display}
      addHandler= {this.addHandler} setStyle={this.setStyle}  />
     
      <Recipes 
        styles = {this.state.display}
        foodEditHandler={this.foodEditHandler}
        ingredientsEditHandler = {this.ingredientsEditHandler}
        delHandler = {this.delHandler}
        recipes={this.state.recipes}/>

       
       
      </div>
    );
  }
}

export default App;
