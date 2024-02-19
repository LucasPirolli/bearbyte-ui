// Em outro componente ou no arquivo principal do seu aplicativo
import Button from "./components/Button/Button";
const App = () => {
  const handleClick = () => {
    console.log("Botão clicado");
  };


const RightArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M10 17l5-5-5-5v10z" />
  </svg>
);

  return (
    <div>
      <Button
        onClick={handleClick}
        isLoading={true}
        spinnerPlacement="start"
        leftIcon={<RightArrowIcon />}
        variant="outline"
        color="#f00"
        bgColor="#ff0000"
        fontWeight={"bold"}
        size="sm"
      >
      Button label
      </Button>
    </div>
  );
};

export default App;
