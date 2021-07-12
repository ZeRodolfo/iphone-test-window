import Teste from "components/teste";

const Contact = () => (
  <>
    Contato
    <br />
    <Teste name={window.name} />
    <br />
    <button
      onClick={() => {
        window.location.href = "/";
      }}
    >
      Voltar
    </button>
  </>
);

export default Contact;
