type TMarqueeProps = {
  text: string;
};

/**
 * The ticker band that closes the contacts page. The phrase is repeated twice
 * inside each half and the track scrolls exactly half its width, so the loop is
 * seamless; the duplicate half is hidden from screen readers.
 */
export const Marquee = ({ text }: TMarqueeProps) => {
  return (
    <div className="w-full overflow-hidden border-y-4 border-fieldInk bg-tomato text-fieldInk py-2">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <span
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 font-primary text-sm font-bold uppercase tracking-[0.22em]"
          >
            {[0, 1].map((i) => (
              <span key={i} className="px-6">
                {text} <span aria-hidden="true">✳</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};
