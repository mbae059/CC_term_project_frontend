import { useRef } from "react";
import useFetch from "./useFetch"
import { ImageUploader } from "./ImageUploader";


export default function CreateWord() {
  const url = `http://localhost:8000/day`;
  const days = useFetch(url);

  function onSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:8000/word/`, {
      method : 'POST',
      headers :{
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        day : dayRef.current.value,
        eng : engRef.current.value,
        kor : korRef.current.value,
        isDone : false,
      })
    })
    .then(res => {
      if(res.ok) {
        alert('생성 완료');
      }
    });

  }
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    
    <form onSubmit={onSubmit}>
      <ImageUploader ></ImageUploader>

      <div className="input_area">
        <label>Eng</label>
        <input id="eng_text" type="text" placeholder="computer" ref={engRef}/>
      </div>
      
      <div className="input_area">
        <label>Kor</label>
        <input id="kor_text" type="text" placeholder="컴퓨터" ref={korRef}/>
      </div>
      
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  )
}