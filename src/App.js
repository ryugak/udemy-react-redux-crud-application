import React from 'react';


export default class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <label htmlFor="うまぴょい">うまぴょい</label>
        <input type="text" onChange={(() => {console.log("うまぴょい")})}></input>
      </React.Fragment>
    )
  }
}

