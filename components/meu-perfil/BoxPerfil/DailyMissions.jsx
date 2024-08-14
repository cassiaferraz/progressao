import { useState, useEffect } from 'react';

function DailyMissions() {
  const [missions, setMissions] = useState([]);
  const [moedas, setMoedas] = useState(parseInt(sessionStorage.getItem('usermoedas')) || 0);

  useEffect(() => {
    
    const dailyMissions = [
      { id: 1, description: 'Complete 5 tarefas', reward: 100 },
      { id: 2, description: 'Faça login 3 dias consecutivos', reward: 200 },
    ];
    setMissions(dailyMissions);
  }, []);

  const completeMission = (missionId) => {
    const mission = missions.find(m => m.id === missionId);
    if (mission) {
      setMoedas(moedas + mission.reward);
      sessionStorage.setItem('usermoedas', moedas + mission.reward);
      alert(`Missão completada! Você ganhou ${mission.reward} moedas.`);
    }
  };

  return (
    <div>
      <h3>Missões Diárias</h3>
      <ul>
        {missions.map(mission => (
          <li key={mission.id}>
            {mission.description}
            <button onClick={() => completeMission(mission.id)}>Completar</button>
          </li>
        ))}
      </ul>
      <div>Moedas: {moedas}</div>
    </div>
  );
}

export default DailyMissions;