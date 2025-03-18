import React from "react";

const Text = (props) => {
  const { size = "small", color = "black", children = "text" } = props;
  const defaultClass =
    "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2";

  const classes = {
    colors: {
      primary: "text-red-500",
      secondary: "text-white",
    },
    sizes: {
      small: "text-xs",
      medium: "text-xl",
      large: "text-3xl",
    },
  };

  return (
    <div
      className={
        defaultClass + " " + classes.sizes[size] + " " + classes.colors[color]
      }
    >
      {children}
    </div>
  );
};

export default Text;
