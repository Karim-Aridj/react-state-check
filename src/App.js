import './App.css';
import React from 'react'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Person :{
        FullName:"Abdelkarim Aridj",
        Bio:"I am learning Full Stack Dev",
        Profession:"Senior SEO Specialist",
        imgSrc:"./Assets/abdelkarim-aridj.jpg"
      },
      show: true,
      count:0
    };
  }
  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1}),1000)
    
  }
  render() {
    return (
      <div className="App" style={{backgroundColor:'#FFFF', width:'100%', height:'100vh'}}>
        <button className = "button-85"  style={{marginTop:"2em", marginBottom:"2em"}}onClick={()=>this.setState({show:!this.state.show})} >Show or Hide profile</button>
        <div style={{color:"black",fontWeight:"normal",textAlign:"center"}}>
You have spent <span style={{color:"PURPLE",fontWeight:"bolder"}} >{this.state.count} seconds </span>Checking my profile.</div>
            {this.state.show?
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"10px",width:"20em",height:"27em",margin:"auto",backgroundColor:" #eae7da  ",marginTop:"30px"}}>
            <img src={this.state.Person.imgSrc} style={{width:"8em", height:"8em", border:'solid 5px' ,borderRadius:"50%"}} alt="profile" />
            <h1 style={{color:"#7f17e8 "}} >{this.state.Person.FullName}</h1>
            <h4 style={{color:"#000"}}>{this.state.Person.Bio}</h4>
            <h2 style={{color:"#212121", fontSize:'1em'}}>{this.state.Person.Profession}</h2>
        </div>
        :null
        }

      </div>
    );
  }
}

export default App;
