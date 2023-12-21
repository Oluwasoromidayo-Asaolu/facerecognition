import React from "react";
import { Tilt } from 'react-next-tilt';
import brain from './Brain.png';


const Logo = () => {
    return(
        <div>
            <Tilt lineGlareEnable={false} spotGlareEnable={false}>
                <div>
                    <img src={brain} alt="logo" />
                </div>
            </Tilt>
        </div>
    );
}
export default Logo;