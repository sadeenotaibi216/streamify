import { useState } from "react";
import { useNavigate } from "react-router";
import * as yup from "yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]+$/, "Name should contain letters only")
    .max(20, "Name must be 20 characters or less"),

  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegex, "Please enter a valid email"),

  subject: yup.string().required("Please select a subject"),

  message: yup
    .string()
    .required("Message is required")
    .max(40, "Message must be 40 characters or less"),

  genres: yup.array().min(1, "Please choose at least one genre"),

  acceptTerms: yup.boolean().oneOf([true], "You must accept the terms"),
});

function ContactUs() {
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

  function validateForm(data) {
    try {
      contactSchema.validateSync(getFormData(data), {
        abortEarly: false,
      });

      setErrors({});
      return true;
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
      return false;
    }
  }

  function handleChange(field, value) {
    const updatedForm = {
      ...form,
      [field]: value,
    };

    setForm(updatedForm);
    validateForm(updatedForm);
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

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-6 py-20">
      <div className="bg-[#0B1220] w-full max-w-xl rounded-2xl p-8 border border-gray-700">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>

        <p className="text-gray-400 text-center mb-8">
          Have a question? Send us a message.
        </p>

        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-green-400"
            />

            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-green-400"
            />

            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <select
              value={form.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-green-400"
            >
              <option value="">Select Subject</option>
              <option value="Question">Question</option>
              <option value="Feedback">Feedback</option>
              <option value="Support">Support</option>
            </select>

            {errors.subject && (
              <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 h-32 outline-none focus:border-green-400"
            />

            <p
              className={
                form.message.length > 40
                  ? "text-red-400 text-sm text-right"
                  : "text-gray-400 text-sm text-right"
              }
            >
              {form.message.length}/40
            </p>

            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div>
            <p className="font-semibold mb-2">Interested Genres</p>

            <label className="block mb-2">
              <input
                type="checkbox"
                checked={form.action}
                onChange={(e) => handleChange("action", e.target.checked)}
              />
              <span className="ml-2">Action</span>
            </label>

            <label className="block mb-2">
              <input
                type="checkbox"
                checked={form.comedy}
                onChange={(e) => handleChange("comedy", e.target.checked)}
              />
              <span className="ml-2">Comedy</span>
            </label>

            <label className="block mb-2">
              <input
                type="checkbox"
                checked={form.drama}
                onChange={(e) => handleChange("drama", e.target.checked)}
              />
              <span className="ml-2">Drama</span>
            </label>

            {errors.genres && (
              <p className="text-red-400 text-sm mt-1">{errors.genres}</p>
            )}
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={form.acceptTerms}
                onChange={(e) =>
                  handleChange("acceptTerms", e.target.checked)
                }
              />
              <span className="ml-2">I accept the terms</span>
            </label>

            {errors.acceptTerms && (
              <p className="text-red-400 text-sm mt-1">
                {errors.acceptTerms}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={
              isFormValid
                ? "bg-green-400 text-black font-bold py-3 rounded-lg hover:bg-green-500"
                : "bg-gray-500 text-black font-bold py-3 rounded-lg cursor-not-allowed"
            }
          >
            Send
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="border border-gray-600 py-3 rounded-lg hover:border-white"
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;