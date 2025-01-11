import { forwardRef, useState } from "react";
import classNames from "classnames";
import images from "~/assets/images";
import styles from "./Image.module.scss";

const Image = forwardRef(
  ({ src, fallback: customFallback = images.noImage, alt,className , ...prop }, ref) => {
    const [fallBack, setFallBack] = useState("");

    const handleFallBack = () => {
      setFallBack(customFallback);
    };

    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        {...prop}
        onError={handleFallBack}
        src={fallBack || src}
        alt={alt}
      />
    );
  }
);

export default Image;
