import { parseStoredUsers } from "@/utils/useLocalStorage";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "../ui/table";

function ScoreTable() {
  const allUsers = parseStoredUsers();
  const allPlayers = allUsers.length;
  const initialScore = {
    allGames: 0,
    allWins: 0,
    allLosses: 0,
    allPrecision: 0,
  }
  const score = allUsers.reduce(
    (accumulator, user) => {
      accumulator.allGames += user.totalGames || 0
      accumulator.allWins += user.gamesWon || 0
      accumulator.allLosses += user.gamesLost || 0
      accumulator.allPrecision += user.precision || 0
      return accumulator;
    }, initialScore,
  );
  const finalScore = {...score, allPrecision: (score.allPrecision / allPlayers), allPlayers}

  return (
    <Table className="text-center">
      <TableCaption>Placar</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Jogadores</TableHead>
          <TableHead>Jogos</TableHead>
          <TableHead>Vitórias</TableHead>
          <TableHead>Derrotas</TableHead>
          <TableHead>Precisão</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allUsers && allUsers.map((user) =>
          <TableRow key={crypto.randomUUID()}>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.totalGames}</TableCell>
            <TableCell>{user.gamesWon}</TableCell>
            <TableCell>{user.gamesLost}</TableCell>
            <TableCell>{`${user.precision?.toFixed(2)}%`}</TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
          <TableRow>
            <TableCell>{finalScore.allPlayers}</TableCell>
            <TableCell>{finalScore.allGames}</TableCell>
            <TableCell>{finalScore.allWins}</TableCell>
            <TableCell>{finalScore.allLosses}</TableCell>
            <TableCell>{`${finalScore.allPrecision?.toFixed(2)}%`}</TableCell>
          </TableRow>
      </TableFooter>
    </Table>
  );
}

export default ScoreTable;
