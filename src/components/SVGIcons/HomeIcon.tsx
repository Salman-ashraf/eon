const HomeIcon = ({ color = "#B6BEC3" }: { color?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.75 14.99C12.75 14.5758 12.4142 14.24 12 14.24C11.5858 14.24 11.25 14.5758 11.25 14.99V17.99C11.25 18.4042 11.5858 18.74 12 18.74C12.4142 18.74 12.75 18.4042 12.75 17.99V14.99Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.4501 2.10555C13.5961 1.50772 12.5191 1.24465 11.4837 1.26893C10.4482 1.29321 9.38375 1.60692 8.55901 2.24837L3.16901 6.44837C2.60552 6.88682 2.134 7.53615 1.80418 8.20836C1.47441 8.88048 1.25 9.6495 1.25 10.36V17.77C1.25 20.5019 3.47347 22.74 6.21 22.74H17.79C20.5254 22.74 22.75 20.503 22.75 17.78V10.5C22.75 9.74277 22.5017 8.9333 22.1361 8.23291C21.7707 7.53283 21.2484 6.86672 20.6288 6.43468L14.4501 2.10555ZM4.09099 7.63157L9.48046 3.43199C10.0057 3.02357 10.7419 2.78674 11.5188 2.76852C12.2958 2.7503 13.044 2.95235 13.5899 3.3344L19.7696 7.66421L19.7712 7.66527C20.1413 7.92324 20.5195 8.37737 20.8064 8.92703C21.0933 9.47665 21.25 10.0472 21.25 10.5V17.78C21.25 19.6769 19.6946 21.24 17.79 21.24H6.21C4.30653 21.24 2.75 19.6781 2.75 17.77V10.36C2.75 9.94045 2.89059 9.39946 3.15082 8.86909C3.4109 8.33901 3.75471 7.89312 4.09099 7.63157Z"
        fill={color}
      />
    </svg>
  );
};

export default HomeIcon;
