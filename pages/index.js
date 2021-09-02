import Header from "../components/header";
import Footer from "../components/footer";
import Homebody from "../components/Homebody";

import Sidebar from "../components/sidebar";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto columns is-flex-wrap-wrap">
        <div className="column is-9">
          <Homebody />
        </div>
        <div className="column is-3 mt-5">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
