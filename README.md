# QuantFlow

TO RUN THE APP:

1. Create your postgresql database on your computer and set up your users
2. Start the postgresql server (varies based on what machine you're using)
3. Create the .env file (see the .env.example file for format) (when you create the database it must be called 'quantflow')
4. cd into backend, run 'node index.js'
5. In new terminal window (don't close the other one) cd into frontend and run 'npm start'
6. Should be working (should display a time)

NOTES:
- The port is on port 5001, NOT 5000
- Run 'npm install' on backend or frontend if you haven't already (after first cloning it)
- Can access database at localhost 5001 and frontend at localhost 3000