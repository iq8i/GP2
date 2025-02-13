import React from "react";

function AddService() {
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };
  return (
    <div className="mx-auto max-w-[40rem] flex flex-col mt-5 gap-4 bg-gray-200 p-5 rounded-md">
      <input
        type="text"
        id="userName"
        name="userName"
        placeholder="Service's name"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
      />
      <input
        type="text"
        id="userName"
        name="price"
        placeholder="price"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
      />

      <label
        htmlFor="avatar"
        className="   border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50"
      >
        <div className="text-center">
          <button
            type="button"
            className="bg-[rgba(91,184,255,1)] hover:bg-[rgba(91,184,255,0.8)]  text-white rounded-full py-2 px-4 mt-4"
          >
            Upload a Profile Picture
          </button>
          <p className="text-gray-500">or drag photo here</p>
          <p className="text-gray-500 text-sm mt-1 mb-4">PNG, JPG, SVG</p>
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
      <button
        type="submit"
        className="block w-full bg-[rgba(91,184,255,1)] hover:bg-[rgba(91,184,255,0.8)]  text-white font-bold py-3 px-4 rounded-full"
      >
        Add Service
      </button>
    </div>
  );
}

export default AddService;
