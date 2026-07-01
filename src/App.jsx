import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import user from "./components/userData.json";
import friends from "./components/friends.json";
import transactions from "./components/transaction.json";

const App = () => {
  return (
    <>
      <div className="profile-container">
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          image={user.avatar}
          stats={user.stats}
        />
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

export default App;