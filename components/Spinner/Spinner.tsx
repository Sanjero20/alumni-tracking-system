type Props = {
  className?: string;
};

function Spinner({ className = 'border-white h-5 w-5' }: Props) {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-solid border-t-transparent ${className}`}
    />
  );
}

export default Spinner;
