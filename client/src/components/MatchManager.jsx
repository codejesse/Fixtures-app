import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Match = (props) => (
  <div className="border bg-white">
    <p className="">{props.record.teamA}</p>
    <div className="flex gap-2">
      <Link
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
        to={`/edit/${props.record._id}`}
      >
        Edit
      </Link>
      <Link
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
        onClick={() => {
          props.startTimer(props.record._id);
        }}
      >
        Start match
      </Link>
      <button
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
        color="red"
        type="button"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </div>
  </div>
);

export default function MatchManager() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://fixtures-app-api.vercel.app/record/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
    }
    getRecords();
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

  async function startTimer(id) {
    await fetch(`https://fixtures-app-api.vercel.app/record/${id}/start-timer`, {
      method: "PATCH", //RED FLAG lol
    });
    const updatedMatches = records.map((m) =>
      m._id === id ? response.data : m
    );
    setRecords(updatedMatches);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          startTimer={() => startTimer(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <>
      <div className="flex justify-end">
        <NavLink
          className="inline-flex items-center mb-4 justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          to="/create"
        >
          Create Match
        </NavLink>
      </div>
      <div className="bg-gray-200 h-10">
        <p className="m-auto text-lg font-semibold p-2">Match manager</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        {records.length <= 0 ? (
          <div className="flex flex-col p-20 my-auto">
            <h1 className="text-[40px]">...</h1>
            <h1>No fixtures available</h1>
          </div>
        ) : (
          <div>
            {records.map((record) => {
              return (
                <Match
                  record={record}
                  deleteRecord={() => deleteRecord(record._id)}
                  key={record._id}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
