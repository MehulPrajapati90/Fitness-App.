// import React, { useState, useEffect, useCallback } from 'react'
// import ReactDom from "react-dom/client"
// import { BrowserRouter, Link } from 'react-router'
// import Home from './Home'
// export default function BMI(){

//     const [weight, setWeight] = useState("");
//     const [height, setHeight] = useState("");
//     const [age, setAge] = useState("");
//     const [gender, setGender] = useState("");
//     const [ans, setAns] = useState([]);

//     const calculate = useCallback(((height, weight) => {
//         let ans = weight/(height*height)


//     }), [height, weight]);

//     useEffect(()=>{
//         calculate(height, weight);
//     }, [height, weight]);

//     return(
//         <>
//         <div>
//             <div>
//                 <div className='bmi-cal'>
//                     <h2>Your Weight In (kg).</h2>
//                     <input type="text" placeholder='Enter weight in (kg)...' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
//                     <h2>Your Height In (mtr's).</h2>
//                     <input type="text" placeholder="Enter Height in (mtr's)..." value={height} onChange={(e)=>setHeight(e.target.value)}/>
//                     <h2>Your Gender.</h2>
//                     <label htmlFor="">Male.</label>
//                     <input type="radio" value={1}/>
//                     <label htmlFor="">Female.</label>
//                     <input type="radio" value={0}/>
//                     <h2>Your Age.</h2>
//                     <input type="number" placeholder='Enter Your Age...' value={age} onChange={(e)=>setAge(e.target.value)}/>
//                     <button onClick={()=>{
//                         setAns(ans)
//                     }}></button>
//                     <h2>Your BMI.</h2>
//                     <h3>{ans}kg/m2</h3>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }



import React, { useState } from 'react';

export default function BMI() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("male");
    const [bmiResult, setBmiResult] = useState(null);
    const [adjustedBmi, setAdjustedBmi] = useState(null);
    const [calculated, setCalculated] = useState(false);

    const calculateBmi = () => {
        if (!weight || !height || isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
            alert("Please enter valid weight and height values");
            return;
        }

        const heightInMeters = parseFloat(height);
        const weightInKg = parseFloat(weight);
        const bmi = weightInKg / (heightInMeters * heightInMeters);
        setBmiResult(bmi.toFixed(1));

        // Apply age adjustment
        let ageAdjustedBmi = bmi;
        const ageNum = parseInt(age);

        if (!isNaN(ageNum)) {
            if (ageNum >= 55) {
                ageAdjustedBmi += 2.0;
            } else if (ageNum >= 45) {
                ageAdjustedBmi += 1.5;
            } else if (ageNum >= 35) {
                ageAdjustedBmi += 1.0;
            } else if (ageNum >= 25) {
                ageAdjustedBmi += 0.5;
            }
            // No adjustment for <25
        }

        // Apply gender adjustment
        if (gender === "male") {
            ageAdjustedBmi -= 1.0;
        } else {
            ageAdjustedBmi += 0.5;
        }

        setAdjustedBmi(ageAdjustedBmi.toFixed(1));
        setCalculated(true);
    };

    const resetCalculator = () => {
        setWeight("");
        setHeight("");
        setAge("");
        setGender("male");
        setBmiResult(null);
        setAdjustedBmi(null);
        setCalculated(false);
    };

    return (
        <div className="bmi-calculator">
            <div className="bmi-calculator-protect">
            <h1>BMI Calculator</h1>
            <div className='bmi-cal'>
                <div className="input-group">
                    <h2>Your Weight (kg)</h2>
                    <input
                        type="number"
                        placeholder='Enter weight in kg...'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        min="0"
                        step="0.1"
                        disabled={calculated}
                    />
                </div>

                <div className="input-group">
                    <h2>Your Height (meters)</h2>
                    <input
                        type="number"
                        placeholder="Enter height in meters..."
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        min="0"
                        step="0.01"
                        disabled={calculated}
                    />
                </div>

                <div className="input-group">
                    <h2>Your Gender</h2>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            checked={gender === "male"}
                            onChange={() => setGender("male")}
                            disabled={calculated}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            checked={gender === "female"}
                            onChange={() => setGender("female")}
                            disabled={calculated}
                        />
                        Female
                    </label>
                </div>

                <div className="input-group">
                    <h2>Your Age</h2>
                    <input
                        type="number"
                        placeholder='Enter your age...'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        min="0"
                        max="120"
                        disabled={calculated}
                    />
                </div>

                <div className="button-group">
                    {!calculated ? (
                        <button onClick={calculateBmi} className="calculate-btn">
                            Calculate BMI
                        </button>
                    ) : (
                        <>
                            <div className="results">
                                <h2>Your BMI Results</h2>
                                <p><strong>Standard BMI:</strong> {bmiResult} kg/m²</p>
                                {adjustedBmi && (
                                    <p><strong>Adjusted BMI (age & gender):</strong> {adjustedBmi} kg/m²</p>
                                )}
                            </div>
                            <button onClick={resetCalculator} className="reset-btn">
                                Calculate Again
                            </button>
                        </>
                    )}
                </div>
            </div>
            </div>
            <div className='bmi-about'>
                <div className="bmi-text-content">
                    <div className="bmi-text-content-1">
                        <h1>What is BMI?</h1>
                        <p>BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that are used by the calculator.
                            summarise it</p>
                    </div>
                    <div className="bmi-text-content-2">
                        <h1>Standard BMI Formulae.</h1>
                        <img src="http://www.healthynaturaldiet.com/wp-content/uploads/BMI-formula.jpg" alt="Oops" />
                    </div>
                </div>
                <div className="bmi-visual-content">
                    <div className="bmi-visual-content-1">
                        <h1>BMI chart for adults</h1>
                        <p>This is a graph of BMI categories based on the World Health Organization data. The dashed lines represent subdivisions within a major categorization.</p>
                        <img src="https://d26tpo4cm8sb6k.cloudfront.net/img/bmi-chart.gif" alt="Oops" />
                    </div>
                    <div className="bmi-visual-content-2">
                        <h1>Limitations of BMI.</h1>
                        <p>
                            Body Mass Index (BMI) has several significant limitations that affect its accuracy as a health assessment tool. First, it fails to distinguish between muscle and fat, often misclassifying muscular individuals as overweight or obese. Second, it ignores fat distribution, meaning someone with a "normal" BMI but high visceral fat (dangerous belly fat) could still be at risk for metabolic diseases. Third, it doesn’t account for age or sex differences—older adults may be underdiagnosed due to muscle loss, while women may be unfairly penalized due to naturally higher body fat percentages. Fourth, BMI doesn’t consider ethnic variations, leading to misclassification for groups like Asians (higher fat at lower BMIs) or Polynesians (higher BMIs due to muscle). Finally, BMI overlooks metabolic health, meaning a person with a "healthy" BMI but poor diet and inactivity could still have insulin resistance or inflammation. For these reasons, BMI should be used alongside other metrics like waist circumference, body fat percentage, and blood tests for a complete health picture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
