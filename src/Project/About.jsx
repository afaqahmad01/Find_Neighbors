import Layout from "./Layout/Layout";

const About = () => {
  return (
    <>
      <Layout>
        <div className="flex burlyWood">
          <div className="sm:ml-[10px] sm:mt-[20px] lg:ml-[50px] xl:ml-0 text-left">
            <h1 className="font-bold sm:text-[20px] md:text-2xl">
              About the Website
            </h1>
            <p className="sm:text-[12px] md:text-lg sm:mt-[20px] md:mt-[30px] md:ml-[30px]">
              Welcome to <b>Find Country Details</b>, your one-stop destination
              for comprehensive and up-to-date information about countries from
              around the world. Whether you're a student, a traveler, or just a
              curious global citizen, our website provides a wealth of knowledge
              about each nation's population, neighboring countries, and its
              continent on the world map.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
