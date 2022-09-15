import { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submithandler = (event) => {
    // 기본 동작을 하지 않게함.
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddr = addressInputRef.current.value;
    const enteredDesc = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      Image: enteredImage,
      address: enteredAddr,
      description: enteredDesc,
    };

    //부모 컴포넌트에 meetupData 전달
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submithandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          />
        </div>

        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
