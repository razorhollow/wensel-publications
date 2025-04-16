import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "/about",
    file: "routes/About.jsx"
  }
] satisfies RouteConfig;
