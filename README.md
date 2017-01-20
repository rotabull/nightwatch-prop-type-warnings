# nightwatch-prop-type-warnings
Custom nightwatch test that fails when a React app raises PropType warnings

React PropType warnings are silent and only show up as console errors, so are often overlooked by end-to-end testing frameworks like nightwatch. This module provides a test that checks for React PropType warnings in the console and fails if it finds any.

### Installation and configuration

Ensure you have installed nightwatch, selenium, and any other dependencies your framework needs. For more information, visit http://nightwatchjs.org/getingstarted#installation.

You can install the module using npm:

```
npm install nightwatch-prop-type-warnings
```

Then, open your project's nighwatch.json file and edit the `custom_assertions_path` key like so:

```json
{
	...

	"custom_assertions_path" : "node_modules/nightwatch-prop-type-warnings/assertions"

	...
}
```

If everything is done correctly, the PropType warning assertion should be included with your other tests when you run the testing framework (eg. `nightwatch --test`)

### Alternative forms of installation

`cd` into your nightwatch testing directory (eg. `tests/e2e`) and clone this repository:

```
git clone https://github.com/helintel/nightwatch-prop-type-warnings
```

Follow the configuration steps above, replacing `node_modules` with the correct path to the React Proptype warning tests.