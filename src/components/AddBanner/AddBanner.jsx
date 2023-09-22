import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./AddBanner.module.css";

function AddBanner({ imageNum }) {
  const [imagePath, setImagePath] = React.useState(null);

  React.useEffect(() => {
    const loadImage = async () => {
      try {
        const imagePathURL = await import(
          `../../assets/AddImage/addimage_${imageNum}.jpg`
        );
        return imagePathURL.default;
      } catch (error) {
        throw new Error(error);
      }
    };

    loadImage().then(setImagePath);
  }, [imageNum]);

  if (!imagePath) {
    return null;
  }

  return (
    <div className={styles.addBanner}>
      <h3 className="a11yHidden">광고</h3>
      <Link to="/home">
        <div>
          <img src={imagePath} alt="광고배너" />
        </div>
      </Link>
    </div>
  );
}

AddBanner.propTypes = {
  imageNum: PropTypes.number.isRequired,
};

export default AddBanner;
