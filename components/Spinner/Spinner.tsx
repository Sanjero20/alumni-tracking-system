type Props = {
  color?: string;
  size?: string;
};

function Spinner({ color = 'text-white', size = '6' }: Props) {
  const spinnerSize = `h-${size} w-${size}`;

  return (
    <div
      className={`${spinnerSize} animate-spin rounded-full border-4 border-solid border-white border-t-transparent`}
    />
  );
}

export default Spinner;
