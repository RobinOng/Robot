# Robot

This robot has been installed in the warehouse, and it allows you to send commands to control its movement within the warehouse grid.

## Description

The warehouse robot moves along a grid on the warehouse roof, and the grid dimensions are standardized to 10 by 10. The warehouses are aligned along north-south and east-west axes. This control system is designed to keep the robot within the confines of the warehouse grid, preventing it from moving outside the boundaries.

All commands to the robot consist of a single capital letter, and different commands are separated by whitespace.

### Supported commands

The robot responds to the following commands:

- **N**: Move north
- **W**: Move west
- **E**: Move east
- **S**: Move south


## Usage

Ensure you have Node.js installed on your machine.

After cloning this repository, you can follow the steps below to send commands to the robot.

**Step 1:** Install dependencies with:
```sh
npm install
```

**Step 2:** You can then add the commands you want the robot to execute in `src/index.ts`. 

**Step 3:** Run the file:

* **Option 1: Using ts-node**\
You can use `ts-node`, which is an executable that allows you to directly run TypeScript files without explicitly compiling them to JavaScript.

```sh
npx ts-node src/index.ts
```

* **Option 2: Compile & Run the JavaScript file**
1. First compile the TypeScript file into Javascript file with:
```sh
npm run build
```

2. Then, run the generated JavaScript file with:
```sh
node dist/index.js
```

## Development
Ensure you have Node.js installed on your machine.

Once you've cloned the repository, you can start developing with it.

Install this with:
```sh
npm install
```

Then, run all the tests with:
```sh
npm run test
```

You may also check test coverage with:
```sh
npm run test:coverage
```

