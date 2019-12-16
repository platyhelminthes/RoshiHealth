const contentful = require("contentful");

module.exports = () => {
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "1111v0xdsq8u",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "ZWeMBHMLnleBUu0_hIRU0twQ6K354YBOHdyfl5UeUBg"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntries()
  .then(
      entry => {
          console.log(entry.items)
          console.log(entry.items[1])
        }
      )
  .catch(err => console.log(err));
}