import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";

import Launch from "./Launch";

// Init VK  Mini App
bridge.send("VKWebAppInit");
bridge.send("VKWebAppGetLaunchParams");

ReactDOM.render(<Launch />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
