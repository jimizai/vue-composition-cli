import Layout from "@/layout";

const appsRouter = {
  path: "/app",
  component: Layout,
  children: [
    {
      path: "/",
      component: () => import("@/pages/Home")
    }
  ]
};

export default appsRouter;
