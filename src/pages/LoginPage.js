import React, { useState } from "react";
import { ACCOUNT } from "../asset/data/account";
import { toastError, toastSuccess } from "../lib/toastify";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const fields = [
    {
      label: "Email",
      type: "text",
      placeholder: "name@company.com",
      name: "email",
      value: query.email,
    },

    {
      label: "Password",
      type: "text",
      placeholder: "...",
      name: "password",
      value: query.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!query.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(query.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!query.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (query.password.length < 4) {
      newErrors.password = "Password should be at least 4 characters long";
      isValid = false;
    }

    // Update errors
    setErrors(newErrors);

    // Proceed with form submission if valid
    if (isValid) {
      const foundAccount = ACCOUNT.find(
        (account) =>
          account.email === query.email && account.password === query.password
      );
      if (foundAccount) {
        dispath(login(query.email));
        toastSuccess("Login successfully!");
        navigate("/");
      } else {
        toastError("Email or password is incorrect! ");
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img
          className="w-auto mb-4"
          src="https://deltabrains.vn/common/images/logo.png"
          alt="logo"
        />

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={(e) => handleSubmit(e)}
            >
              {fields.map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) =>
                      setQuery({ ...query, [e.target.name]: e.target.value })
                    }
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full text-white bg-sky-700 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-700 dark:hover:bg-sky-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
