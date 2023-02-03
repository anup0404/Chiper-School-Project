/*Adding Events
React events are written in camelCase syntax:

onClick instead of onclick.

React event handlers are written inside curly braces:*/

//onClick={shoot}  instead of onClick="shoot()".

//React:
//<button onClick={shoot}>Take the Shot!</button>
//HTML:
//<button onclick="shoot()">Take the Shot!</button>

//Example:
//Put the shoot function inside the Football component:

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

//To pass an argument to an event handler, use an arrow function.

//Example:
//Send "Goal!" as a parameter to the shoot function, using arrow function:

function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}
