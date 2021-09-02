import Header from "../components/header";
import Footer from "../components/footer";
import Myhome from "../components/myhome";

import Sidebar from "../components/sidebar";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto columns is-flex-wrap-wrap">
        <div className="column is-9">
          <Myhome />
        </div>
        <div className="column is-3 mt-5">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
