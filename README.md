# The Discord Vote Delete Bot!
## A Democratic Form of Moderation

Allows users to vote for which messages they would like to delete, by checking emoji reactions on a message every time a reaction is added, if 3 of an emoji named "deletebot" are added to a message, the bot will delete that message.

## Setup:
1. Clone repo
2. Install the discord.js package
```
npm install discord.js
```
3. Create an application with Discord, retrieve your token, and paste it within the string argument for the login function on index.js
4. Add the vote delete bot your server, make sure it has permission to read and delete messages
5. Add a custom emoji to your server and name it "deletebot", you can use the image I attached to the repository as your emoji or another image of your choice, as long as it is named "deletebot" (alternatively, you could change the string it is checking emoji.name against in index.js so that it checks for an emoji name of your choice).
6. Start the project
```
node index.js
```
