import React, { useEffect, useRef } from 'react'
import './Titlecard.css'
import { useState } from 'react'

const Titlecard = ({title, category}) => {

  const [apiData, setapiData]= useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWM5MWMyM2U4MGMyOThlZDYxNTJhYjE2MDNjNDMwMCIsIm5iZiI6MTc1NjMxOTk3OS4wNDYwMDAyLCJzdWIiOiI2OGFmNTBlYjU0ZGU3NmNhYmM0ZWJmNmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-VN_5urg-85LVYS6GlvPcwrexehT2SXjN93pfB1g2uY'
    }
  };

  
  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setapiData(res.results))
        .catch(err => console.error(err)); 
    })

  return (
    <div className='titleCard'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/original`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Titlecard
