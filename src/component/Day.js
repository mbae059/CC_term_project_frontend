import { useParams } from "react-router-dom"
import Word from "./Word";
import useFetch from "./useFetch";
function Day() {
  const {day} = useParams();
  // const wordList = dummy.words.filter(word => word.day === Number(day));

  const url = `http://localhost:8000/word/${day}`;
  const words = useFetch(url);
  // const [words, setWords] = useState([]);
  // useEffect(()=> {
  //   fetch(`http://localhost:8000/word/${day}`)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       setWords(data);
  //     });
  // }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Day;