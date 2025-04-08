import React, { useState } from 'react'
import ReactDom from "react-dom/client"
import { topHealthyFoods } from './data'

export default function Home() {
    return (
        <>

            <div className="home-container">
                {/* <img src="./utils/logo7.png" alt="Decoration" className="decoration-img img-1" /> */}
                {/* <img src="./utils/logo6.png" alt="Decoration" className="decoration-img img-2" /> */}

                <div className='home'>
                    <div className='home-lower'>
                        <div className='home-1'>
                            <div className='home-text'>
                                <h1>Welcome To Fitness!</h1>
                                <h3>Transform Your Lifestyle</h3>
                                <p>Begin your journey to a healthier, stronger you with our expert guidance and training programs.</p>
                            </div>
                            <div className='home-logo'>
                                <img src="https://github.com/MehulPrajapati90/Utils/blob/main/logo4.png?raw=true" alt="Fitness Logo" className="main-logo" />
                            </div>
                        </div>
                        <div className='home-2'>
                            <p>Our comprehensive fitness programs are designed to help you achieve your goals, whether you're looking to build muscle, lose weight, or simply improve your overall health and wellbeing.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='sec-2'>

                <div className='sec-2-lower'>
                    <hr id="hr-1" />
                    <div className='inside-hr'>
                        <h1>Become Fitter Become Happier.</h1>

                        <h2>About Biological Age.</h2>
                        <div className='bio-age'>

                            <iframe width="383" height="215" src="https://www.youtube.com/embed/veJzV8iA6gg?si=9S5yIuvjBe9_vtWx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                            <p>Biological age reveals how well your body is truly aging—it’s more important than your calendar years!

                                A lower biological age means healthier cells, better organ function, and reduced disease risk.

                                Lifestyle choices like diet, exercise, and sleep directly influence it—you can turn back the clock!

                                Prioritize habits that keep you biologically young for a longer, more vibrant life!</p>

                        </div> */}

                        {/*

                         <iframe width="560" height="315" src="https://www.youtube.com/embed/veJzV8iA6gg?si=9S5yIuvjBe9_vtWx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        
                         */}

                        {/* <iframe
                    width="383"
                    height="215"
                    src="https://www.youtube.com/embed/Wk9p3dhMYdk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe> */}
                    {/* </div>
                    <hr id="hr-2" />
                </div>
            </div> */}

            <div className='footer'>
                <div className='footer-lower'>
                    <h1>Eat Healthier.</h1>
                    <p>Eating healthier doesn’t have to be complicated—start by adding more fruits, vegetables, and whole grains to your meals. Cut back on processed foods, sugary drinks, and excessive salt to boost your energy and overall well-being. Small, consistent changes, like choosing water over soda or snacking on nuts instead of chips, can lead to long-term benefits for your body and mind. Remember, a balanced diet isn’t about perfection, but about making better choices one meal at a time.</p>

                    <hr className='divider' />

                    <h2>Watch Useful.</h2>
                    <div className='video-container'>
                        <iframe
                            src="https://www.youtube.com/embed/foa9ZhtyrfM?si=0MO3dIzqSUW53AzY"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            src="https://www.youtube.com/embed/wHx51zMqmcg?si=4xsK87D4jKr5eI0u"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <hr className='divider' />

                    <div className='healthy-food'>
                        <h2>Top Healthy Food.</h2>
                        <div className='healthy-food-inner'>
                            {topHealthyFoods.map((val) => (
                                <div className='food-card' key={val.name}>
                                    <img src={val.url} alt={val.name} />
                                    <h3>{val.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className='divider' />

                    <div className='end'>
                        <h4>"Wishing you wellness in every bite and safety in every step. Your health is your greatest wealth—cherish it!" 🌿💚</h4>
                        <p>Licenced Under FITNESS &copy; 2025.</p>
                    </div>
                </div>
            </div>
        </>
    )
}