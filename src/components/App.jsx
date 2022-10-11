import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './Transaction/transactions.json';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.topText}>TASK 1</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <h1 className={css.topText}>TASK 2</h1>
      <h2 className={css.headerText}>part 1</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2 className={css.headerText}>part2</h2>
      <Statistics stats={data} />

      <h1 className={css.topText}>TASK 3</h1>
      <FriendList friends={friends} />

      <h1 className={css.topText}>TASK 4</h1>
      <TransactionHistory items={transactions} />
    </div>
  );
};
