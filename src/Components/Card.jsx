import FileUploader from "./FileUploader";
import PlaceHolder from "../Assets/image.png";

function Card({ state, product = {} }) {
  // Ensure default values to prevent destructuring errors
  const { name = "Unknown Product", price = 0, inStock = false } = product;

  return (
    <div className="max-w-[720px]">
      {/* Card Container */}
      <div
        className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-96"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        {/* Product Image */}
        <div
          className={`relative mx-4 my-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl ${
            state === "profile" ? "h-[10rem]" : "h-[15rem]"
          }`}
        >
          <img
            src={PlaceHolder}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* File Uploader for Profile Mode */}
        {state === "profile" || (
          <>
            {/* Product Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block text-base font-medium text-blue-gray-900">
                  {name}
                </p>
                <p className="block text-base font-medium text-blue-gray-900">
                  ${price.toFixed(2)}
                </p>
              </div>

              {/* Stock Status */}
              <p
                className={`text-sm font-medium ${
                  inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {inStock ? "✅ In Stock" : "❌ Out of Stock"}
              </p>
            </div>

            {/* Button */}
            <div class="p-6 pt-0">
              <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                type="button"
              >
                {inStock ? "Add to Cart" : "Request Service"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
