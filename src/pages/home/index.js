import {useEffect} from 'react'
import Teste from "components/teste"

const Home = () => {
  useEffect(() => {
    if (!window.name) {
      alert("Não tem Name")
      window.name = 'teste';
    } else {
      alert(`O nome é ${window.name}`);
    }
  }, [])

 return <Teste />
}

export default Home