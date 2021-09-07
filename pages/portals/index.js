import Header from "../../components/header";
import Footer from "../../components/footer";
import Loginbody from "../../components/loginbody";
const Products = ({ posts }) => {
  return (
    <>
      <Header />
      <Loginbody posts={posts} />
      <Footer />
    </>
  );
};

export default Products;

export async function getStaticProps() {
  const res = await fetch("http://18.206.203.63:5000/api/logins");
  const result = await res.json();

  return {
    props: {
      posts: result,
    },
  };
}
