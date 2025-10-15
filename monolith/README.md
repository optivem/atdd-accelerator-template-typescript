# System - Monolith (TypeScript)

## Instructions

1. Open up the 'monolith' folder in Visual Studio Code (make sure it is at the root of your project)

2. Check that you have Node.js 20 installed
```shell
node -v
```

3. Install dependencies

```shell
npm install
```

4. Install NestJS CLI

```shell
npm install -g @nestjs/cli
```

5. Restart Visual Studio Code

6. Build the application

```shell
npm run build
```

Set the port
```shell
$env:PORT=8080
```

7. Run the application

```shell
npm run start
```

8. Restart the application

```shell
$env:PORT=8080
npm run build && npm run start
```