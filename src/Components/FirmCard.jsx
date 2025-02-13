function FirmCard(props) {
  return (
    <>
      <div class="flex flex-col justify-center " onClick={props.onClick}>
        <div class="w-full h-[7rem] relative flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 rounded-xl shadow-lg p-2 max-w-xs md:max-w-2xl mx-auto border border-white bg-white">
          <div class="w-26 md:w-32 bg-white grid place-items-center">
            <img src={props.image} alt="tailwind logo" class="rounded-xl" />
          </div>
          <div class="w-full md:w-3/3 bg-white flex flex-col space-y-2 p-2">
            <div class="flex justify-between items-center">
              <h3 class="font-black text-gray-800 md:text-2xl text-lg">
                {props.title}
              </h3>
              <div class="flex items-center"></div>
            </div>
            <p class="text-sm text-gray-500 line-clamp-2">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirmCard;
