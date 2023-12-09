import React from "react";
import './Rank.css';
const Rank = () => {
    return(
        <div>
            <div className="rankText">
                {'Dayo, your current rank is ...'}
            </div>
            <div className="rank">
                {'#1'}
            </div>
        </div>
    );
}
export default Rank;