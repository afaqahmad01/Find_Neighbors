import Layout from "./Layout/Layout";

const Contact = () => {
  return (
    <>
      <Layout>
        <div className="flex">
          <div className="sm:ml-[10px]  sm:mt-[20px] lg:ml-[50px] text-left">
            <h1 className="font-bold sm:text-[15px] md:text-2xl">Contact Us</h1>
            <p className="sm:text-[12px] md:text-lg sm:mt-[20px] md:mt-[30px] md:ml-[30px]">
              <p className="sm:ml-[10px] sm:mt-[10px]  md:ml-[70px] md:mt-[20px]">
                Contact us thorugh our Email Address or Phone Number:
              </p>
              <p className="sm:ml-[10px] sm:mt-[10px] md:ml-[70px] md:mt-[20px]">
                <b>Email Adress:</b> findcoutrydetails@gmail.com
              </p>
              <p className="sm:ml-[10px] sm:mt-[10px] md:ml-[70px] md:mt-[20px]">
                <b>Phone Number:</b> 0300-1234567
              </p>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
