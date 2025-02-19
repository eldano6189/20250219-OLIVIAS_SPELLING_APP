const PlayBtn = () => {
  return (
    <svg
      width="111"
      height="111"
      viewBox="0 0 111 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_21_267)">
        <path
          d="M33.0228 25.0657C34.5412 22.4358 37.3473 20.8157 40.384 20.8157L70.6232 20.8157C73.6599 20.8157 76.466 22.4358 77.9844 25.0657L93.104 51.2536C94.6224 53.8835 94.6224 57.1237 93.104 59.7536L77.9844 85.9415C76.466 88.5714 73.6599 90.1915 70.6232 90.1915L40.384 90.1915C37.3473 90.1915 34.5412 88.5714 33.0228 85.9415L17.9032 59.7536C16.3849 57.1237 16.3849 53.8835 17.9032 51.2536L33.0228 25.0657Z"
          fill="#C7632D"
          stroke="#CC8436"
        />
        <path
          d="M33.3085 22.3439C34.8269 19.714 37.633 18.0939 40.6697 18.0939L52.7857 18.0939L72.4282 18.0939C74.5248 18.0939 76.4622 19.2125 77.5105 21.0282L85.8821 35.5282L88.1915 39.5282L95.1197 51.5282C95.5675 52.3039 95.5675 53.2597 95.1197 54.0354L88.4843 65.5282L85.8821 70.0354L82.3526 76.1486L78.2701 83.2197C76.7517 85.8496 73.9457 87.4697 70.9089 87.4697L40.6697 87.4697C37.633 87.4697 34.8269 85.8496 33.3085 83.2197L17.325 55.5354C16.3412 53.8315 16.3412 51.7321 17.325 50.0282L26.2739 34.5282L27.7173 32.0282L30.8927 26.5282L33.3085 22.3439Z"
          fill="url(#paint0_linear_21_267)"
          stroke="#CC8436"
        />
      </g>
      <g filter="url(#filter1_i_21_267)">
        <path
          d="M79.4526 50.1887C82.0563 51.1586 82.0563 54.8414 79.4525 55.8113L44.5472 68.813C42.5869 69.5432 40.5 68.0935 40.5 66.0017V39.9983C40.5 37.9065 42.5869 36.4568 44.5472 37.187L79.4526 50.1887Z"
          fill="url(#paint1_linear_21_267)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_21_267"
          x="16.0874"
          y="17.5939"
          width="87.8682"
          height="81.0975"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_21_267"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_21_267"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_21_267"
          x="40.5"
          y="36.9956"
          width="44.9053"
          height="36.0088"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_21_267"
          />
        </filter>
        <linearGradient
          id="paint0_linear_21_267"
          x1="56"
          y1="18.5"
          x2="56"
          y2="88.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E49E50" />
          <stop offset="1" stopColor="#D37E39" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_21_267"
          x1="56"
          y1="33"
          x2="56"
          y2="73"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A3B1C" />
          <stop offset="1" stopColor="#642C0F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PlayBtn;
