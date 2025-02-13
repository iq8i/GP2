import { useState } from "react";

function UpdateProfile() {
  const [formData, setFormData] = useState({
    userName: "",
    bio: "",
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-black mb-6">Update User</h1>

      <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
        <div className="p-2">
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Username"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>

        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <textarea
            id="bio"
            name="bio"
            rows="3"
            placeholder="User Biography"
            className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>

          <label
            htmlFor="avatar"
            className="block w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50"
          >
            <div className="text-center">
              <button
                type="button"
                className="bg-[rgba(91,184,255,1)] hover:bg-[rgba(91,184,255,0.8)]  text-white rounded-full py-2 px-4"
              >
                Upload a Profile Picture
              </button>
              <p className="text-gray-500">or drag photo here</p>
              <p className="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
            </div>
          </label>
          <input
            id="avatar"
            name="avatar"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleChange}
          />
        </div>

        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="p-2">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="p-2">
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            placeholder="Current password"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            value={formData.currentPassword}
            onChange={handleChange}
          />
        </div>

        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="New password"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            value={formData.newPassword}
            onChange={handleChange}
          />

          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmation password"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-full mt-6 p-2">
          <button
            type="submit"
            className="block w-full bg-[rgba(91,184,255,1)] hover:bg-[rgba(91,184,255,0.8)]  text-white font-bold py-3 px-4 rounded-full"
          >
            Update user
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
