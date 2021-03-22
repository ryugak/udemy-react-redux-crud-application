import React from 'react';


// export default class App extends React.Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="うまぴょい">うまぴょい</label>
//         <input type="text" onChange={(() => {console.log("うまぴょい")})}></input>
//       </React.Fragment>
//     )
//   }
// }
const App = () => {
  return(
    <div>
      <Dog/>
      <Dog/>
      <Dog/>
      <Dog/>
      <Dog/>
    </div>
  )
}
const Dog = () => {
  return <div>バウ!!</div>
}

export default App;

