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

to deploy finish app can be seen in link:
https://bottender.js.org/docs/advanced-guides-deployment
