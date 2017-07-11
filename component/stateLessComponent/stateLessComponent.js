
// CREATING ELEMENT USING REACT CREATE ELEMENT 
var stateLessExampleComponent2 = React.createClass({
    render: function(){
        return React.createElement('h2',{className:'highlight'},"CREATE USING REACT CREATE ELEMENT")
    }
})
// CREATING A ELEMENT USING THE COMPONENT CLASS WE CAN USE THIS CLASS TO REUSE THIS ELEMENT AGAIN 

// RENDER THIS ELEMENT ON THE DOM 
// CREATING A REACT COMPONENT 
// COMPONENT IS CREATED USING CREATE CLASS METHOD 
// ONE THING EVERU REACT COMPONENT HAVE IS RENDER
// RENDER TELL WHAT TO DISPLAY WHEN COMPONENT DISPLAY
// WE CAN INTIATE THIS STATELESSCOMPONENT TO CREATE THIS CLASS INSATNCE
var stateLessExampleComponent1 = React.createClass({
// RENDER FUNCTION 
        render: function(){
            return <h1 className="highlight-jsx">STATE LESS COMPONENT USING JSX </h1>
        }
});
// WE CAN SIMPLY PASS CLASS NAME AS A TAG INSTEAD OF CREATING ELEMENT
var reactComponentElement = React.createElement(stateLessExampleComponent2)
// REACT ES6 STANDARD DOM RENDER FUNCTIONS
ReactDOM.render(<stateLessExampleComponent2 />,document.getElementById('StateLessComponent3'))
ReactDOM.render(<stateLessExampleComponent1 />,document.getElementById('StateLessComponent2'))

// CREATING REACT CREATE ELEMENT RENDER
ReactDOM.render(reactComponentElement,document.getElementById('StateLessComponent1'))
ReactDOM.render(React.createElement(stateLessExampleComponent2),document.getElementById('StateLessComponent3'))
ReactDOM.render(React.createElement(stateLessExampleComponent1),document.getElementById('StateLessComponent2'))

