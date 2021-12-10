
# nodebot messanger 

https://expressbot1.herokuapp.com/
https://expressbot1.herokuapp.com/webhooks/messenger
this projek use bottender as base

example of application can be seen in :
https://web.facebook.com/NodeBot-101030169107012/?view_public_for=101030169107012&_rdc=1&_rdr

list of all message can be seen in: youromain/messages
    example:
    https://expressbot1.herokuapp.com/messages
get sepesifisik meseges:youromain/messages/messages_id
      example:
      https://expressbot1.herokuapp.com/messages/3

delete sepesifisik meseges: htttp DELETE youromain/messages/messages_id
      example:
      DELETE https://expressbot1.herokuapp.com/messages/3

how to config:
1. fill in Environment Configuration
# .env
MESSENGER_PAGE_ID=
MESSENGER_ACCESS_TOKEN=
MESSENGER_APP_ID=
MESSENGER_APP_SECRET=
MESSENGER_VERIFY_TOKEN=

2. Prepare MESSENGER_APP_ID and MESSENGER_APP_SECRET
Traverse to Your Facebook Apps → \${Your App Page} → Settings → Basic.

You can see your App ID and App Secret. Facebook will ask your Facebook password again before display your App Secret. Fill these two values to MESSENGER_APP_ID and MESSENGER_APP_SECRET in .env.

![alt text](https://user-images.githubusercontent.com/662387/71390359-fe9ecc80-263a-11ea-9a3a-e7188992e471.png)

3. Prepare MESSENGER_PAGE_ID and MESSENGER_ACCESS_TOKEN​

First, please make sure that you have added Messenger as a product of your Facebook App.
![alt text](https://user-images.githubusercontent.com/662387/71392717-19297380-2644-11ea-9bea-4362d0cc72c3.png)

4. Traverse to Your Facebook Apps → \${Your App Page} → Messenger → Settings → Access Tokens. Add your Facebook Page to your Facebook App.
 ![alt text](https://user-images.githubusercontent.com/662387/71392720-19c20a00-2644-11ea-9961-97b39fef24c2.png)
5. Once you have added your Facebook Page for your App, you can find the Facebook ID. Click the Generate Token button to generate Messenger Access Token.
   ![alt text](https://user-images.githubusercontent.com/662387/71392721-19c20a00-2644-11ea-8b61-ea3f97296b5e.png)
6.Facebook has a strict security policy. You can only have one chance to save your Access Token. Remember to have your access token copied before closing the Token Generated pop up. If you forgot or lost your Access Token, the only thing you can do is to revoke a new one.

![alt text](https://user-images.githubusercontent.com/662387/71392723-1a5aa080-2644-11ea-874d-0d21b1e0da17.png)
7. Prepare MESSENGER_VERIFY_TOKEN​

You can define your Verify Token in the filed of MESSENGER_VERIFY_TOKEN in .env. This token is for Facebook to confirm the origin of the response is from your bot server.
![alt text](https://user-images.githubusercontent.com/662387/71392880-cb613b00-2644-11ea-928f-7941a6d955d0.png)

                            #Deploy to heroku
                            
##Heroku​

Heroku is one of the most popular hosting services. Not only the clear document, ease of scalability, using Git for deployment, but also the friendly free pricing plan for experiment purpose.

In the following, you can see the necessary steps of Heroku Deployment:
###Step 1: Create a Heroku Account and Download Heroku CLI​

First, sign up a Heroku account if you haven't, then download and install Heroku CLI.

    Note: For the full command list, please refer to Heroku's doc, Heroku CLI Commands.

###Step 2: Heroku Login and Create a Heroku App​

Before going further, make sure you have login your Heroku account by:

heroku login

Then, you can create a Heroku app by the below command.

heroku create <your-heroku-app-name>

    Note: You may see some app name regulation if you don't meet it. For example: Name must start with a letter, end with a letter or digit and can only contain lowercase letters, digits, and dashes

Once you created your Heroku app successfully, you could see a deployment address for your app like https://<your-heroku-app-name>.herokuapp.com/. You can note it down for the coming webhook setting.
###Step 3: Fill in Environment Variables to Heroku​

Config the environment variables of your Heroku app with the following commands: heroku config:set -a <your-heroku-app-name> <ENV_KEY_01>=<ENV_VALUE_01>.

For chat channels require multiple environment variables, you may use commands like heroku config:set -a <your-heroku-app-name> <ENV_KEY_01>=<ENV_VALUE_01> <ENV_KEY_02>=<ENV_VALUE_02>.

For example:

heroku config:set -a <your-heroku-app-name> MESSENGER_PAGE_ID=xxxxxx MESSENGER_ACCESS_TOKEN=xxxxxx MESSENGER_APP_ID=xxxxxx MESSENGER_APP_SECRET=xxxxxx MESSENGER_VERIFY_TOKEN=xxxxxx

###Step 4: Using Git in Your Bottender App​

Deployment of Heroku depends on Git. Make sure you have run git init and make the first commit in your Bottender app.

For example:

git init
git add .
git commit -am "first commit"

###Step 5: Deploy Your Bot to Heroku and Set Up Webhook​

When you try to set up the webhook, some chat channels (e.g., Messenger) might ask for an immediate bot server verification. So, we recommend you to set up the webhook after your Bottender app server running.

There are two basic types of webhook setup:

    Set up webhook by Developer Console UI, e.g., Messenger, LINE, Slack
    Set up webhook by CLI, e.g., Messenger, Telegram, Viber

###Step 5a: Set Up Webhook by UI of Developer Console​

Use Heroku CLI by Git push to complete the deployment.

heroku git:remote -a <your-heroku-app-name>
git push heroku master

Then fill in your webhook URL on the developer console of the chat channel.

    Note: If you are not familiar with webhook setup, you may refer to Bottender docs, Messenger Setup, LINE Setup, and Slack Setup.

    Note: If you haven't changed your webhook path in bottender.config.js, by default, your Messenger Bot webhook is https://<your-heroku-app-name>.herokuapp.com/webhooks/messenger; your LINE Bot webhook is https://<your-heroku-app-name>.herokuapp.com/webhooks/line, etc.

###Step 5b: Set Up Webhook by CLI​

You can benefit from the Procfile feature of Heroku, which specifies the commands executed by the app on startup. We are going to use two process types of Procfile:

    web process type: tell Heroku to run your bot server for every dyno
    release process type: set up webhook before a new release is deployed to production

    Note: For more information about Procfile, see The Procfile.

Using a Messenger Bot as an example, the Procfile looks like the below with default webhook path settings:

// Procfile

web: npm start
release: echo "Y" | npx bottender messenger webhook set -w https://<your-heroku-app-name>.com/webhooks/messenger

    Note:

        The echo "Y" aims to answer the first interactive CLI prompt
        If you haven't changed your webhook path in bottender.config.js, by default, your Messenger Bot webhook is https://<your-heroku-app-name>.herokuapp.com/webhooks/messenger; your LINE Bot webhook is https://<your-heroku-app-name>.herokuapp.com/webhooks/line, etc.

Finally, You can use Heroku CLI by Git push to complete the deployment and let Heroku runs the Procfile to help you finish the webhook setup.

heroku git:remote -a <your-heroku-app-name>
git push heroku master

###Step 6: Completed!​          
                  

to deploy finish app can be seen in link:
https://bottender.js.org/docs/advanced-guides-deployment
