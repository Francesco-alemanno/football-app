import React from "react";
import useSWR from "swr";

// Function to fetch data from the API
const fetcher = (url) => fetch(url).then((res) => res.json());

export function Home() {
  const { data, error } = useSWR(
    "https://api.openligadb.de/getmatchdata/bl1/2020/1",
    fetcher
  );

  if (error) {
    return <div>Error loading data...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <h3>Match Data for Bundesliga 2020 (Season 1)</h3>
      <div className="result-container">
        {data.map((match) => (
          <div className="table">
            <span>
                <img key={match.teamId} src={match.team1.teamIconUrl} width={40} alt="" />
              <p key={match.teamId}>{match.team1.shortName}</p>
            </span>
            <h4>VS</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
