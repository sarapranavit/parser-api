# parser-api

Base Setup - Parser API 
-----------------------

1. Clone Parser API from github
    https://github.com/sarapranavit/parser-api.git

2. Run npm install

3. Once dependices are installed , To start project - npm start

4. Server running on Port 3000

4. API EndPoints 
        Post http://localhost:3000/api/v1/parse
        Post http://localhost:3000/api/v2/parse


Post Body Request Validaition
-----------------------------

   The Post Request payload format should be /^[a-zA-Z]+0+[a-zA-Z]+0+[1-9]{5,10}/ 

    <Alphabets><delimiter/splittter><Alphabets><Spliter><Numbers 1-9>

    Delimeter/Splitter - should be one are more than 0s 

        ex: JOHN0000MICHAEL0009994567
            JOH00MICHAEL009994567
            mani00Raj09994567


Code Coverage
-------------
   1. To run and check the unit test case
        npm run test

  2. Code coverage report
    
        npm run coverage

After run command check the /coverage/index.html 