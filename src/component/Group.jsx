import React from 'react'

const GroupsData = [
    {
      id: 1,
      age: 25,
      race: "Asian",
      height: "5'7\"",
      country: "Japan",
    },
    {
      id: 2,
      age: 30,
      race: "Black",
      height: "6'1\"",
      country: "USA",
    },
    {
      id: 3,
      age: 22,
      race: "White",
      height: "5'9\"",
      country: "Germany",
    },
    {
      id: 4,
      age: 28,
      race: "Latino",
      height: "5'10\"",
      country: "Brazil",
    },
    {
      id: 5,
      age: 26,
      race: "Middle Eastern",
      height: "6'0\"",
      country: "Egypt",
    },
  ];

const Group = () => {
  return (
    <div>
      {GroupsData.map((Details)=>{
        return <GroupInfo key={Details.id} {...Details}/>
      })}
    </div>
  )
}

const GroupInfo = ({age, race, height, country}) =>{
    return(
        <div>
            <p>
                {age}
                {race}
            </p>
        </div>
    )
}
export default Group
