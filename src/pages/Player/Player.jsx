import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const[apiData, setapiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWM5MWMyM2U4MGMyOThlZDYxNTJhYjE2MDNjNDMwMCIsIm5iZiI6MTc1NjMxOTk3OS4wNDYwMDAyLCJzdWIiOiI2OGFmNTBlYjU0ZGU3NmNhYmM0ZWJmNmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-VN_5urg-85LVYS6GlvPcwrexehT2SXjN93pfB1g2uY'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  return (
    <div className="player">
      <img src={back_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe  width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
