import { createComponent } from "@vue/composition-api";

export default createComponent({
  setup() {
    return () => <div className="not-found">not-found</div>;
  }
});
