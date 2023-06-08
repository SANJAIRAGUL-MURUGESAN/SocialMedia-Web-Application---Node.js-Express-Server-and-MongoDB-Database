TO START APPLICATION

* NODE has to be Installed.


* NPM has to be Installed

    =>  INSTALL NPM COMMAND - npm install


* NPM has to started

    =>  RUN COMMAND - npm start




REGISTRATION API

* The Request for Registration API is of 'POST' Method which includes Request_Body of Data as User-FirstName, User-LastName, User-MiddleName, User-UserID, User-Gender, User-Age, User-PhoneNumber, User-Email,User-Password will be Passed.
* Once the Request is Listened by API , then the Username will be fetched and validated.That is, it is checked from the DataBase whether the provided UserName is already existing in DataBase, If so, then the Response will be sent as an JSON Format with an message of String as Username Already Exists.
* If the Username does not exists, then the provided Data of Request Body will be added into the DataBase in Appropriate Field Name and the Response will be of JSON Format containing of Provided Username. 

LOGIN IN API

* The Request for Login API is also of 'POST' Method which includes Request_Body of Data as Users-UserID, Users-UserPassword.
* Then the Request_API which containing UserID and UserPassword will be Validated and Verified.
* It is Validated that if the UserID already exists in the DataBase. If not, then the response will be of JSON Format containing Data of 'Invalid UserName' as Text.
* If the UserName exists in the DataBase, then the UserName Row will be Fetched, then from the Row UserPassword will be Validated and Verified with the Request Provided Data and Existing Data in DataBase.
* Then if both the Data are Equal then the Response will be of JSON Format as Data containing 'Login Successful' as Text.

TO CREATE TWEET API

* The Request for Tweet API is also of 'POST' Method which includes Request_Body of Data as Tweet created UserId, Tweet created Message, Tweet created Date.
* Then the Tweet will be Stored in DataBase in separate Collection named 'TWEETS'.
* Here, Before Storing the Tweet Message, UserID will be verified that, whether the User is Logged In or NOT.If not, then the Response will be to Login In.
* If Logged In, then the Request_Body Data will be Stored in the Collection named 'TWEETS'.
* After Storing, Response will be of JSON Format as 'Tweeted Successfully'.

TO VIEW OR LIST TWEET APIS

* The Request for Viewing or Listing All created Tweets by the Users of Whole Application is of 'GET' Method.
* Then the Response will be JSON Format which includes of All created Tweets by the Users in the Whole Application which will be Fetched from the Database-Collection named 'TWEETS'.

TO DELETE TWEET API

* The Request for Deleting an Tweet Done By an User will be 'POST' Method which includes Request_Body of Data as Users-UserID and Tweets-TweetID.
* Then the Particular Tweet of the Request_Body UserId will be Fetched from the DataBase-Collection named 'TWEETS' using Unique TweetID Key.
* Then Row if Tweet Done by the Request_Body UserId will be Removed from the Collection.
