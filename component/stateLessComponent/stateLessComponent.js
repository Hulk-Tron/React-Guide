// CREATING A REACT COMPONENT 
// COMPONENT IS CREATED USING CREATE CLASS METHOD 
// ONE THING EVERU REACT COMPONENT HAVE IS RENDER
// RENDER TELL WHAT TO DISPLAY WHEN COMPONENT DISPLAY
// WE CAN INTIATE THIS STATELESSCOMPONENT
var stateLessExampleComponent = React.createClass({
// RENDER FUNCTION 
        render : function(){
            return <h2 className="highlight-jsx">STATE LESS COMPONENT </h2>;
        }
});
// WE CAN SIMPLY PASS CLASS NAME AS A TAG INSTEAD OF CREATING ELEMENT
ReactDOM.render(<stateLessExampleComponent/>,document.getElementById('StateLessComponent1'))