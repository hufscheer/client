import { ComponentProps } from 'react';

interface IconProps extends ComponentProps<'svg'> {}

export const Symbol = ({
  width = '94',
  height = '150',
  viewBox = '0 0 372 591',
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M294.816 405.078c25.25-10.742 36.786-40.191 26.934-65.785L203.703 32.437C193.676 6.372 164.395-6.64 138.305 3.384 112.21 13.398 99.19 42.656 109.223 68.727l54.37 141.332c4.829 12.546-1.437 26.629-14.003 31.46l-6.465 2.485c-12.559 4.824-26.66-1.441-31.488-13.988L97.914 194.34c-10.027-26.067-39.312-39.074-65.406-29.055-26.09 10.012-39.11 39.274-29.078 65.34l126.16 327.938c10.027 26.066 39.312 39.078 65.406 29.058 26.09-10.02 39.11-39.273 29.078-65.34l-58.633-152.41c-4.832-12.547 1.438-26.637 14.004-31.46l6.465-2.485c12.559-4.82 26.66 1.441 31.485 13.988l10.308 26.8c10.25 26.645 40.606 39.65 67.113 28.368"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M321.863 430.477c-27.668 0-50.093 22.41-50.093 50.05 0 27.641 22.425 50.047 50.093 50.047 27.664 0 50.086-22.406 50.086-50.047 0-27.64-22.43-50.05-50.086-50.05"
        fill="currentColor"
      />
    </svg>
  );
};
