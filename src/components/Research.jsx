import pic1 from './Research/Images/Research.webp';
import "./Research/style.css";

function Research() {
    return (
      <>
      <div className="container sec" > 
        <div className="right">
            <img src={pic1} alt="world life" id="SecImages"></img>
        </div>

        <div className="left">
            <h3 id="SecHeading">Capgemini Research Institute</h3>
            <p id="SecPara">The Capgemini Research Institute is our #1 ranked global think tank.</p>
            <button className="btn btn-outline-dark" id="SecButton">Read More </button>
        </div>
        
    </div>
  
      </>
    );
  }
  
  export default Research;