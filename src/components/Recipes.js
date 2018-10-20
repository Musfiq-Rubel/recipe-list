import React, { Component } from 'react';
import Recipe from './Recipe';



class Recipes extends Component {
    constructor(props) {
        super(props);

        this.state={
            search:''
        }
       this.updateSearch = this.updateSearch.bind(this); 
    }

    updateSearch = event =>{
      this.setState({
          search:event.target.value.substr(0,20)
      })
    }
    render() { 
         let filterRecipes = this.props.recipes.filter(recipe =>{
            return recipe.foodName.toLowerCase().
              indexOf(this.state.search.toLowerCase()) !== -1
         })

        return ( 
            <div>
                <input 
                value={this.state.search}
                onChange={this.updateSearch}
                placeholder="Search Recipe ..."
                className="my-2"
                type="text"></input>
                {filterRecipes.map((recipe,index) =>{
                   return (
                      <Recipe 
                     
                      foodEditHandler={this.props.foodEditHandler}
                      ingredientsEditHandler={this.props.ingredientsEditHandler}
                      delHandler={() =>this.props.delHandler(index)}
                       recipe={recipe}
                       index = {index}
                      
                       />
                   )
                   
                })}
            </div>
         );
    }
}
 
export default Recipes ;