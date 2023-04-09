interface ButtonProps {
  children: React.ReactNode;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  onclick,
}) => {
  return (
    <button
      className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded "
      onClick={onclick}
    >
      {children}
    </button>
  );
};
