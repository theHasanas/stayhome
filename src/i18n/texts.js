/**
 * If the text is short, make the key equal to the text (in English).
 *
 * If the text is long, add a # and explain the text.
 *
 * All locales must have all entries. Values such as URLs and phone numbers should be indepenedent.
 */
const allTexts = {
  nl: {
    AlleenSamen: "AlleenSamen",
    "Opening times": "Openingstijden",
    "#ContactRIVM":
      "Voor actuele informatie over het coronavirus, ga naar de website van het RIVM of bel de coronavirus hulplijn.",
    "Local businesses": "Plaatselijke bedrijven",
  },
  en: {
    AlleenSamen: "AloneTogether",
    "Opening times": "Opening times",
    "#ContactRIVM":
      "For official statements about the current situation with coronavirus, please visit the RIVM website or call the coronavirus helpline.",
    "Local businesses": "Local businesses",
  },
}

export default allTexts
