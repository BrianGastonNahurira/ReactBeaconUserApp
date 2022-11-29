import "../Designs/itemcards.css";
import house from "../Assets/house.jpeg";
import { Button } from "@mui/material";
const itemcards = ()=>{
    return(
        <>
        <div className="item_ctr">
        <div className="_item_card">
            <img src={house}
            className="_icimg"
            />
        <div className="_icdes" >
            <h1 className="ictitle">Peters sea side Apartments</h1>
            <span className="ic_dst">500 meters from center</span>
            <span className="ic_free">Free airport and taxi</span>
            <span className="ic_st">Studio apartment with air coditioning</span>
            <span className="ic_bth">1 bathroom, full bed </span>
            <span className="ic_canc">Free cancellation</span>
            <span className="canc_subopt">You can cancel later so lock in this great price today!</span>
        </div> 
        <div className="_icdetails">
            <div className="ic_ratingd">
                <span>Excellent</span>
                <button className="_r_btn">8.9</button>
            </div>
            <div className="ic_detailstxt">
                <span>$400</span>
                <span>Includes taxes and fees</span>
                <button className="_abtn">See Availability</button>
            </div>
        </div>  
        </div>
        </div>
        </>
    );
}
export default itemcards;