function calculateLeaderboardPlaces(users, minScores) {
  const sortedUsers = [...users].sort((a, b) => b.score - a.score);
  const result = [];

  let place = 1;
  let currentPosition = 1;

  for (let i = 0; i < sortedUsers.length; i++) {
    const { userId, score } = sortedUsers[i];

    if (score >= minScores.firstPlaceMinScore) {
      place = 1;
    } else if (score >= minScores.secondPlaceMinScore) {
      if (place < 2) place = 2;
    } else if (score >= minScores.thirdPlaceMinScore) {
      if (place < 3) place = 3;
    } else {
      if (place < currentPosition) place = currentPosition;
    }

    result.push({ userId, place });
    currentPosition++;
  }

  return result;
}
