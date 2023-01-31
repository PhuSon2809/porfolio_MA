import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { ThemeContext } from "../../../features/ThemeContext";

const CloseButton = styled(Button)({
    padding: "0 1rem",
    height: "40px",
    lineHeight: "40px",
    textTransform: "capitalize",
    fontSize: "1rem",
    fontWeight: 500,
    color: "white",
    display: "block",
    backgroundColor: "#fb2576",
    borderRadius: "999px",
    "&:hover": {
      backgroundColor: "#fb5091",
    },
  });

function Modal({ isOpen, setIsOpen, image }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Dialog
        sx={{
          ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            width: "590px",
            maxWidth: "590px",
            background: theme.backgroundColor,
          },
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DialogContent sx={{ width: "100%" }}>
          <img
            src={image.img}
            alt={image.title}
            loading="lazy"
            style={{ width: "100%" }}
          />
        </DialogContent>
        <DialogActions>
          <CloseButton onClick={() => setIsOpen(false)} autoFocus>
            Close
          </CloseButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
