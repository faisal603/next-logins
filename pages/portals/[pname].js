import Header from "../../components/header";
import Footer from "../../components/footer";
import Bodywrap from "../../components/bodywrap";
import Sidebar from "../../components/sidebar";
const Postname = ({ post }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto columns is-flex-wrap-wrap">
        <div className="column is-9">
          <Bodywrap>
            <h1>
              {post.name} {post.postfix}
            </h1>
            <br />
            <p>
              Looking for{" "}
              <span className="var-color-change">
                {post.name} {post.postfix}
              </span>{" "}
              ? Get direct access to Option Trade through official links
              provided below.
            </p>
            <div>
              <b>Follow these easy steps:</b>
              <br />
              Step 1. Go to
              <b>
                {" "}
                {post.name} {post.postfix}{" "}
              </b>
              page via official link below.
              <br />
              Step 2. Login using your username and password. Login screen
              appears upon successful login.
              <br />
              Step 3. If you still can't{" "}
              <b>
                {" "}
                {post.name} {post.postfix}{" "}
              </b>
              Page then see Troublshooting options here.
            </div>
          </Bodywrap>
        </div>
        <div className="column is-3 mt-5">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Postname;

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `http://18.206.203.63:5000/api/logins/${params.pname}`
  );
  const result = await res.json();

  return {
    props: {
      post: result,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          pname: "humana",
        },
      },
    ],
    fallback: "blocking",
  };
}
