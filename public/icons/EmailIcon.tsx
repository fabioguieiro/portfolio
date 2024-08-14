import { IconProps } from "./types";
export const EmailIcon = ({
  size = 30,
  color = "white",
  onClick,
}: IconProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <svg
        id="Layer_1"
        version="1.1"
        viewBox="0 0 128 128"
        width={size}
        height={size}
      >
        <g>
          <circle fill={color} cx="64" cy="64" r="64" />
        </g>
        <g>
          <g>
            <path d="M64,28" />
          </g>
        </g>
        <g>
          <g>
            <path
              fill="#f66233"
              d="M64,72.4l38.2-32.7c-0.6-0.4-1.4-0.7-2.2-0.7H28c-0.8,0-1.6,0.3-2.2,0.7L64,72.4z"
            />
          </g>
          <g>
            <path
              fill="#f66233"
              d="M66.6,75.4c-1.5,1.3-3.7,1.3-5.2,0L24,43.5V85c0,2.2,1.8,4,4,4h72c2.2,0,4-1.8,4-4V43.4L66.6,75.4z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
