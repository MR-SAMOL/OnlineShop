import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <Child
        data={[
          { id: 101,
             name: "Kaka",
              position: "Kampot",
               salary: 500,
                action: "IT" },

          { id: 102,
             name: "Nita",
              position: "Phnom Penh",
               salary: 600,
                action: "HR" },

          { id: 103,
             name: "Dara",
              position: "Siem Reap",
               salary: 700,
                action: "Finance" },

          { id: 104,
             name: "Sokha",
              position: "Battambang",
               salary: 550,
                action: "Marketing" },

          { id: 105,
             name: "Rathana",
              position: "Takeo",
               salary: 800,
                action: "Manager" },

          { id: 106,
             name: "Vannak",
              position: "Kandal",
               salary: 650,
                action: "Developer" },

          { id: 107,
             name: "Sophea",
              position: "Kampong Cham",
               salary: 750,
                action: "Designer" },

          { id: 108,
             name: "Mony",
              position: "Prey Veng",
               salary: 900,
                action: "Director" },

          { id: 109,
             name: "Pisey",
              position: "Svay Rieng",
               salary: 620,
                action: "Support" },

          { id: 110,
             name: "Sothy",
              position: "Kampong Speu",
               salary: 580,
                action: "Admin" },
        ]}
      />
    </div>
  );
};

export default Parent;
