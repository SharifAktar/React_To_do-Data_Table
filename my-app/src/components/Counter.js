import React, { Component } from 'react'

class Counter extends Component {
constructor (props) {
    super(props)
    this.state ={
        count:0
    }
}
    
incrementFive(){
    this.increment ()
    this.increment ()
    this.increment ()
    this.increment ()
    this.increment ()
}

increment (){   
    this.setState ((prevState, props) =>({
    count: prevState.count + 1

    }))
    console.log(this.state.count)
    
}
  
    render() {
        return (
            <span className ="count">
                <p> Count me -{this.state.count} </p>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </span>
        )
    }
}

export default Counter
