function LedPanel({ active }) {
  const leds = [
    { color: "red", bgClass: "bg-red-500" },
    { color: "yellow", bgClass: "bg-yellow-400" },
    { color: "green", bgClass: "bg-green-500" },
  ];
  return (
    <div className="flex gap-4 justify-center items-center">
      {leds.map((led) => {
        return (
          <div
            className={`w-10 h-10 rounded-full transition-all duration-300 ${
              led.bgClass
            } scale-110 ${
              active === led.color ? "opacity-100" : "opacity-50"
            } shadow-lg`}
          ></div>
        );
      })}
    </div>
  );
}

export default LedPanel;
