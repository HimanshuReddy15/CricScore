import React , {useState} from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Club(props) {


  return (
    <div className="club">
      <div className="club-img" style={{backgroundImage:`url(${props.img})`}}>
      </div>
      <h1 className="team-name">{props.name}</h1>
      <p className="loacation">{props.location}</p>
      <p className="cups">Champions :- {props.cups} </p>
      <a href={props.link} target="_blank">Visit Page <ArrowForwardIosIcon /></a>
    </div>
  )
}

export default Club
