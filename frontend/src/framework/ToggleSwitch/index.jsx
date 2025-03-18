import { styled, Switch } from "@mui/material";
import PropTypes from "prop-types";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

const ToggleSwitch = (props) => {
  const {
    label,
    color = "default",
    defaultChecked = false,
    iosSwitch = false,
    checked = false,
    handleChange = () => {},
  } = props;
  if (iosSwitch) {
    return (
      <div>
        <IOSSwitch
          {...label}
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    );
  }
  return (
    <div>
      <Switch
        {...label}
        defaultChecked={defaultChecked}
        color={color}
        checked={checked}
        onChange={handleChange}
        sx={{ "aria-label": "controlled" }}
      />
    </div>
  );
};

export default ToggleSwitch;

ToggleSwitch.propTypes = {
  label: PropTypes.object,
  color: PropTypes.string,
  defaultChecked: PropTypes.bool,
  iosSwitch: PropTypes.bool,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
};
