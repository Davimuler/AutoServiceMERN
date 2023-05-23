import React from 'react';
import {Typography} from "@mui/material";

const HomePage = () => {
    return (
        <div>
            <Typography style={{marginBottom:"20px"}} variant="h4" align="center">
                About our company
            </Typography>
            <img style={{marginBottom:"20px"}} src={'https://www.mahle.com/global/media/global_news/2023/05-thermal-management/mahle_thermomanagement_mediadownload.jpg'}/>
            <div style={{marginBottom:"20px"}} >
                AutoService recognizes the crucial role of efficient thermal management in enabling efficient e-mobility. They consider heating and cooling in vehicles as an essential technology field for electrification and a core part of their business. According to AutoService, the sales potential for thermal management in e-cars is three times higher than for vehicles with combustion engines. Thermal management is seen as a driver of electrification within AutoService. They anticipate significant market growth for thermal management technologies due to the rise of e-mobility. AutoService expects the market volume for thermal management products to exceed 50 billion euros by 2030, up from around 35 billion euros in 2021. AutoService aims to disproportionately participate in this growth by expanding their status as a systems provider with a focus on energy efficiency and air conditioning.

                AutoService has developed innovative technologies to enhance the cruising range and fast-charging capability of electric vehicles while providing increased comfort. They emphasize that thermal management and electrification are fundamental strategic pillars of the company. With a global footprint, AutoService is one of the largest suppliers of modular and highly efficient thermal management systems. They leverage their expertise in both thermal management and electrification to offer better solutions for battery electric vehicles, hybrids, and conventionally powered vehicles. AutoService aims to enable smaller installation space, higher efficiency and performance, and lower overall costs through their systems expertise.

                In the case of e-cars, AutoService recognizes that key factors influencing customer acceptance depend on thermal management. The service life of the battery, cruising range, drive system performance, and fast-charging capability are all impacted by effective thermal management. Ensuring the correct temperature for each component of the drive system is crucial, as well as providing a comfortable cabin climate. AutoService emphasizes that the interior air conditioning should have minimal impact on the cruising range. This places high demands on the entire system, and the complexity and value of individual components increase significantly. For compact electric vehicles, AutoService expects the value of thermal management components to increase by more than 100 percent compared to internal combustion engine vehicles.

                To address cost, complexity, and efficiency challenges, AutoService has developed a new thermal management module that combines various components into a single unit. This includes a heat exchanger, coolant pumps, condenser, chiller, sensors, and valves. The module saves installation space and engineering effort, resulting in cost savings. Additionally, it improves efficiency, with up to 20 percent more cruising range achievable compared to a pure electric heater architecture. The higher cooling performance also enhances fast-charging capability. AutoService has also developed other system components such as electric fans, air-conditioning compressors, battery cooling plates, and innovative heat pump systems to further enhance thermal management in electric vehicles.

                AutoService's commitment to advancing thermal management is demonstrated through their investment in the MAHLE climatic wind tunnel in Stuttgart. This facility, which has been pioneering mobility for over 85 years, enables realistic, precise, and repeatable measurement and test conditions. It allows for the simulation of various climatic conditions, including fast-charging operations and hydrogen testing.

                Overall, AutoService recognizes the importance of efficient thermal management in realizing efficient e-mobility and considers it a core aspect of their business. They aim to provide innovative solutions that enhance the performance, range, and comfort of electric vehicles while addressing cost and efficiency considerations.
            </div>

        </div>
    );
};

export default HomePage;