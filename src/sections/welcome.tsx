import Button from "../components/Button";

function welcome() {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col min-h-screen justify-center max-container"
      >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>השירותים שלנו</p>
        <h1>
          <span>
            שירות החזרי המס שלנו
          </span>
        </h1>
        <p>תשאיר את הפרטים שלך </p>
        <Button label="השאר פרטים" iconURL=""
        />
      </div>
    </section>
  )
}

export default welcome