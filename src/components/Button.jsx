const Button = ({ display, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {display}
    </button>
  );
};

export default Button;
