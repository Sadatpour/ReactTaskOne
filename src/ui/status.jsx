function Status({ options, currentStatus , onChange }) {
  return (
    <div className="flex py-1 rounded-lg items-center gap-1 bg-white text-black">
      <span className="mr-2">وضعیت: </span>
      {options.map(option => {
        const isActive = option.value === currentStatus;
        return (
          <button
            onClick={() => onChange(option.value)}
            disabled={isActive}
            className={`whitespace-nowrap rounded-md px-4 mx-1 py-1 transition-all duration-300 ease-out ${
              isActive ? "bg-blue-600 text-white " : ""
            }`}
            key={option.value}
          >
            {option.lable}
          </button>
        );
      })}
    </div>
  );
}

export default Status;
