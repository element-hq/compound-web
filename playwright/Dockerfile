# This must be kept in sync with the version of ubuntu used in the GitHub
# Actions workflow, in .github/workflows/analysis.yml, and the playwright
# version in package.json
FROM mcr.microsoft.com/playwright:v1.58.1-noble

# Switch to a non-root user with the same IDs as those of the user on the host
# system, to avoid needlessly giving the tests root access
ARG UID
ARG GID
RUN groupmod -og $GID pwuser
RUN usermod -ou $UID -g $GID pwuser
USER pwuser

WORKDIR /work/compound-web
ENTRYPOINT ["node", "node_modules/playwright/cli.js", "test"]
