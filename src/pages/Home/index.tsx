import { createComponent, onMounted } from "@vue/composition-api";
import { useQuery } from "vue-rest-hooks";

export default createComponent({
  setup() {
    const getToken = (params: { name: string }): Promise<{ name: string }> =>
      new Promise(resolve => {
        resolve(params);
      });

    const { loading, data, error } = useQuery<
      { name: string },
      { name: string }
    >(getToken as any, {
      variables: {
        name: "123123"
      }
    });

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
