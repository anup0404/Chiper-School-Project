//What are props?
//Props is short for properties and they are used to pass data between React components. React’s data flow between components is uni-directional (from parent to child only).

//How do you pass data with props?
//Here is an example of how data can be passed by using props:
/*

class ParentComponent extends Component {    
    render() {    
        return (        
            <ChildComponent name="First Child" />    
        );  
    }
}

const ChildComponent = (props) => {    
    return <p>{props.name}</p>; 
};
*/
//What is state?
//React has another special built-in object called state, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.

//Here is an example showing how to use state:
/*
class Test extends React.Component {    
    constructor() {    
        this.state = {      
            id: 1,      
            name: "test"    
        };  
    }    
    
    render() {    
        return (      
            <div>        
              <p>{this.state.id}</p>        
              <p>{this.state.name}</p>      
            </div>    
        );  
    }
}*/