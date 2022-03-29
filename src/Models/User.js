class User {
    id;
    userInfos;
    todayScore;
    score
    keyData;
    constructor(id, userInfos, todayScore, score, keyData) {
        this.id = id;
        this.userInfos = userInfos;
        this.todayScore = todayScore;
        this.score = score;
        this.keyData = keyData;
    }
}

export default User;