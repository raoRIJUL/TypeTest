import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Select from "../utils/Select";
import {
  TRAINER_MODE
} from "../../constants/Constants";
import { Link } from "@mui/material";
import {
  GITHUB_TOOLTIP_TITLE,
  AUTHOR,
  GITHUB_REPO_LINK,
} from "../../constants/Constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';

const FooterMenu = ({
  themesOptions,
  theme,
  handleThemeChange,
  isTrainerMode,
  toggleTrainerMode,
}) => {

  const getModeButtonClassName = (mode) => {
    if (mode) {
      return "zen-button";
    }
    return "zen-button-deactive";
  };

  return (
    <div className="footer">
      <Grid container justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="row">
          <Select
            classNamePrefix="Select"
            value={themesOptions.find((e) => e.value.label === theme.label)}
            options={themesOptions}
            isSearchable={false}
            isSelected={false}
            onChange={handleThemeChange}
            menuPlacement="top"
          ></Select>

          
          <IconButton onClick={toggleTrainerMode}>
            <Tooltip title={TRAINER_MODE}>
              <span className={getModeButtonClassName(isTrainerMode)}>
                <KeyboardAltOutlinedIcon fontSize="medium"></KeyboardAltOutlinedIcon>
              </span>
            </Tooltip>
          </IconButton>
        </Box>

          <Box display="block" flexDirection="row">
            <Tooltip
              title={
                <span style={{ whiteSpace: "pre-line", fontSize:"12px" }}>
                  {GITHUB_TOOLTIP_TITLE}
                    <Link
                      margin="inherit"
                      href="https://jayant07-portfolio.netlify.app/"
                    >
                      {AUTHOR}
                    </Link>
                    <Link
                      margin="inherit"
                      href="https://github.com/jayantsB123/TypeSpeed"
                    >
                      {GITHUB_REPO_LINK}
                    </Link>
                </span>
              }
              placement="top-start"
            >
              <IconButton
                href="https://github.com/jayantsB123/TypeSpeed"
                color="inherit"
              >
                <GitHubIcon></GitHubIcon>
              </IconButton>
            </Tooltip>
          </Box>
      </Grid>
    </div>
  );
};

export default FooterMenu;
