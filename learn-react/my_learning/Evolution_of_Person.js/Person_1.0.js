// import './Person.css'

// the function name should start with lower case as it is best practise

// this is a component
// can execute single js expression or call a function in {} inside jsx to make components more dynamics
// this is stateless, presentational, dump component.
const person = (props) => {
    return(
        // <p>Hello, I'm a person and i'm {Math.floor( (Math.random() * 30) + 16 )} years old.</p>
        <div className = 'Person' style = {style}>
            <p onClick = {props.click}>Hello, I'm {props.name} and i'm {props.age} years old.</p>

            {/* children is a reserved word, it is to recieve whatever we send write in between <Person> ..here.. </Person> */}
            <p> {props.children}</p>

            <input type="text" onChange = {props.changed}  placeholder={props.name}/>
            
        </div>
        

    )
}

export default person;