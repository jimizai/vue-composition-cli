import { createComponent } from "@vue/composition-api";
import "./style/reset.less";
import "./style/bootstrap.css";
import "./style/theme.less";

export default createComponent({
  name: "App",
  setup() {
    return () => (
      <div id="app">
        <router-view />
      </div>
    );
  }
});
