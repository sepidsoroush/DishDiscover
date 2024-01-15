import React from "react";
import Svg, { Path } from "react-native-svg";

export function SearchIcon() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.08049 11.4315C4.08049 7.35149 7.46161 4.04401 11.6324 4.04401C15.8033 4.04401 19.1844 7.35149 19.1844 11.4315C19.1844 15.5115 15.8033 18.819 11.6324 18.819C7.46161 18.819 4.08049 15.5115 4.08049 11.4315ZM11.6324 2.40002C6.53345 2.40002 2.3999 6.44355 2.3999 11.4315C2.3999 16.4194 6.53345 20.4629 11.6324 20.4629C13.7682 20.4629 15.7346 19.7535 17.2989 18.5624L20.1662 21.36C20.4948 21.6806 21.0268 21.6799 21.3546 21.3585C21.6823 21.0371 21.6816 20.5166 21.353 20.196L18.5268 17.4385C19.9812 15.8424 20.865 13.7379 20.865 11.4315C20.865 6.44355 16.7314 2.40002 11.6324 2.40002Z"
        fill="#C1C1C1"
      />
    </Svg>
  );
}

export function RightArrow(props) {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        id="Union"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.8906 5.22804C12.6072 5.53133 12.6082 6.02201 12.8928 6.324L17.5121 11.225H4.72726L4.62858 11.2321C4.2736 11.2834 4 11.6076 4 12C4 12.428 4.32561 12.7749 4.72726 12.7749H17.5105L12.8928 17.6758L12.8222 17.7626C12.6104 18.0655 12.633 18.4961 12.8907 18.7718C13.1741 19.075 13.6346 19.076 13.9192 18.774L19.7687 12.5666C19.9048 12.4312 19.9921 12.2408 19.9993 12.0286C20.0067 11.8201 19.9355 11.6091 19.7857 11.4502L13.9191 5.22568L13.8374 5.15083C13.5522 4.92638 13.1483 4.95232 12.8906 5.22804Z"
        fill={props.fill}
      />
    </Svg>
  );
}

export function LeftArrow() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.1094 5.22804C11.3928 5.53133 11.3918 6.02201 11.1072 6.324L6.48795 11.225H19.2727L19.3714 11.2321C19.7264 11.2834 20 11.6076 20 12C20 12.428 19.6744 12.7749 19.2727 12.7749H6.48945L11.1072 17.6758L11.1778 17.7626C11.3896 18.0655 11.367 18.4961 11.1093 18.7718C10.8259 19.075 10.3654 19.076 10.0808 18.774L4.23131 12.5666C4.0952 12.4312 4.00792 12.2408 4.00068 12.0286C3.99333 11.8201 4.06453 11.6091 4.21428 11.4502L10.0809 5.22568L10.1626 5.15083C10.4478 4.92638 10.8517 4.95232 11.1094 5.22804Z"
        fill="#303030"
      />
    </Svg>
  );
}