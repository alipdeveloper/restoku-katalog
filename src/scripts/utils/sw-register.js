import runtime from "serviceworker-webpack-plugin/lib/runtime";

const swRegister = async () => {
  if ("serviceWorker" in navigator) {
    await runtime.register();
    return;
  }
  console.log("Service worker not supported in the browser");
};

export default swRegister;
