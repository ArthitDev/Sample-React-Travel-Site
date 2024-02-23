import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = ({ handleScrollToTop }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      onClick={handleScrollToTop}
      style={{
        position: "fixed",
        bottom: "70px",
        right: "20px",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      <FontAwesomeIcon icon={faArrowCircleUp} size="3x" color="teal" />
    </motion.div>
  );
};

export default ScrollToTopButton;
