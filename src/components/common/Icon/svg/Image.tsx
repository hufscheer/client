import { ComponentProps } from 'react';

interface IconProps extends ComponentProps<'svg'> {}

export const Image = ({
  width = '48',
  height = '48',
  viewBox = '0 0 48 48',
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
        d="M48 42.6667V5.33333C48 2.4 45.6 0 42.6667 0H5.33333C2.4 0 0 2.4 0 5.33333V42.6667C0 45.6 2.4 48 5.33333 48H42.6667C45.6 48 48 45.6 48 42.6667ZM14.6667 28L21.3333 36.0267L30.6667 24L42.6667 40H5.33333L14.6667 28Z"
        fill="currentColor"
      />
    </svg>
  );
};
