import { toast } from "react-toastify";

export default function useToast() {
  const notify = (event, message) => {
    switch (event) {
      case "reset":
        toast("Test Reset!", resetToastSettings);
        break;
      case "practice":
        toast("Practice Mode Enabled!", practiceToastSettings);
        break;
      case "test":
        toast("Test Mode Enabled!", testToastSettings);
        break;
      case "mute":
        toast("Unmuted", muteToastSettings);
        break;
      case "dark":
        toast("Changed Theme", darkToastSettings);
        break;
      default:
        toast(`${message}`);
    }
  };
  return notify;
}

const resetToastSettings = {
  position: "top-center",
  autoClose: 200,
};

const practiceToastSettings = {
  position: "top-center",
  autoClose: 1000,
};

const testToastSettings = {
  position: "top-center",
  autoClose: 1000,
};

const muteToastSettings = {
  position: "bottom-center",
  autoClose: 1000,
};

const darkToastSettings = {
  position: "bottom-center",
  autoClose: 250,
};
