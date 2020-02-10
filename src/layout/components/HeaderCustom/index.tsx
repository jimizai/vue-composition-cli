import { createComponent, onMounted } from "@vue/composition-api";
import "./index.less";

export default createComponent({
  setup() {
    return () => (
      <div class="main-header">
        <div class="d-flex align-items-center justify-content-between">
          <div>wqe</div>
          <div>asdas</div>
        </div>
      </div>
    );
  }
});
