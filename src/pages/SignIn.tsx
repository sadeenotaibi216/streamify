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
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"),

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

function SignIn(
  {
    theme,
    onSignIn,
  }: {
    theme: "light" | "dark";
    onSignIn: (user: { username: string; email: string }) => void;
  }
) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
  }>({});

  const [loginError, setLoginError] = useState("");

  function validateForm() {
    try {
      userinfo.validateSync(form, {
        abortEarly: false,
      });

      setErrors({});
      return true;
    } catch (error: any) {
      const newErrors: any = {};

      error.inner.forEach((currentError: any) => {
        if (!newErrors[currentError.path]) {
          newErrors[currentError.path] = currentError.message;
        }
      });

      setErrors(newErrors);
      return false;
    }
  }

  function handleChange(
    field: "username" | "email" | "password",
    value: string
  ) {
    setForm({
      ...form,
      [field]: value,
    });

    setLoginError("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
      setLoginError("Incorrect username, email, or password");
      return;
    }

    onSignIn({
      username: form.username,
      email: form.email,
    });

    navigate("/");
  }

  const isFormValid = userinfo.isValidSync(form);

  const inputStyle = `w-full rounded-lg border p-3 outline-none transition-colors duration-300 ${
    theme === "dark"
      ? "border-gray-600 bg-gray-800 text-white placeholder:text-gray-400"
      : "border-gray-300 bg-white text-black placeholder:text-gray-500"
  }`;

  return (
    <div
      className={`flex min-h-screen items-center justify-center px-6 py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`w-full max-w-xl rounded-2xl border p-8 shadow-lg transition-colors duration-300 ${
          theme === "dark"
            ? "border-gray-700 bg-[#0B1220] text-white"
            : "border-gray-300 bg-white text-black"
        }`}
      >
        <h1 className="mb-6 text-center text-4xl font-bold">Sign In</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="mb-2 block">User Name</label>

            <input
              type="text"
              placeholder="User Name"
              value={form.username}
              onChange={(event) =>
                handleChange("username", event.target.value)
              }
              className={inputStyle}
            />

            {errors.username && (
              <p className="mt-1 text-red-400">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block">Email</label>

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(event) =>
                handleChange("email", event.target.value)
              }
              className={inputStyle}
            />

            {errors.email && (
              <p className="mt-1 text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block">Password</label>

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(event) =>
                handleChange("password", event.target.value)
              }
              className={inputStyle}
            />

            {errors.password && (
              <p className="mt-1 text-red-400">{errors.password}</p>
            )}
          </div>

          {loginError && (
            <p className="text-center text-red-400">{loginError}</p>
          )}

          <button
            type="submit"
            disabled={!isFormValid}
            className={
              isFormValid
                ? "cursor-pointer rounded-lg bg-green-400 p-3 font-semibold text-black hover:bg-green-300"
                : "cursor-not-allowed rounded-lg bg-gray-500 p-3 font-semibold text-black"
            }
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;