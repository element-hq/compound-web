FROM mcr.microsoft.com/playwright:v1.41.1-jammy
WORKDIR /work/compound-web
USER testrunner
ENTRYPOINT ["node", "node_modules/playwright/cli.js", "test"]
