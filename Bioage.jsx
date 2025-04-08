import React, { useState } from 'react';

export default function BioAge() {
    const [chronologicalAge, setChronologicalAge] = useState("");
    const [biologicalAge, setBiologicalAge] = useState(null);
    const [healthData, setHealthData] = useState({
        bmi: "",
        systolicBP: "",
        diastolicBP: "",
        restingHeartRate: "",
        ldlCholesterol: "",
        hdlCholesterol: "",
        isSmoker: false,
        exerciseFrequency: "sedentary", // Options: sedentary, moderate, active
        sleepQuality: "poor", // Options: poor, average, good
        stressLevel: "high" // Options: high, moderate, low
    });

    const calculateBiologicalAge = () => {
        if (!chronologicalAge || isNaN(chronologicalAge)) {
            alert("Please enter a valid age!");
            return;
        }

        let adjustment = 0;
        const age = parseInt(chronologicalAge);

        // BMI Adjustment (Example: BMI > 30 → +2 years, BMI < 18.5 → +1, Normal → -0.5)
        if (healthData.bmi) {
            const bmi = parseFloat(healthData.bmi);
            if (bmi > 30) adjustment += 2;
            else if (bmi < 18.5) adjustment += 1;
            else if (bmi >= 18.5 && bmi <= 25) adjustment -= 0.5;
        }

        // Blood Pressure Adjustment (Hypertension → +3 years)
        if (healthData.systolicBP && healthData.diastolicBP) {
            const systolic = parseInt(healthData.systolicBP);
            const diastolic = parseInt(healthData.diastolicBP);
            if (systolic >= 140 || diastolic >= 90) adjustment += 3;
            else if (systolic <= 120 && diastolic <= 80) adjustment -= 1;
        }

        // Resting Heart Rate Adjustment (RHR > 80 → +1.5 years)
        if (healthData.restingHeartRate) {
            const rhr = parseInt(healthData.restingHeartRate);
            if (rhr > 80) adjustment += 1.5;
            else if (rhr < 60) adjustment -= 1;
        }

        // Cholesterol Adjustment (High LDL → +2 years, Good HDL → -1 year)
        if (healthData.ldlCholesterol && healthData.hdlCholesterol) {
            const ldl = parseInt(healthData.ldlCholesterol);
            const hdl = parseInt(healthData.hdlCholesterol);
            if (ldl > 130) adjustment += 2;
            if (hdl > 60) adjustment -= 1;
        }

        // Smoking Adjustment (+5 years if smoker)
        if (healthData.isSmoker) adjustment += 5;

        // Exercise Adjustment (Sedentary → +2 years, Active → -2 years)
        switch (healthData.exerciseFrequency) {
            case "sedentary": adjustment += 2; break;
            case "moderate": adjustment += 0; break;
            case "active": adjustment -= 2; break;
        }

        // Sleep Quality Adjustment (Poor → +1.5 years, Good → -1 year)
        switch (healthData.sleepQuality) {
            case "poor": adjustment += 1.5; break;
            case "average": adjustment += 0; break;
            case "good": adjustment -= 1; break;
        }

        // Stress Adjustment (High → +2 years, Low → -1 year)
        switch (healthData.stressLevel) {
            case "high": adjustment += 2; break;
            case "moderate": adjustment += 0; break;
            case "low": adjustment -= 1; break;
        }

        setBiologicalAge(age + adjustment);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setHealthData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <div id="bio-age-calculator">
            <div id="bio-age-calculator-protect">
                <h1>Biological Age Calculator</h1>

                <div id="bio-age-input-section">
                    <label>
                        <h3>Chronological Age</h3>
                        <input
                            type="number"
                            value={chronologicalAge}
                            onChange={(e) => setChronologicalAge(e.target.value)}
                            min="1"
                            max="120"
                        />
                    </label>

                    <h3>Health Metrics</h3>
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
                        Blood Pressure (Systolic / Diastolic)
                        <div id="bio-age-bp-inputs">
                            <input
                                type="number"
                                name="systolicBP"
                                placeholder="Systolic"
                                value={healthData.systolicBP}
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="diastolicBP"
                                placeholder="Diastolic"
                                value={healthData.diastolicBP}
                                onChange={handleInputChange}
                            />
                        </div>
                    </label>

                    <label>
                        Resting Heart Rate (BPM)
                        <input
                            type="number"
                            name="restingHeartRate"
                            value={healthData.restingHeartRate}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Cholesterol (LDL / HDL)
                        <div id="bio-age-cholesterol-inputs">
                            <input
                                type="number"
                                name="ldlCholesterol"
                                placeholder="LDL"
                                value={healthData.ldlCholesterol}
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="hdlCholesterol"
                                placeholder="HDL"
                                value={healthData.hdlCholesterol}
                                onChange={handleInputChange}
                            />
                        </div>
                    </label>

                    <label id="bio-age-checkbox-label">
                        <input
                            type="checkbox"
                            name="isSmoker"
                            checked={healthData.isSmoker}
                            onChange={handleInputChange}
                        />
                        Are you a smoker?
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

                    <label>
                        Sleep Quality
                        <select
                            name="sleepQuality"
                            value={healthData.sleepQuality}
                            onChange={handleInputChange}
                        >
                            <option value="poor">Poor (≤6 hrs, unrestful)</option>
                            <option value="average">Average (6-8 hrs, somewhat restful)</option>
                            <option value="good">Good (7-9 hrs, restful)</option>
                        </select>
                    </label>

                    <label>
                        Stress Level
                        <select
                            name="stressLevel"
                            value={healthData.stressLevel}
                            onChange={handleInputChange}
                        >
                            <option value="high">High (frequent stress)</option>
                            <option value="moderate">Moderate (occasional stress)</option>
                            <option value="low">Low (rarely stressed)</option>
                        </select>
                    </label>
                    <button id="bio-age-calculate-btn" onClick={calculateBiologicalAge}>Calculate Biological Age</button>
                </div>

                {biologicalAge !== null && (
                    <div id="bio-age-result-section">
                        <h2>Your Biological Age: <strong>{biologicalAge.toFixed(1)}</strong></h2>
                        <p id="bio-age-result-text">
                            {biologicalAge > parseFloat(chronologicalAge)
                                ? "Your body is aging faster than your chronological age."
                                : "Your body is younger than your chronological age!"}
                        </p>
                    </div>
                )}
            </div>
            <div id ="bioage-content">
                <div id ="bioage-content-text">
                    <div id ="bioage-content-text-1">
                        <h1>What is Biological Age.</h1>
                        <p>Biological age refers to how old your body functions compared to your actual chronological age. While your chronological age counts the years since birth, biological age reflects your body's true wear and tear based on cellular health, organ function, and lifestyle factors. It considers biomarkers like inflammation, cholesterol levels, and DNA damage, as well as habits such as diet, exercise, sleep, and stress. For example, a 50-year-old who exercises regularly, eats well, and manages stress might have a biological age of 45, meaning their body is healthier than the average 50-year-old's. Conversely, someone with poor health habits could have a higher biological age, indicating accelerated aging. Scientists estimate biological age using epigenetic clocks (measuring DNA changes), blood tests, and physical assessments. Understanding biological age helps predict long-term health risks and motivates positive lifestyle changes to slow aging and extend healthspan—the number of years lived in good health. Unlike chronological age, which is fixed, biological age can be improved through better nutrition, fitness, and stress management.</p>
                    </div>
                    <div id ="bioage-content-text-2">
                        <h1>Age Graph.</h1>
                        <img src="https://www.thelancet.com/cms/attachment/387750a1-775e-40e4-a483-474e04c0b0c9/gr1_lrg.jpg" alt="" />
                        <img src="https://www.mdpi.com/ijms/ijms-25-06793/article_deploy/html/images/ijms-25-06793-g002.png" alt="" />
                    </div>
                    <div id ="bioage-content-text-3">
                        <h1>What Precations should be taken?</h1>
                        <p>When calculating biological age, ensure you use reliable, clinically validated biomarkers and avoid over-relying on single metrics. Account for temporary fluctuations (e.g., recent illness or stress skewing results) and prioritize longitudinal tracking over one-time tests. For lifestyle factors, use standardized questionnaires to reduce subjective bias. Always consult healthcare professionals to interpret results, as some biomarkers (like CRP or glucose) may reflect acute conditions rather than aging. Protect data privacy when using digital tools, and remember that biological age estimates are indicative, not diagnostic—they guide lifestyle changes but aren’t medical verdicts.</p>
                    </div>
                </div>
                <div id ="bioage-content-visual">
                    <div id="bioage-content-visual-1">
                        <h1>Biological Age v/s Chronological Age</h1>
                        <p>Biological age measures how well your body functions at a cellular and physiological level, reflecting the cumulative effects of genetics, lifestyle, and environmental factors, while chronological age simply counts the number of years since birth. Unlike chronological age, which progresses uniformly for everyone, biological age can vary significantly—someone may be 50 years old chronologically but have the health and vitality of a 40-year-old (biological age = 40) due to healthy habits, or the frailty of a 60-year-old (biological age = 60) due to poor health choices. Key influences on biological age include diet, exercise, stress, sleep, and biomarkers like inflammation and DNA damage. While chronological age is fixed, biological age is dynamic, offering insights into true aging rates and opportunities to extend healthspan through lifestyle improvements. Essentially, chronological age tells time, but biological age reveals how well that time has been spent.</p>
                        <img src="https://cdn.sanity.io/images/bxsu76x0/timeline-nutrition/a2521d1b26d94fa7eb88943e0c056b2bd125b360-2640x1760.png?w=1920&h=1280&q=80&fit=crop&auto=format" alt="" />
                    </div>
                    <div id="bioage-content-visual-2">
                        <h1>factor's taken into consideration for calculating bio age</h1>
                        <p>Biological age calculation takes into account a comprehensive range of physiological, molecular, and lifestyle factors that collectively reflect how rapidly your body is aging compared to your chronological years. Key cellular biomarkers include telomere length (shorter telomeres indicate accelerated aging) and DNA methylation patterns (measured by epigenetic clocks like Horvath's or PhenoAge). Blood markers such as hs-CRP (for inflammation), fasting glucose (metabolic health), and lipid profiles (HDL/LDL cholesterol) provide insights into systemic aging. Hormonal factors like cortisol (stress) and DHEA (youth-associated) levels are also considered. Additionally, lifestyle elements significantly influence calculations - smoking, exercise frequency, sleep quality, diet (especially anti-inflammatory foods), chronic stress levels, and even social connections can add or subtract years from your biological age. Advanced models may incorporate physical metrics like VO₂ max (aerobic capacity), grip strength, and skin elasticity. Unlike chronological age, this multidimensional assessment reveals your body's true functional age and can be improved through targeted interventions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}