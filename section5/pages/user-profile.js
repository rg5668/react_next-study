function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

// 요청시만 생성, 사전에 생성되지 않고 서버에서만 작동
export async function getServerSideProps(context) {
  return {
    props: {
      username: "MAX",
    },
  };
}
