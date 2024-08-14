import { IconProps } from "./types";

export const InstagramIcon = ({
  color = "white",
  size = 30,
  onClick,
}: IconProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <svg
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 1000 1000"
      >
        <path
          fill={color}
          d="M500,1000L500,1000C223.9,1000,0,776.1,0,500l0,0C0,223.9,223.9,0,500,0l0,0c276.1,0,500,223.9,500,500l0,0  C1000,776.1,776.1,1000,500,1000z"
        />
        <g>
          <path
            fill="#f66233"
            d="M500,220.2c91.1,0,101.9,0.3,137.9,2c33.3,1.5,51.4,7.1,63.4,11.8c15.9,6.2,27.3,13.6,39.2,25.5   s19.3,23.3,25.5,39.2c4.7,12,10.2,30.1,11.8,63.4c1.6,36,2,46.8,2,137.9s-0.3,101.9-2,137.9c-1.5,33.3-7.1,51.4-11.8,63.4   c-6.2,15.9-13.6,27.3-25.5,39.2s-23.3,19.3-39.2,25.5c-12,4.7-30.1,10.2-63.4,11.8c-36,1.6-46.8,2-137.9,2s-101.9-0.3-137.9-2   c-33.3-1.5-51.4-7.1-63.4-11.8c-15.9-6.2-27.3-13.6-39.2-25.5c-11.9-11.9-19.3-23.3-25.5-39.2c-4.7-12-10.2-30.1-11.8-63.4   c-1.6-36-2-46.8-2-137.9s0.3-101.9,2-137.9c1.5-33.3,7.1-51.4,11.8-63.4c6.2-15.9,13.6-27.3,25.5-39.2   c11.9-11.9,23.3-19.3,39.2-25.5c12-4.7,30.1-10.2,63.4-11.8C398.1,220.5,408.9,220.2,500,220.2 M500,158.7   c-92.7,0-104.3,0.4-140.7,2.1c-36.3,1.7-61.1,7.4-82.9,15.9C254,185.3,234.9,197,216,216c-19,19-30.6,38-39.4,60.5   c-8.4,21.7-14.2,46.5-15.9,82.9s-2.1,48-2.1,140.7s0.4,104.3,2.1,140.7c1.7,36.3,7.4,61.1,15.9,82.9C185.3,746,197,765.1,216,784   c19,19,38,30.6,60.5,39.4c21.7,8.4,46.5,14.2,82.9,15.9s48,2.1,140.7,2.1s104.3-0.4,140.7-2.1c36.3-1.7,61.1-7.4,82.9-15.9   C746,814.7,765.1,803,784,784c19-19,30.6-38,39.4-60.5c8.4-21.7,14.2-46.5,15.9-82.9s2.1-48,2.1-140.7s-0.4-104.3-2.1-140.7   c-1.7-36.3-7.4-61.1-15.9-82.9C814.7,254,803,234.9,784,216c-19-19-38-30.6-60.5-39.4c-21.7-8.4-46.5-14.2-82.9-15.9   C604.3,159.1,592.7,158.7,500,158.7L500,158.7z"
          />
          <path
            fill="#f66233"
            d="M500,324.7c-96.8,0-175.3,78.5-175.3,175.3S403.2,675.3,500,675.3S675.3,596.8,675.3,500   S596.8,324.7,500,324.7z M500,613.8c-62.8,0-113.8-50.9-113.8-113.8s51-113.8,113.8-113.8S613.8,437.1,613.8,500   S562.8,613.8,500,613.8z"
          />
          <circle fill="#f66233" cx="682.2" cy="317.8" r="41" />
        </g>
      </svg>
    </div>
  );
};
