import React from 'react';

const App = () => {
  const profiles = [
    {name: "こばやし", age: 20},
    {name: "やまだ", age: 22},
    {}
  ]
  return(
    profiles.map((profile, index) => {
      return <User name={profile.name} age={profile.age} key={index} />
    })
  )
}
const User = (props) => {
  return <div>こんにちは、わたしの名前は{props.name}で、年齢は{props.age}です。</div>
}
User.defaultProps = {
  name: "名無し", age: 18
}
export default App;

