import React , {Component} from 'react'

class Body extends Component {

    render() {

        this.state = {
            name:"Nabia",
            age:24,
            skills: ['JavaScript', 'Html', 'CSS']
            
        }

        return( 
        <>
        <h1>This is header...</h1>
        <h2>My Info...</h2>
        <p>My name is {this.state.name}</p>
        <p>My age is {this.state.age}</p>
        <h2>My degrees are:</h2>
        {this.state.skills.map((item) => (
                    <>
                        <p>{item}</p>
                    
                    </>
                ))
                }
        </>
        )
    }
}
export default Body; 