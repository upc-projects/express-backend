# express-backend

To use the integrations tests , it's recommend to truncate all the tables with this command :

```TRUNCATE sch.mytable RESTART IDENTITY CASCADE;```

### To run the following tests, use these commands:

```
for coverage: npx jest --coverage
for unit test: npm run jest
for integration test: npm run test
for system test: mocha
for deploying jenkins: go to jenkins.war root directory and open cmd and enter: java -jar jenkins.war
credentials: admin jenkins (jenkins)
credentials: admin p@ssw0rd (artifactory)
```
