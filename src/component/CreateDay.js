import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
export default function CreateDay() {
  const url = 'http://localhost:8000/day/';
  const days = useFetch(url);
  const navigate = useNavigate();
  function addDay(e) {
    fetch(url, {
      method : 'POST',
      headers :{
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        day : days.length+1,
      })
    })
    .then(res => {
      if(res.ok) {
        alert('생성 완료');
        navigate('/');
      }
    });
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  )
}