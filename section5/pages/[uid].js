function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;

  //req 요청, res 응답

  return {
    props: {
      id: "유저 아이디 = " + userId,
    },
  };
}
