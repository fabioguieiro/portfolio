import { IconProps } from "./types";

/**
 * Same knockout construction as InstagramIcon: the envelope is cut out of the
 * disc so the surface behind the icon shows through it exactly, instead of
 * being painted in a hardcoded colour that only matched the tomato footer.
 */
const MASK_ID = "email-glyph-knockout";

export const EmailIcon = ({
  size = 30,
  color = "white",
  onClick,
}: IconProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width={size}
        height={size}
      >
        <mask id={MASK_ID} maskUnits="userSpaceOnUse">
          <rect width="128" height="128" fill="white" />
          <path
            fill="black"
            d="M64,72.4l38.2-32.7c-0.6-0.4-1.4-0.7-2.2-0.7H28c-0.8,0-1.6,0.3-2.2,0.7L64,72.4z"
          />
          <path
            fill="black"
            d="M66.6,75.4c-1.5,1.3-3.7,1.3-5.2,0L24,43.5V85c0,2.2,1.8,4,4,4h72c2.2,0,4-1.8,4-4V43.4L66.6,75.4z"
          />
        </mask>

        <circle fill={color} mask={`url(#${MASK_ID})`} cx="64" cy="64" r="64" />
      </svg>
    </div>
  );
};
