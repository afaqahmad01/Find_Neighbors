import Layout from "./Layout/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="lg:ml-10 xl:-ml-1 sm:!overflow-y-auto lg:!overflow-hidden w-full sm:h-[calc(100vh-66px)] md:h-[calc(100vh-110px)]  ">
          <div className="  sm:ml-[3px] md:ml-[10px] text-left">
            <h2 className="text-word  sm:text-[15px] md:text-xl font-bold ">
              Home
            </h2>
            <p className="  ml-[5px] sm:text-[12px] md:text-[15px] mt-[10px]">
              Welcome to <b>Find Country Details</b>, your one-stop destination
              for comprehensive and up-to-date information about countries from
              around the world. Whether you're a student, a traveler, or just a
              curious global citizen, our website provides a wealth of knowledge
              about each nation's population, neighboring countries, and its
              continent on the world map.
            </p>
          </div>
          <div className="mt-[20px] sm:ml-[3px]  md:ml-[10px] text-left">
            <h2 className=" text-word md:text-xl font-bold sm:text-[15px]">
              All Countries
            </h2>
            <p className=" ml-[3px] mt-[20px] md:text-[15px] sm:text-[12px]">
              <b>All Countries</b> tab shows the 4 4 famous countries in 4
              differnet continents.
            </p>
          </div>
          <div className=" w-auto mt-[30px] sm:ml-[3px]  md:ml-[10px] text-left">
            <h2 className="text-word md:text-xl font-bold sm:text-[15px]">
              Neighbouring Countries
            </h2>
            <p className=" ml-[5px] mt-[20px] sm:text-[12px] md:text-[15px]">
              <b>Find Neighbours</b> tab in which you can find a wealth of
              knowledge about each nation's population, neighboring countries,
              and its continent on the world map.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
