// localStorageUtils.js
export const getUserData = () => {
    const usersData = localStorage.getItem('users');
    const loggedInUserEmail = localStorage.getItem('loggedInUser');

    if (usersData && loggedInUserEmail) {
        const users = JSON.parse(usersData);
        return users.find((user) => user.email === loggedInUserEmail);
    }
    return null;
};

export const saveUserData = (user) => {
    const usersData = localStorage.getItem('users');
    if (usersData) {
        const users = JSON.parse(usersData);
        const updatedUsers = users.map((u) =>
            u.email === user.email ? user : u
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
};

export const addChallengeToUser = (newChallenge) => {
    const user = getUserData();
    if (user) {
        user.ongoingChallenges.push(newChallenge);
        saveUserData(user);
    }
};
