import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  onClick,
  href,
  children,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  iconLeft = false,
  iconRight = false,
}) {
  let Comp = "button";
  const props = [onClick];

  // if(disabled){
  //   Object.keys(props).forEach(key => {
  //     if(key.startsWith('on') && typeof props[key] === 'function'){
  //       delete props[key];
  //   }});
  // }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    Comp = "a";
    props.href = href;
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    iconLeft,
    iconRight,
    
  });

  return (
    <Comp className={classes} {...props}>
      {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
      <span className={cx('title')}>{children}</span>
      {iconRight && <span className={cx('icon')}>{iconRight}</span>}
    </Comp>
  );
}

export default Button;
