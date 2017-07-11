var casual = true
// STATELESS COMPONENT FAST

// FAST  TRACK COMPONENT 1 
//COMPONENT NAME SHOULD START FROM CAPITAL LETTER 
function Component(){
    return(
        <div className="blue">RENDER COMPONENT 1</div>
    )
} 
// FAST  TRACK COMPONENT 2 
function Component(){
    return(
        <div className="pink">RENDER COMPONENT 2</div>
    )
} 

// CREATE CLASS COMPONENT 3 
var Component4 = React.createClasss({
   render : function(){
    return(
        <div className="pink">RENDER COMPONENT 3</div>
    )}
})