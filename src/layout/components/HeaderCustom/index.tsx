import { createComponent, onMounted } from "@vue/composition-api";
import "./index.less";

export default createComponent({
  setup() {
    return () => <a-layout-header>Header</a-layout-header>;
  }
});
