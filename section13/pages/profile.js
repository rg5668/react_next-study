import { getSession } from "next-auth/react";
import UserProfile from "../components/profile/user-profile";

function ProfilePage() {
  return <UserProfile />;
}

// url로 접근 했을때 잠깐의 로딩 시간이 거슬린다면 SSR로 처리가 가능하다.
// 프롭스를 내려주지 않고 페이지 내에서 아예 접근 불가 처리가 가능하다.
// getServerSideProps가 인증되엇을 경우에만 렌더링
export async function getServerSideProps(context) {
  // 사용자 인증이 되었는지 확인
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        // 리다이렉트 경로를 설정할 수 있는키
        destination: "/auth",
        // 영구적으로 적용되는지 임시의 리다이렉트인지 설정
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default ProfilePage;
