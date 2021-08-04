import { defaultModules, defaults, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
defaults.mode = "light";
defaults.closerHover = true;
defaults.delay = 3000;
defaultModules.set(PNotifyMobile, {});

function NotificationError(message) {
  return error({
    text: message,
    addClass: "notification",
  });
}

export default NotificationError;
