import { useState } from "react"

export default function Word(props) {
  const [word, setWord] = useState(props.word);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);
  const url = `http://localhost:8000/word/${word.id}/`;
  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    // setIsDone(!isDone);
    fetch(url, {
      method : 'PUT',
      headers :{
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        ...word,
        isDone : !isDone
      })
    })
    .then(res => {
      if(res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function deleteWord() {
    if(window.confirm('삭제 하시겠습니까?')) {
      fetch(url, {
        method : 'DELETE',
      })
      .then(res => {
        if(res.ok) {
          setWord({id:0});
        }
      });
    }
  }

  if(word.id===0) {
    return null;
  }
  return (
    <tr className={isDone ? 'off' : ''} >
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone}/>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button className="btn_del" onClick={deleteWord}>삭제</button>
      </td>
    </tr>
  )
}

