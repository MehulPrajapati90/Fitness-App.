import React, { useState, useEffect } from 'react'
import ReactDom from "react-dom/client"
import { topFitnessInfluencers } from './data'

export default function Influence() {
    return (
        <>
            <div className='influence'>
                <h1>Fitness Influencers.</h1>
                <p>"We do not support or Endorse Any thing this is just for project purpose".</p>
                <div className='influence-lower'>
                    {
                        topFitnessInfluencers.map((val) => {
                            return (
                                <div key={val.id} className='profile'>
                                    <img height={200} width={200} src={val.image} alt="Oops" />
                                    <h3>{val.name}</h3>
                                    <h3>{val.followers}</h3>
                                    <a href={val.social_media.instagram} target='_blank'>Instagram.</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}