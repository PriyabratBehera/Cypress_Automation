const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const fs = require('fs')


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));

//For mochawesome report
  // on('before:run', async (details) => {
  //   console.log('override before:run');
  //   await beforeRunHook(details);
  // });

  // on('after:run', async () => {
  //   console.log('override after:run');
  //   await afterRunHook();
  // });
  require('cypress-mochawesome-reporter/plugin')(on);

  on('after:spec', (spec, results) => {
    if (results && results.video) {
      // Do we have failures for any retry attempts?
      const failures = results.tests.some((test) =>
        test.attempts.some((attempt) => attempt.state === 'failed')
      )
      if (!failures) {
        // delete the video if the spec passed and no tests retried
        fs.unlinkSync(results.video)
      }
    }
  })
// },
// },
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  // retries:{
  //   runMode: 1, // If any test fail the rerun the failed test case
  // },
  e2e: {
    // specPattern: "cypress/integration/features/*.feature",
    specPattern: "cypress/integration/features/test.feature",
    step_defination:"cypress/support/step_definations/*.js",
    setupNodeEvents,
  },
});