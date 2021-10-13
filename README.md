# foobar2000-webplayer

This is the React half of a foobar2000 Web Player. Requires [foobar2000](https://www.foobar2000.org/) & the [HTTP Control](https://wiki.hydrogenaud.io/index.php?title=Foobar2000:Components_0.9/HTTP_Control_(foo_httpcontrol)) component at the very least. This project is mostly in an exploratory phase...

---

## Instructions

1. With the HTTP Control plugin alongside a foobar2000 installation, navigate to %USERPROFILE%\AppData\Roaming\foobar2000\foo_httpcontrol_data and copy the `server` folder in there, then rename it.

2. Create a `.env` with the following:

```conf
NODE_ENV=development
BROWSER=none
PORT=3000
PUBLIC_URL=/
REACT_APP_FOOBAR_SERVER_URL=http://localhost:8888/(foldername)
```

3. Under `REACT_APP_FOOBAR_SERVER_URL`, change (foldername) to the name of the server folder from step 1

4. Open the foobar2000 preferences and find the HTTP Control page under Tools. Make sure the server is running on port 8888.

4. Run the dev server of the react app with `yarn start`, open the page in your browser.

---

## References

[hydrogenaudio thread](https://hydrogenaud.io/index.php?topic=62218.1100)
[Macros](https://bitbucket.org/oblikoamorale/foo_httpcontrol/wiki/Macros)
[Commands](https://bitbucket.org/oblikoamorale/foo_httpcontrol/wiki/Commands)