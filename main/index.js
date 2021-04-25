const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

client.once("ready", () => {
  console.log("Ready!");
});

client.on("messageReactionAdd", async (reaction, user) => {
  // When we receive a reaction we check if the reaction is partial or not
  if (reaction.partial) {
    // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
    try {
      await reaction.fetch();
    } catch (error) {
      console.log("Something went wrong when fetching the message: ", error);
      // Return as `reaction.message.author` may be undefined/null
      return;
    }
  }
  let message = reaction.message,
    emoji = reaction.emoji;

  if (emoji.name == "deletebot" && reaction.count >= 3) {
    console.log("deleting message");
    message
      .delete({ timeout: 1000 })
      .catch((error) => console.log(error.message));
  }
});

//Enter your key here
client.login("");
