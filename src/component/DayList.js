import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import { ImageUploader } from "./ImageUploader";


function DayList() {
  const url = "http://localhost:8000/day";
  const days = useFetch(url);
  
  
  return (
    <ul className="list_day">
      
      {days.map(day => (
        <li key={day.id}> 
          <Link to={`/day/${day.day}`}> Day {day.day}</Link>
        </li>
      ))}
    </ul>
  )
}
export default DayList;