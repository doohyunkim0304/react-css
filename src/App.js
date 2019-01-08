import React, { Component ,Fragment} from 'react';
import "./App.css"

class App extends Component {
  render() {
    return (
    <Fragment>
<button className=" button">Hello</button>
<button className="button button--sucess">Hello</button>
<button className="button button--danger">Hello</button>
    </Fragment>
    )
  }
}

const Button = ({ danger }) => (
  <button className={danger? "button button--danger" : "button button--success"}>Hello</button> 
)


export default App;
