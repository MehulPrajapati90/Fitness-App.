import React, { useState } from 'react';

export default function HeartAgeCalculator() {
    const [chronologicalAge, setChronologicalAge] = useState("");
    const [heartAge, setHeartAge] = useState(null);
    const [healthData, setHealthData] = useState({
        systolicBP: "",
        isSmoker: false,
        hasDiabetes: false,
        ldlCholesterol: "",
        hdlCholesterol: "",
        bmi: "",
        exerciseFrequency: "sedentary", // sedentary, moderate, active
        familyHistory: false
    });

    const calculateHeartAge = () => {
        if (!chronologicalAge || isNaN(chronologicalAge)) {
            alert("Please enter a valid age!");
            return;
        }

        let adjustment = 0;
        const age = parseInt(chronologicalAge);

        // Blood Pressure Adjustment
        if (healthData.systolicBP) {
            const systolicBP = parseInt(healthData.systolicBP);
            if (systolicBP >= 140) adjustment += 10;
            else if (systolicBP >= 130) adjustment += 5;
            else if (systolicBP <= 120) adjustment -= 3;
        }

        // Cholesterol Adjustment
        if (healthData.ldlCholesterol && healthData.hdlCholesterol) {
            const ldl = parseInt(healthData.ldlCholesterol);
            const hdl = parseInt(healthData.hdlCholesterol);
            if (ldl >= 160) adjustment += 8;
            else if (ldl >= 130) adjustment += 4;
            if (hdl >= 60) adjustment -= 2;
        }

        // Smoking Adjustment
        if (healthData.isSmoker) adjustment += 10;

        // Diabetes Adjustment
        if (healthData.hasDiabetes) adjustment += 7;

        // BMI Adjustment
        if (healthData.bmi) {
            const bmi = parseFloat(healthData.bmi);
            if (bmi >= 30) adjustment += 5;
            else if (bmi >= 25) adjustment += 2;
        }

        // Exercise Adjustment
        switch (healthData.exerciseFrequency) {
            case "sedentary": adjustment += 3; break;
            case "moderate": adjustment += 0; break;
            case "active": adjustment -= 2; break;
        }

        // Family History Adjustment
        if (healthData.familyHistory) adjustment += 4;

        // Ensure heart age isn't lower than chronological age for high-risk individuals
        const calculatedHeartAge = age + adjustment;
        setHeartAge(Math.max(calculatedHeartAge, age));
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setHealthData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <div id="heart-age-calculator">
            <div id='heart-age-calculator-protect'>
                <h1>Heart Age Calculator</h1>

                <div id="heart-inner-protect">
                    <div id="heart-input-section">
                        <label>
                            <h3>Your Age</h3>
                            <input
                                type="number"
                                value={chronologicalAge}
                                onChange={(e) => setChronologicalAge(e.target.value)}
                                min="20"
                                max="100"
                            />
                        </label>

                        <h3>Cardiovascular Health</h3>
                        <label>
                            Systolic Blood Pressure (mmHg)
                            <input
                                type="number"
                                name="systolicBP"
                                value={healthData.systolicBP}
                                onChange={handleInputChange}
                            />
                        </label>

                        <label>
                            LDL Cholesterol (mg/dL)
                            <input
                                type="number"
                                name="ldlCholesterol"
                                value={healthData.ldlCholesterol}
                                onChange={handleInputChange}
                            />
                        </label>

                        <label>
                            HDL Cholesterol (mg/dL)
                            <input
                                type="number"
                                name="hdlCholesterol"
                                value={healthData.hdlCholesterol}
                                onChange={handleInputChange}
                            />
                        </label>

                        <label id="heart-checkbox-label">
                            <input
                                type="checkbox"
                                name="isSmoker"
                                checked={healthData.isSmoker}
                                onChange={handleInputChange}
                            />
                            Current Smoker
                        </label>

                        <label id="heart-checkbox-label">
                            <input
                                type="checkbox"
                                name="hasDiabetes"
                                checked={healthData.hasDiabetes}
                                onChange={handleInputChange}
                            />
                            Diabetes
                        </label>

                        <label>
                            BMI
                            <input
                                type="number"
                                name="bmi"
                                value={healthData.bmi}
                                onChange={handleInputChange}
                                step="0.1"
                            />
                        </label>

                        <label>
                            Exercise Frequency
                            <select
                                name="exerciseFrequency"
                                value={healthData.exerciseFrequency}
                                onChange={handleInputChange}
                            >
                                <option value="sedentary">Sedentary (little/no exercise)</option>
                                <option value="moderate">Moderate (1-3x/week)</option>
                                <option value="active">Active (4+ times/week)</option>
                            </select>
                        </label>

                        <label id="heart-checkbox-label">
                            <input
                                type="checkbox"
                                name="familyHistory"
                                checked={healthData.familyHistory}
                                onChange={handleInputChange}
                            />
                            Family History of Heart Disease
                        </label>
                        <button id="heart-calculate-btn" onClick={calculateHeartAge}>Calculate Heart Age</button>
                    </div>

                    {heartAge !== null && (
                        <div id="heart-result-section">
                            <h2>Your Heart Age: <strong>{heartAge}</strong></h2>
                            <p id="heart-result-text">
                                {heartAge > parseInt(chronologicalAge)
                                    ? "Your heart is older than your actual age. Consider lifestyle changes."
                                    : "Your heart is younger or matches your age! Keep it healthy!"}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div id="heartage-content">
                <div id="heartage-content-text">
                    <div id="heartage-content-text-1">
                        <h1>What is heart Age?</h1>
                        <p> Heart age is an estimate of how old your cardiovascular system appears based on risk factors, rather than your actual chronological age. It's calculated by assessing key health metrics like blood pressure, cholesterol levels, smoking status, diabetes, and lifestyle factors that impact heart health. If your heart age is higher than your real age, it indicates increased cardiovascular risk and potential premature aging of your heart and blood vessels. For example, a 40-year-old smoker with high blood pressure might have a heart age of 55, signaling their heart health resembles someone 15 years older. This concept helps visualize cardiovascular risk in relatable terms, motivating lifestyle changes to improve heart health and reduce the gap between heart age and chronological age. Healthcare providers often use heart age calculators based on frameworks like the Framingham Heart Study to assess and communicate cardiovascular risk.</p>
                        <img src="https://www.nyc.gov/assets/doh/images/pr/2018/pr044-18-image2.png" alt="Oops" />
                    </div>
                    <div id="heartage-content-text-2">
                        <h1>How heart Age is Calculate?</h1>
                        <p>Heart age is calculated by assessing key cardiovascular risk factors like blood pressure, cholesterol levels, smoking status, diabetes, BMI, and physical activity, then comparing them to population data. Tools like the Framingham Heart Study algorithm analyze these factors to estimate how your heart health compares to typical people of different ages. For example, a 40-year-old smoker with high blood pressure might have a heart age of 55, meaning their cardiovascular risk resembles an average 55-year-old's. This metric simplifies complex health data into an easy-to-understand "age" to motivate lifestyle improvements. Clinicians often use it to highlight risks and encourage preventive measures like diet changes or exercise.</p>
                    </div>
                </div>
                <div id="heartage-content-visual">
                    <div id="heartage-content-visual-1">
                        <h1>How make our heart healthy?</h1>
                        <p>To keep your heart healthy, focus on eating nutrient-rich foods like vegetables, fruits, whole grains, and omega-3-rich fish while limiting processed foods, excess salt, and unhealthy fats. Stay active with at least 150 minutes of moderate exercise weekly, maintain a healthy weight, and avoid smoking. Manage stress through techniques like meditation, prioritize 7-9 hours of quality sleep nightly, and control key health numbers including blood pressure (120/80 mmHg), LDL cholesterol (100 mg/dL), and blood sugar (fasting 100 mg/dL). Schedule regular check-ups to monitor your heart health, as small, consistent lifestyle changes can significantly improve cardiovascular function and reduce disease risk.</p>
                        <img src="https://www.oshercollaborative.org/sites/main/files/imagecache/lightbox/main-images/biological_age_and_health_outcomes.png" alt="Oops" />
                    </div>
                    <div id="heartage-content-visual-2">
                        <h1>Chronological Age v/s Heart Age.
                        </h1>
                        <p>Chronological age is simply the number of years you've been alive, while heart age reflects your cardiovascular health relative to that number. Your heart age can be younger, older, or equal to your actual age depending on risk factors like blood pressure, cholesterol, smoking, and lifestyle. For example, a 45-year-old with untreated high blood pressure and high cholesterol might have a heart age of 60—meaning their heart health resembles an average 60-year-old's—while a fit 50-year-old with healthy habits could have a heart age of 40. This gap highlights how controllable factors (diet, exercise, stress) impact heart health more than time alone. Doctors use heart age to motivate patients to reduce risks through lifestyle changes, as a younger heart age lowers the odds of heart disease and stroke.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}