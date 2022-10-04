import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/Button";
import classes from "./EventItem.module.css";
import Image from "next/image";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      {/* Image 브라우저에 최적화되게 파일 사이즈를 줄여주고 확장자명을 바꿔준다. */}
      {/* 또 반응형일경우 필요한 데이터만 로드(해당사이즈만)한다. 크기가 늘어나고 줄어들면 다시 불러온다. */}
      <Image src={"/" + image} alt={title} width={350} height={160} />
      {/* <img src={"/" + image} alt={title} /> */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          {/* <Link href={exploreLink}>Explore Event</Link> */}

          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
