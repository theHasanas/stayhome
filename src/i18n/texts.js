/**
 * If the text is short, make the key equal to the text in meaning (in English).
 *
 * If the text is long, add a # and explain the the text.
 *
 * Separate by page or general.
 *
 * All locales must have all entries. Values such as URLs and phone numbers should be indepenedent.
 */

module.exports = {
  nl: {
    general: {
      Website: "nl Website",
      "Opening times": "nl Opening times",
    },
    homePage: {
      "General help": "nl General help",
      "#GeneralDisclaimer":
        "nl This website is not affiliated with the government or any of the businesses listed. We are simply collecting information and dispplaying it here. For the official government stance on the matter, please visit the following URLs:",
      "#EmergencyContact":
        "nl If you think you or someone you know is in danger because of the COVID-19 virus, contact the authories through these nubmers:",
      "Rotterdam businesses": "nl Rotterdam businesses",
    },
  },
  en: {
    general: {
      Website: "Website",
      "Opening times": "Opening times",
    },
    homePage: {
      "General help": "General help",
      "#GeneralDisclaimer":
        "This website is not affiliated with the government or any of the businesses listed. We are simply collecting information and dispplaying it here. For the official government stance on the matter, please visit the following URLs:",
      "#EmergencyContact":
        "If you think you or someone you know is in danger because of the COVID-19 virus, contact the authories through these nubmers:",
      "Rotterdam businesses": "Rotterdam businesses",
    },
  },
}
