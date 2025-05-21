import React from "react";
const patients = [
  {
    id: 1,
    name: "Alice Johnson",
    hospitalId: "HSP-1001",
    hospitalRoom: "Ward A",
    sickness: "Flu",
    doctorVisitTime: "09:30 AM",
    roomNumber: 12,
  },
  {
    id: 2,
    name: "Brian Kim",
    hospitalId: "HSP-1002",
    hospitalRoom: "Ward B",
    sickness: "Fractured Arm",
    doctorVisitTime: "10:15 AM",
    roomNumber: 8,
  },
  {
    id: 3,
    name: "Clara Evans",
    hospitalId: "HSP-1003",
    hospitalRoom: "Ward C",
    sickness: "Appendicitis",
    doctorVisitTime: "11:00 AM",
    roomNumber: 5,
  },
  {
    id: 4,
    name: "David Smith",
    hospitalId: "HSP-1004",
    hospitalRoom: "Ward D",
    sickness: "Pneumonia",
    doctorVisitTime: "08:45 AM",
    roomNumber: 14,
  },
  {
    id: 5,
    name: "Emily Turner",
    hospitalId: "HSP-1005",
    hospitalRoom: "Ward A",
    sickness: "Migraine",
    doctorVisitTime: "12:00 PM",
    roomNumber: 3,
  },
  {
    id: 6,
    name: "Frank Moore",
    hospitalId: "HSP-1006",
    hospitalRoom: "Ward B",
    sickness: "Broken Leg",
    doctorVisitTime: "01:30 PM",
    roomNumber: 6,
  },
  {
    id: 7,
    name: "Grace Lee",
    hospitalId: "HSP-1007",
    hospitalRoom: "Ward C",
    sickness: "Asthma",
    doctorVisitTime: "10:45 AM",
    roomNumber: 9,
  },
  {
    id: 8,
    name: "Henry Adams",
    hospitalId: "HSP-1008",
    hospitalRoom: "Ward D",
    sickness: "Diabetes",
    doctorVisitTime: "11:30 AM",
    roomNumber: 11,
  },
  {
    id: 9,
    name: "Ivy Nguyen",
    hospitalId: "HSP-1009",
    hospitalRoom: "Ward A",
    sickness: "Hypertension",
    doctorVisitTime: "09:00 AM",
    roomNumber: 2,
  },
  {
    id: 10,
    name: "Jack Wilson",
    hospitalId: "HSP-1010",
    hospitalRoom: "Ward B",
    sickness: "Kidney Stones",
    doctorVisitTime: "02:00 PM",
    roomNumber: 7,
  },
  {
    id: 11,
    name: "Kara Patel",
    hospitalId: "HSP-1011",
    hospitalRoom: "Ward C",
    sickness: "Concussion",
    doctorVisitTime: "03:15 PM",
    roomNumber: 10,
  },
  {
    id: 12,
    name: "Liam Brooks",
    hospitalId: "HSP-1012",
    hospitalRoom: "Ward D",
    sickness: "Covid-19",
    doctorVisitTime: "08:00 AM",
    roomNumber: 15,
  },
  {
    id: 13,
    name: "Mia Davis",
    hospitalId: "HSP-1013",
    hospitalRoom: "Ward A",
    sickness: "Ear Infection",
    doctorVisitTime: "01:00 PM",
    roomNumber: 1,
  },
  {
    id: 14,
    name: "Noah James",
    hospitalId: "HSP-1014",
    hospitalRoom: "Ward B",
    sickness: "Back Pain",
    doctorVisitTime: "02:45 PM",
    roomNumber: 13,
  },
  {
    id: 15,
    name: "Olivia Chen",
    hospitalId: "HSP-1015",
    hospitalRoom: "Ward C",
    sickness: "Stomach Ulcer",
    doctorVisitTime: "11:15 AM",
    roomNumber: 4,
  },
  {
    id: 16,
    name: "Paul Reed",
    hospitalId: "HSP-1016",
    hospitalRoom: "Ward D",
    sickness: "Sprained Ankle",
    doctorVisitTime: "03:30 PM",
    roomNumber: 16,
  },
  {
    id: 17,
    name: "Queenie Park",
    hospitalId: "HSP-1017",
    hospitalRoom: "Ward A",
    sickness: "Tonsillitis",
    doctorVisitTime: "09:45 AM",
    roomNumber: 17,
  },
  {
    id: 18,
    name: "Ryan Blake",
    hospitalId: "HSP-1018",
    hospitalRoom: "Ward B",
    sickness: "Bronchitis",
    doctorVisitTime: "10:30 AM",
    roomNumber: 18,
  },
  {
    id: 19,
    name: "Sophia White",
    hospitalId: "HSP-1019",
    hospitalRoom: "Ward C",
    sickness: "Skin Rash",
    doctorVisitTime: "01:45 PM",
    roomNumber: 19,
  },
  {
    id: 20,
    name: "Tyler Green",
    hospitalId: "HSP-1020",
    hospitalRoom: "Ward D",
    sickness: "Allergy",
    doctorVisitTime: "12:30 PM",
    roomNumber: 20,
  },
];

const Patients = () => {
  return (
    <div className="details">
      <h1>Patient Entries</h1>
      {patients.map((information) => {
        return <Data key={information.id} {...information} />;
      })}
    </div>
  );
};

const Data = ({
  name,
  hospitalId,
  hospitalRoom,
  sickness,
  doctorVisitTime,
  roomNumber,
}) => {
  return (
    <div className="entries">
      <h2>
        {" "}
        {"Patient Name:"} {name}{" "}
      </h2>
      <p>
        {" "}
        {"Patient hospitalId:"} {hospitalId}{" "}
      </p>
      <p>
        {" "}
        {"Patient hospitalRoom:"} {hospitalRoom}{" "}
      </p>
      <h3>
        {" "}
        {"Patient sickness:"}
        {sickness}{" "}
      </h3>
      <p>
        {" "}
        {"Patient doctorVisitTime:"}
        {doctorVisitTime}{" "}
      </p>
      <p>
        {" "}
        {"Patient roomNumber:"}
        {roomNumber}{" "}
      </p>
    </div>
  );
};
export default Patients;
