https://expressbot1.herokuapp.com/
https://expressbot1.herokuapp.com/webhooks/messenger

example of application can be seen in :
https://web.facebook.com/NodeBot-101030169107012/?view_public_for=101030169107012&_rdc=1&_rdr

how to use:
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
https://user-images.githubusercontent.com/662387/71390359-fe9ecc80-263a-11ea-9a3a-e7188992e471.png
