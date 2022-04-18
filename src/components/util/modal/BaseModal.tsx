import { Box, IconButton, Modal, Paper, SvgIcon } from "@mui/material";
import React from "react";

export interface BaseModalProps {
  open: boolean;
  children: React.ReactNode;
  setOpen: (value: boolean) => void;
  withCloseButton?: boolean;
  contentMaxWidth?: number;
}

export const BaseModal = ({
  open,
  setOpen,
  withCloseButton = true,
  contentMaxWidth = 420,
  children,
  ...props
}: BaseModalProps) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ".MuiPaper-root": {
          outline: "none",
        },
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      {...props}
      data-cy={"Modal"}
    >
      <Paper
        sx={{
          position: "relative",
          margin: "10px",
          overflowY: "auto",
          width: "100%",
          maxWidth: { xs: "359px", xsm: `${contentMaxWidth}px` },
          maxHeight: "calc(100vh - 20px)",
          p: 6,
        }}
      >
        {children}

        {withCloseButton && (
          <Box
            sx={{ position: "absolute", top: "24px", right: "50px", zIndex: 5 }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                p: 0,
                minWidth: 0,
                position: "absolute",
                bgcolor: "background.paper",
              }}
              onClick={handleClose}
            >
              <SvgIcon sx={{ fontSize: "28px", color: "text.primary" }}>
                X
              </SvgIcon>
            </IconButton>
          </Box>
        )}
      </Paper>
    </Modal>
  );
};
