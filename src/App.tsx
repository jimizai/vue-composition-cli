import { createComponent } from "@vue/composition-api";

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
