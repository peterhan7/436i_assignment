import React from "react";
import "../swag.css"


const colorArray = [
"red",
"lightblue",
"pink",
"yellow",
"brown",
"magenta"];



class Swag extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      color: "ROSYBROWN" };

  }


   componentDidMount() {
     let colorPos = 0;
     setInterval(() => {
       if(colorArray.length - 1 > colorPos) {
         this.setState({
           color : colorArray[colorPos]
         });
         colorPos++;
       } else {
         this.setState({
           color : colorArray[colorPos]
         });
         colorPos = 0;
       }
     }, 1000)
   }

  changeColor(e) {
    this.setState({
      color: e.target.value });

  }

  render(){
    const stylesObj = {
      background: this.state.color
    };
    return(
      <div style={stylesObj} className="container">
        
      </div>
    );
  }

}
export default Swag;
