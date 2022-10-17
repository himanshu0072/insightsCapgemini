import './StayInformed/style.css';

function StayInformed(){
    return(
        <>
        <div className="StayContainer">
           <div className="leftdiv">
            <h1>Stay Informed</h1>
            <p>Subscribe to have the latest reports from the Capgemini Research Institute delivered direct to your inbox.</p>
           </div>

           <div className="rightdiv">
           <button type="button" class="btn btn-outline-primary">Subscribe<i class="fa-thin fa-arrow-right"></i></button>
           </div>
        </div>

        
        </>
    )
}

export default StayInformed;