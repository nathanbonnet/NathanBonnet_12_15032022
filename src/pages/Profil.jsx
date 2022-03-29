import React from 'react';
import '../styles/_profil.scss';
import Header from '../components/Header';
import NavVertical from '../components/NavVertical';
import Hello from '../components/Hello';
import Activity from '../components/Activity';
import Intensity from '../components/Intensity';
import Time from '../components/Time';
import Score from '../components/Score';
import Info from '../components/Info';
import PropTypes from 'prop-types';


/**
 * Créate page Profil
 * @param { object } session - return the objects ( performance, activity, users, sessions )
 */
const Profil = (session) => {
    console.log(session.data, "test")
    return (
        <div className="profil">
            <Header />
            <NavVertical />
            <div className="bloc-content">
                <div className="content">
                    <Hello name={session.data.user.userInfos.firstName} />
                    <div className="bloc-diagramme">
                        <div className="bloc-diagramme-left">
                            <div className="bloc-activity">
                                <Activity activity={session.data.activity.sessions}/>
                            </div>
                            <div className="bloc-session">
                                <Time time={session.data.sessions.sessions}/>
                                <Intensity keyData={session.data.performance}/>
                                <Score todayScore={session.data.user.todayScore} score={session.data.user.score} />
                            </div>
                        </div>
                        <div className="bloc-info">
                            <Info data={`${session.data.user.keyData.calorieCount} g`} category="Calories"/>
                            <Info data={`${session.data.user.keyData.proteinCount} g`} category="Proteines"/>
                            <Info data={`${session.data.user.keyData.carbohydrateCount} g`} category="Glucides"/>
                            <Info data={`${session.data.user.keyData.lipidCount} g`} category="Lipides"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;

Profil.propTypes = {
    name: PropTypes.string,
    activity: PropTypes.array,
    time: PropTypes.array,
    keyData: PropTypes.number,
    todayScore: PropTypes.number,
    score: PropTypes.number,
    data: PropTypes.string,
}