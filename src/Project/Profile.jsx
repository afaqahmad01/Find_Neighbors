import { useState, useContext } from "react";
import Layout from "./Layout/Layout";
import AppContext from "./Context/AppContext";

const Profile = () => {
  const { userName, setUserName } = useContext(AppContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    company: "",
  });

  const correctInput = (input) => {
    return input.replace(/[^a-zA-Z0-9]/g, "");
  };

  const handleFirstNameChange = (e) => {
    setFormValues({ ...formValues, fname: e.target.value });
  };

  const toEdit = () => {
    setIsDisabled(!isDisabled);
  };

  const handleFormSubmit = () => {
    setUserName(formValues.fname);
    setIsDisabled(true);
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col md:ml-[100px] lg:ml-[200px]">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl  mb-5 sm:text-xl lg:mt-[20px] lg:mb-[50px]">
              Personal Information
            </h1>
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="fname"
                className="rounded text-bold sm:text-lg lg:text-xl font-bold "
              >
                First name:
              </label>

              <input
                type="text"
                id="fname"
                name="fname"
                value={correctInput(formValues.fname)}
                onChange={handleFirstNameChange}
                disabled={isDisabled}
                className="rounded border border-black bg-white p-2  sm:w-[80vw] md:w-[40vw] md:ml-24 lg:ml-[80px] lg:w-[20.5vw]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lname"
                className="rounded text-bold sm:text-lg lg:text-xl font-bold "
              >
                Last name:
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                disabled={isDisabled}
                className="rounded border border-black bg-white p-2 sm:w-[80vw]  md:ml-24  lg:ml-[85px] md:w-[40vw] lg:w-[20.5vw]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="rounded text-bold sm:text-lg lg:text-xl font-bold "
              >
                Official Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                disabled={isDisabled}
                className="rounded border border-black bg-white p-2 sm:w-[80vw] md:ml-[68px] md:w-[40vw] lg:ml-[55px] lg:w-[20.5vw]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="number"
                className="rounded text-bold sm:text-lg lg:text-xl font-bold "
              >
                Phone Number:
              </label>
              <input
                type="text"
                id="number"
                name="number"
                disabled={isDisabled}
                className="rounded border border-black bg-white p-2  sm:w-[80vw] md:ml-14 md:w-[40vw] lg:ml-[40px] lg:w-[20.5vw]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="rounded text-bold sm:text-lg lg:text-xl font-bold "
              >
                Company name:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                disabled={isDisabled}
                className="rounded border border-black bg-white p-2  sm:w-[80vw] md:ml-14 md:w-[40vw] lg:ml-[40px] lg:w-[20.5vw]"
              />
            </div>

            <button
              className="rounded text-bold border border-black bg-black text-white p-2 mr-4"
              type="button"
              onClick={isDisabled ? toEdit : handleFormSubmit}
            >
              {isDisabled ? "Edit" : "Submit"}
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
