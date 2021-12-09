import React from "react";
import { useNavigate} from "react-router";

export default function HomePage() {
 const navigate = useNavigate()
 
 const goToListTrip=()=>{
  navigate("/trips/list")
 };

 const goToAdmPage=()=>{
  navigate('/admin/trips/list')
 }


  return (
  <div>
    <h1>LabeX</h1>
    <button primary onClick={goToListTrip}>Viagens</button>
    <button primary onClick={goToAdmPage}>Area Administrativa</button>
  </div>
  );
};