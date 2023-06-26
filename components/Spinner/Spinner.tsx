type Props = {
  color?: string;
  size?: string;
};

function Spinner({ color = 'white', size = '5' }: Props) {
  let styles = `border-${color} h-${size} w-${size}`;

  return (
    <div
      className={`animate-spin rounded-full border-4 border-solid border-t-transparent ${styles}`}
    />
  );
}

export default Spinner;
