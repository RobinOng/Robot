enum Direction {
  EAST = "E",
  NORTH = "N",
  SOUTH = "S",
  WEST = "W",
}

interface Position {
  x: number;
  y: number;
}

function move({ x, y }: Position, direction: Direction): Position {
  switch (direction) {
    case Direction.EAST:
      return { x: Math.min(x + 1, 9), y };
    case Direction.NORTH:
      return { x, y: Math.min(y + 1, 9) };
    case Direction.SOUTH:
      return { x, y: Math.max(y - 1, 0) };
    case Direction.WEST:
      return { x: Math.max(x - 1, 0), y };
    default:
      throw new Error("Invalid direction");
  }
}

export default function execute(commands: string) {
  let currentPosition = { x: 0, y: 0 };

  const commandList = commands.split(" ");
  for (const command of commandList) {
    currentPosition = move(currentPosition, command as Direction);
  }

  console.log(`Commands ran: ${commands}. Final position: ${JSON.stringify(currentPosition)}`);
}
