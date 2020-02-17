import { createComponent, onMounted, watch } from "@vue/composition-api";
import { useQuery } from "vue-rest-hooks";

const sleep = (time: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, time));

export default createComponent({
  setup(props, ctx) {
    const getToken = (params: { name: string }): Promise<{ name: string }> =>
      new Promise(resolve => {
        resolve(params);
      });
    const { loading, refetch } = useQuery(sleep as any, { variables: 3000 });

    return () => (
      <div>
        <a-button
          loading={loading.value}
          onClick={() => {
            refetch({ variables: 1000 });
          }}
        >
          Default
        </a-button>
      </div>
    );
  }
});
