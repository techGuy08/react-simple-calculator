const Button = function (props) {
  const { onClick, className, id, text } = props;
  return (
    <button onClick={onClick} className={className} id={id}>
      {text}
    </button>
  );
};

export default Button;
