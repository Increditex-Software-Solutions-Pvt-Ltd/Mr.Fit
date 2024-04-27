import React from "react";

const TableComponent = ({ groupName, groupData }) => (
  <table style={{ marginBottom: "50px" }} className="table table-striped">
    <thead>
      <tr>
        <th>Group {groupName}</th>
        <th>GP</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>PTS</th>
      </tr>
    </thead>
    <tbody>
      {groupData.teams.map((team) => (
        <tr className="EuroStandings" key={team.name}>
          <td className="d-flex align-items-center">
            <div>
              <img
                src={team.logo}
                alt={team.name}
                width="25px"
                style={{ marginRight: "5px" }}
              />
            </div>

            <span> {team.name}</span>
          </td>
          <td>{team.GP}</td>
          <td>{team.W}</td>
          <td>{team.D}</td>
          <td>{team.L}</td>
          <td>{team.GF}</td>
          <td>{team.GA}</td>
          <td>{team.GD}</td>
          <td>{team.PTS}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default TableComponent;
