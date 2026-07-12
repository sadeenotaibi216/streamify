import { useState } from "react";
import { useNavigate } from "react-router";
import * as yup from "yup";

const userinfo = yup.object({
  username: yup
    .string()
    .required("User name is required")
    .min(4, "User name must be at least 4 characters")
    .max(10, "User name must be at most 10 characters"),

  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email",
    ),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).+$/,
      "Password must contain at least one letter and one number",
    ),
});

const existingUser = {
  username: "Sadeen",
  email: "sadeen@gmail.com",
  password: "Sadeen123",
};

function SignIn({ onSignIn }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  function validateForm() {
    try {
      userinfo.validateSync(form, {
        abortEarly: false,
      });

      setErrors({});
      return true;
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((currentError) => {
        if (!newErrors[currentError.path]) {
          newErrors[currentError.path] =
            currentError.message;
        }
      });

      setErrors(newErrors);
      return false;
    }
  }

  function handleChange(field, value) {
    setForm({
      ...form,
      [field]: value,
    });

    setLoginError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const valid = validateForm();

    if (!valid) {
      return;
    }

    const correctUser =
      form.username === existingUser.username &&
      form.email === existingUser.email &&
      form.password === existingUser.password;

    if (!correctUser) {
      setLoginError(
        "Incorrect username, email, or password",
      );
      return;
    }

    onSignIn({
      username: form.username,
      email: form.email,
    });

    navigate("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 py-20 text-white">
      <div className="w-full max-w-xl rounded-2xl border border-gray-700 bg-[#0B1220] p-8">
        <h1 className="mb-6 text-center text-4xl font-bold">
          Sign In
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <div>
            <label className="mb-2 block">
              User Name
            </label>

            <input
              type="text"
              placeholder="User Name"
              value={form.username}
              onChange={(event) =>
                handleChange(
                  "username",
                  event.target.value,
                )
              }
              className="w-full rounded-lg border border-gray-600 bg-gray-800 p-3"
            />

            {errors.username && (
              <p className="mt-1 text-red-400">
                {errors.username}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block">Email</label>

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(event) =>
                handleChange(
                  "email",
                  event.target.value,
                )
              }
              className="w-full rounded-lg border border-gray-600 bg-gray-800 p-3"
            />

            {errors.email && (
              <p className="mt-1 text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block">
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(event) =>
                handleChange(
                  "password",
                  event.target.value,
                )
              }
              className="w-full rounded-lg border border-gray-600 bg-gray-800 p-3"
            />

            {errors.password && (
              <p className="mt-1 text-red-400">
                {errors.password}
              </p>
            )}
          </div>

          {loginError && (
            <p className="text-center text-red-400">
              {loginError}
            </p>
          )}

          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-green-400 p-3 font-semibold text-black hover:bg-green-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;