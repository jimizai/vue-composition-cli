import { createComponent } from "@vue/composition-api";
import HeaderCustom from "./components/HeaderCustom";

export default createComponent({
  setup() {
    return () => (
      <div className="app-container">
        <a-layout>
          <HeaderCustom />
          <a-layout-content>
            <router-view />
          </a-layout-content>
          <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
      </div>
    );
  }
});
