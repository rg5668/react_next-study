import { useState } from "react";
import classes from "./profile-form.module.css";

function ProfileForm(props) {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setPassword({
      ...password,
      [name]: value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    props.onChangePassword({
      oldPassword: password.oldPassword,
      newPassword: password.newPassword,
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          name="newPassword"
          value={password.newPassword || ""}
          onChange={changeHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input
          type="password"
          id="old-password"
          name="oldPassword"
          value={password.oldPassword || ""}
          onChange={changeHandler}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
