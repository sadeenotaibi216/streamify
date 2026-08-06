import { useState } from "react";
import { useNavigate } from "react-router";
import * as yup from "yup";

const contactSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name should contain letters only")
    .max(20, "Name must be 20 characters or less"),

  email: yup
    .string()
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"),

  subject: yup.string().required("Please select a subject"),

  message: yup
    .string()
    .required("Message is required")
    .max(40, "Message must be 40 characters or less"),

  genres: yup.array().min(1, "Please choose at least one genre"),

  acceptTerms: yup.boolean().oneOf([true], "You must accept the terms"),
});

function ContactUs({ theme }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    action: false,
    comedy: false,
    drama: false,
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});

  function getGenres(data) {
    const genres = [];

    if (data.action) {
      genres.push("Action");
    }

    if (data.comedy) {
      genres.push("Comedy");
    }

    if (data.drama) {
      genres.push("Drama");
    }

    return genres;
  }

  function getFormData(data) {
    return {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      genres: getGenres(data),
      acceptTerms: data.acceptTerms,
    };
  }

  // Validates the entire form when Send is clicked
  function validateForm(data) {
    try {
      contactSchema.validateSync(getFormData(data), {
        abortEarly: false,
      });

      setErrors({});
      return true;
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((currentError) => {
        // Keep the first error for each field.
        // This makes "required" appear before other errors.
        if (!newErrors[currentError.path]) {
          newErrors[currentError.path] = currentError.message;
        }
      });

      setErrors(newErrors);
      return false;
    }
  }

  // Validates only the field that was changed
  function validateField(field, data) {
    try {
      contactSchema.validateSyncAt(field, getFormData(data));

      setErrors((previousErrors) => ({
        ...previousErrors,
        [field]: "",
      }));
    } catch (error) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [field]: error.message,
      }));
    }
  }

  function handleChange(field, value) {
    const updatedForm = {
      ...form,
      [field]: value,
    };

    setForm(updatedForm);

    // The checkbox values are converted into one genres array
    if (field === "action" || field === "comedy" || field === "drama") {
      validateField("genres", updatedForm);
    } else {
      validateField(field, updatedForm);
    }
  }

  const isFormValid = contactSchema.isValidSync(getFormData(form));

  function handleSubmit(e) {
    e.preventDefault();

    const valid = validateForm(form);

    if (!valid) {
      return;
    }

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
      action: false,
      comedy: false,
      drama: false,
      acceptTerms: false,
    });

    setErrors({});
  }
  const inputStyle = `w-full rounded-lg border px-4 py-3 outline-none transition-colors duration-300 focus:border-green-400 ${
    theme === "dark"
      ? "border-gray-600 bg-black text-white placeholder:text-gray-400"
      : "border-gray-300 bg-white text-black placeholder:text-gray-500"
  }`;
  return (
    <div
      className={`flex min-h-screen items-center justify-center px-6 py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`w-full max-w-xl rounded-2xl border p-8 transition-colors duration-300 ${
          theme === "dark"
            ? "border-gray-700 bg-[#0B1220] text-white"
            : "border-gray-300 bg-white text-black shadow-lg"
        }`}
      >
        <h1 className="mb-4 text-center text-4xl font-bold">Contact Us</h1>

        <p
          className={`mb-8 text-center ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Have a question? Send us a message.
        </p>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(event) => handleChange("name", event.target.value)}
              className={inputStyle}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(event) => handleChange("email", event.target.value)}
              className={inputStyle}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <select
              value={form.subject}
              onChange={(event) => handleChange("subject", event.target.value)}
              className={inputStyle}
            >
              <option value="">Select Subject</option>
              <option value="Question">Question</option>
              <option value="Feedback">Feedback</option>
              <option value="Support">Support</option>
            </select>

            {errors.subject && (
              <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(event) => handleChange("message", event.target.value)}
              className={`${inputStyle} h-32`}
            />

            <p
              className={`text-right text-sm ${
                form.message.length > 40
                  ? "text-red-400"
                  : theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
              }`}
            >
              {form.message.length}/40
            </p>

            {errors.message && (
              <p className="mt-1 text-sm text-red-400">{errors.message}</p>
            )}
          </div>

          <div>
            <p className="mb-2 font-semibold">Interested Genres</p>

            <label className="mb-2 block">
              <input
                type="checkbox"
                checked={form.action}
                onChange={(event) =>
                  handleChange("action", event.target.checked)
                }
              />

              <span className="ml-2">Action</span>
            </label>

            <label className="mb-2 block">
              <input
                type="checkbox"
                checked={form.comedy}
                onChange={(event) =>
                  handleChange("comedy", event.target.checked)
                }
              />

              <span className="ml-2">Comedy</span>
            </label>

            <label className="mb-2 block">
              <input
                type="checkbox"
                checked={form.drama}
                onChange={(event) =>
                  handleChange("drama", event.target.checked)
                }
              />

              <span className="ml-2">Drama</span>
            </label>

            {errors.genres && (
              <p className="mt-1 text-sm text-red-400">{errors.genres}</p>
            )}
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={form.acceptTerms}
                onChange={(event) =>
                  handleChange("acceptTerms", event.target.checked)
                }
              />

              <span className="ml-2">I accept the terms</span>
            </label>

            {errors.acceptTerms && (
              <p className="mt-1 text-sm text-red-400">{errors.acceptTerms}</p>
            )}
          </div>

          <button
            type="submit"
            className={
              isFormValid
                ? "cursor-pointer rounded-lg bg-green-400 py-3 font-bold text-black transition-colors duration-300 hover:bg-green-500"
                : "cursor-pointer rounded-lg bg-gray-500 py-3 font-bold text-black"
            }
          >
            Send
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className={`cursor-pointer rounded-lg border py-3 transition-colors duration-300 ${
              theme === "dark"
                ? "border-gray-600 hover:border-white"
                : "border-gray-300 hover:border-black"
            }`}
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
