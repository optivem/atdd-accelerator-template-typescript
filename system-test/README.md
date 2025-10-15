# System Test (TypeScript)

## Instructions

1. Open up the 'system-test' folder in Visual Studio Code (make sure it is at the root of your project)

2. Setup

```shell
npm install
```

3. Install Playwright

```shell
npx playwright install
```

4. Restart Visual Studio Code

5. Start Docker Containers

```shell
docker compose up -d
```

6. Run All Tests

```shell
npm test
```

7. Run Smoke Tests Only

```shell
npm test -- test/smoke-tests
```

8. Stop Docker Containers

```shell
docker compose down
```
