import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faDumbbell,
  faPills,
  faPrescriptionBottleAlt,
  faShoppingBasket,
  faTabletAlt,
  faUtensils,
  faPhone,
  faGlobe,
  faExternalLinkAlt,
  faExternalLinkSquareAlt,
  faPhoneSquare,
  faCheese,
  faWineGlassAlt,
} from "@fortawesome/free-solid-svg-icons"

/**
 * This fucntion tells FA to include files for these icons on build.
 */
export function loadIcons() {
  library.add(
    faShoppingBasket,
    faPrescriptionBottleAlt,
    faPills,
    faUtensils,
    faDumbbell,
    faTabletAlt,
    faPhone,
    faGlobe,
    faExternalLinkAlt,
    faExternalLinkSquareAlt,
    faPhoneSquare,
    faCheese,
    faWineGlassAlt
  )
}
