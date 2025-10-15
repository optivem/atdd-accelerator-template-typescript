# System - Monolith (TypeScript)

## Instructions

Open up the 'monolith' folder

```shell
cd monolith
```

Check that you have Powershell 7

```shell
$PSVersionTable.PSVersion
```

Check that you have Node.js 22 installed

```shell
node -v
```

Install dependencies

```shell
npm install
```

Install NestJS CLI

```shell
npm install -g @nestjs/cli
```

Build the application

```shell
npm run build
```

Set the port

```shell
$env:PORT = "8080"
```

Run the application

```shell
npm run start
```

Restart the application

```shell
npm run build && npm run start
```