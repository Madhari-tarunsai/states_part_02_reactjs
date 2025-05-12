import React from "react";
import "./Random.css";

class Random extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: "hardword marks lucky but lucky is not every where",
      color:'#ffffff'
    };
  }
  handlerClick = () => {
    let teluguquotes = [
      "కష్టం లేకుండా విజయాన్ని ఆశించకండి.",
      "అధ్యయం చేయడం వల్లే విజయం సాధ్యం.",
      "పని చేయకపోతే ఫలితం రావడం అసాధ్యం.",
      "ఆలస్యం అంటే అబద్ధం చెప్పినట్లే.",
      "సమయం విలువ తెలుసుకో, అది తిరిగి రాదు.",
      "పని మాటలతో కాదు, కృషితోనే తెలుస్తుంది.",
      "జయానికి మార్గం కష్టం అయినా నడవాలి.",
      "సంకల్పం ఉంటే సాధ్యమే సాధ్యమవుతుంది.",
      "గెలుపు అనేది మన మనసులో మొదలవుతుంది.",
      "పట్టుదల ఉంటే ఏదైనా సాధ్యమే.",
    ];
   const index= Math.floor(Math.random()*teluguquotes.length)
    const Randomcode=teluguquotes[index]
   this.setState({quotes:Randomcode});


   let chars='abcdef123456789'
   let randomcolor='#'
   for (let i=0;i<6;i++){
    const randomColorindex=Math.floor(Math.random()*chars.length)
    randomcolor+=chars[randomColorindex]
   }
   this.setState({color:randomcolor})
  };

  render() {
    return (
      <div className="div1" style={{backgroundColor:this.state.color}}>
        <h1>{this.state.quotes}</h1>
        <button onClick={this.handlerClick}>RandomQuotes</button>
      </div>
    );
  }
}
export default Random;
