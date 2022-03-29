import Profil from "../pages/Profil";
import React, { useEffect, useState } from "react"
import User from "../Models/User";
import Performance from "../Models/Performance";
import Sessions from "../Models/Sessions";
import Activity from "../Models/Activity";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:3000/user/12').then(resp => resp.json()),
      fetch('http://localhost:3000/user/12/performance').then(resp => resp.json()),
      fetch('http://localhost:3000/user/12/average-sessions').then(resp => resp.json()),
      fetch('http://localhost:3000/user/12/activity').then(resp => resp.json()),
    ]).then(
        (result) => {
          const user = new User(result[0].data.id, result[0].data.userInfos, result[0].data.todayScore, result[0].data.score, result[0].data.keyData);
          const performance = new Performance(result[0].data.id, result[1].data.kind, result[1].data.data);
          const sessions = new Sessions(result[0].data.id, result[2].data.sessions);
          const activity = new Activity(result[0].data.id, result[3].data.sessions);
          const items = {user: user, performance: performance, sessions: sessions, activity: activity};
          setItems(items);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }, [])

  if (error) {
    return <div className="fail">Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="App">
        <Profil data={items}/>
      </div>
    );
  }
}

export default App;
