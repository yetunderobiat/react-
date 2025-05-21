import React from "react";

const friends = [
  { id: 1, name: "Alex", age: 24 },
  { id: 2, name: "Maya", age: 22 },
  { id: 3, name: "Jordan", age: 25 },
  { id: 4, name: "Sam", age: 23 },
  { id: 5, name: "Liam", age: 21 },
];

const Friends = () => {
  return (
    <div>
      {friends.map((data) => {
        return <FriendsData key={data.id} {...data} />;
      })}
    </div>
  );
};

const FriendsData = ({name, age}) => {
  return (
    <div>
      <p>
        {name} {age}
      </p>
    </div>
  );
};
export default Friends;
