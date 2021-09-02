import Header from "../../components/header";
import Footer from "../../components/footer";
import Bodywrap from "../../components/bodywrap";
const Postid = ({ post }) => {
  return (
    <div>
      <Header />
      <Bodywrap>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Bodywrap>
      <Footer />
    </div>
  );
};

export default Postid;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          postid: "1",
        },
      },
      {
        params: {
          postid: "2",
        },
      },
      {
        params: {
          postid: "3",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const result = await res.json();

  return {
    props: {
      post: result,
    },
  };
}
