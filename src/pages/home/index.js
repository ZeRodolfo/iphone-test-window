import { useEffect, useState } from "react";
import Teste from "components/teste";

function getWindowUniqueId() {
  // let value = window.sessionStorage.getItem('unique-id');

  // if(!value || !window.name) {
  //     value = generateUuid();
  //     window.sessionStorage.setItem('unique-id', value);
  // }

  // window.name = value;
  // return value;

  // session storage not working multi domains
  if (!window.name) {
    window.name = generateUuid();
  }

  return window.name;
}

// https://www.ietf.org/rfc/rfc4122.txt
// http://stackoverflow.com/a/2117523
function generateUuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const Home = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    // if (!window.name) {
    //   alert("Não tem Name")
    //   window.name = 'teste';
    // } else {
    //   alert(`O nome é ${window.name}`);
    // }
    setName(getWindowUniqueId());
  }, []);

  return (
    <>
      <Teste name={name} /> <br />
      <button
        onClick={() => {
          window.location.href = "/contact";
        }}
      >
        Teste
      </button>
    </>
  );
};

export default Home;
