import React from 'react';

function App() {
  return React.createElement(
    "div",
    {className:"container"},
    React.createElement("h1",   {className:"h1"}, "안녕하세요 리액트를 실행 시켜 볼게여"),
    React.createElement("p",   {className:"p", style :{backgroundColor: 'blue'}}, "안녕하세요 리액트 입니다.")
  );
}
export default App;
