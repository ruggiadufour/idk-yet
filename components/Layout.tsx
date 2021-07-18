import { useEffect } from "react";

import { useRouter } from "next/router";
import NProgress from "nprogress";
import nProgress from "nprogress";

//Component that encloses all the pages/routes
export default function Layout({ children }) {
  const router = useRouter();
  useEffect(() => {
    //Setting nProgress (shows a loading bar when the route is changin)
    const handleRouteChange = (url) => {
      NProgress.start();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => nProgress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className="body">
      <div className="container">{children}</div>
      <style jsx>{`
        .body {
          height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .container {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background-color: white;
        }
      `}</style>
    </div>
  );
}
