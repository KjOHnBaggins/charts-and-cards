import About from "../Dashboard/About";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <h1 className="m-5 text-center">WELCOME TO CHARTS AND CARDS!</h1>
        <h3 className="p-3 mb-5 text-center">
          Search for your favourite country.
        </h3>
        <About />
      </div>
    </>
  );
};

export default Home;
