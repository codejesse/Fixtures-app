import { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { io } from "socket.io-client";

const socket = io("/");

export default function FixturesList() {
  const [records, setRecords] = useState([]);

  //function to refresh window after 15secs
  //TO DO: use sockets to initiate a reload when a score change is made
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 60000);
  // }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        `https://fixtures-app-api.vercel.app/record`
      );
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
    }
    getRecords();
    socket.on("updateMatches", getRecords);

    return () => {
      socket.off("updateMatches", getRecords);
    };
    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`https://fixtures-app-api.vercel.app/record/${id}`, {
      method: "DELETE",
    });
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  console.log(records);

  // This following section will display the table with the records of individuals.
  return (
    <>
      <div className="bg-gray-200 h-10">
        <p className="m-auto text-lg font-semibold p-2">Match fixtures</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        {records.length <= 0 ? (
          <div className="flex flex-col p-20 my-auto">
            <h1 className="text-[40px]">...</h1>
            <h1>No fixtures available</h1>
          </div>
        ) : (
          <div>
            <button
              className="border py-2 px-4 rounded-full"
              onClick={handleRefresh}
            >
              &#8635; Refresh to update
            </button>
            {records.map((record) => {
              return (
                <div className="border rounded-lg mt-2 grid grid-cols-3">
                  <div className="flex flex-col lg:flex-row sm:flex-col p-4">
                    <img
                      className="h-10 w-10 m-auto lg:w-10 lg:m-0"
                      src="/SEES.jpg"
                      alt=""
                    />
                    <h2 className="flex flex-row text-center text-ellipsis overflow-hidden ...">
                      {record.teamA}
                    </h2>
                  </div>
                  <div className="flex flex-col p-4">
                    <h1 className="font-bold text-[25px]">
                      {record.scoreA} : {record.scoreB}
                    </h1>
                    {/* <CountdownTimer
                      date={record.date}
                      timerStarted={record.timerStarted}
                    /> */}
                  </div>
                  <div className="flex flex-col lg:flex-row sm:flex-col p-4">
                    <img
                      className="h-10 w-10 m-auto lg:w-10 lg:m-0"
                      src="/SEES.jpg"
                      alt=""
                    />
                    <h2 className="flex flex-row text-center text-ellipsis overflow-hidden ...">
                      {record.teamB}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
