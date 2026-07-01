import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import user from "./components/userData.json";
import friends from "./components/friends.json";
import transactions from "./components/transaction.json";

export const App = () => {
  return (
    <>
      <div className="profile-container">
        <Profile
          name={UserData.username}
          tag={UserData.tag}
          location={UserData.location}
          image={UserData.avatar}
          stats={UserData.stats}
        ></Profile>
      </div>

      <div>
        <FriendList friends={friends} />
      </div>

      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};