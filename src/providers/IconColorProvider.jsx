import PropTypes from "prop-types";
import { useState, useMemo } from "react";
import IconColorContext from "@/context/IconColorContext";

const initialColor = ["0.13", "0.31"];

function IconColorProvider({ children }) {
  const [iconColor, setIconColor] = useState({
    youtube: initialColor,
    facebook: initialColor,
    instagram: initialColor,
    twitter: initialColor,
  });

  const changeHoverColor = (color) => {
    setIconColor((prevIconColor) => ({
      ...prevIconColor,
      ...color,
    }));
  };

  const contextValue = useMemo(
    () => ({ iconColor, changeHoverColor }),
    [iconColor]
  );

  return (
    <IconColorContext.Provider value={contextValue}>
      {children}
    </IconColorContext.Provider>
  );
}

IconColorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IconColorProvider;
