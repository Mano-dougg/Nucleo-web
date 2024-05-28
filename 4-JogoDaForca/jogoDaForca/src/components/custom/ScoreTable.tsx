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
          <TableRow>
            <TableCell className="font-medium">Jogador1</TableCell>
            <TableCell>100</TableCell>
            <TableCell>60%</TableCell>
            <TableCell>40%</TableCell>
            <TableCell>57%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Visitante</TableCell>
            <TableCell>50</TableCell>
            <TableCell>60%</TableCell>
            <TableCell>40%</TableCell>
            <TableCell>57%</TableCell>
          </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>150</TableCell>
          <TableCell>60%</TableCell>
          <TableCell>40%</TableCell>
          <TableCell>57%</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default ScoreTable;
