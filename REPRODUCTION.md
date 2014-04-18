**Data not found template should not be shown when data function returns an object.**

1. Start meteor
2. Make sure you're on the root / path.
3. In the console set Session.set('ready', true)

Expected: not found template should not be shown because data function
returns and object.

Actual: As expected.

**Data not found template should be shown when data function returns a falsy value.**

4. Refresh page to reset Session
5. Navigate to /bogusdata
6. See Item from item template on screen
7. Set Session.set('ready', true)

Expected: Not Found is on screen because data function returns a falsy value
(null in this case).

Actual: As expected.
