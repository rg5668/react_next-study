import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSession().then((data) => {
  //     if (!data) {
  //       // 데이터 정보 (session)이 없다면 로그인 페이지로 이동
  //       window.location.href = "/auth";
  //     } else {
  //       // 정보가 있다면 false를 하고 profileForm을 보여줌
  //       setIsLoading(false);
  //     }
  //     console.log(data);
  //   });
  // }, []);

  // if (isLoading) {
  //   // 세션 정보를 불러들일때 잠깐의 로딩 상태가 있다.
  //   return <p className={classes.profile}>loading</p>;
  // }

  async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      // ProfileFrom에서 객체로 전달받은 old, new password
      // 해당은 부모컴포넌트이지만 해당 컴포넌트에서 작업해도 된다.
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
