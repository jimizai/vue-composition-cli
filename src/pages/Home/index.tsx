import { createComponent, onMounted } from "@vue/composition-api";

export default createComponent({
  setup() {
    onMounted(() => {
      console.log("hello home");
    });

    return () => (
      <div>
        <a-button>Default</a-button>
      </div>
    );
  }
});
