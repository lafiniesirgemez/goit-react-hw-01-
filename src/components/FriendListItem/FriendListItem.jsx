import style from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.cardContainer}>
      <img src={avatar} width="48" />
      <p className={style.name}>{name}</p>
      <p className={style.status} style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;