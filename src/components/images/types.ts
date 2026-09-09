import type { ImageProps } from "next/image";

/** Everything next/image accepts except what each wrapper hardcodes. */
export type TImageProps = Omit<ImageProps, "src" | "alt" | "width" | "height">;

/** Wrappers that let the caller override the rendered size. */
export type TSizedImageProps = TImageProps & {
  width?: number;
  height?: number;
};
