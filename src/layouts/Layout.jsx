import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Footer, Header } from "../components";

const Layout = () => {
  return (
    <>
      <Helmet>
        <title>TimeWatch</title>
        <meta name="description" content="India’s Trusted Security System Provider" />
      </Helmet>

      <Header/>
      <main className="min-h-[80vh] p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
