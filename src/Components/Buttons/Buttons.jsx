import Button from "../Button/Button";
import btns from "./btns";

const Buttons = function ({
  onNumberClick,
  onOperatorClick,
  onEqualsClick,
  onClearClick,
  output,
}) {
  const clickMethods = {
    number: onNumberClick,
    operator: onOperatorClick,
    equals: onEqualsClick,
    clear: onClearClick,
  };
  return (
    <div className="grid-row calculator-buttons">
      {btns.map(function (el, i) {
        const handleClick = clickMethods[el.type];
        return (
          <div
            className={`col-${el.col || 1} ${el.row ? "row-" + el.row : ""}`}
            key={i}
          >
            <Button
              onClick={handleClick}
              className={el.type}
              id={el.id}
              text={el.text}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Buttons;
