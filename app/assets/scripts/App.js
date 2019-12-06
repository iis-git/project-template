import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import StickyHeader from './modules/StickyHeader'

new StickyHeader()
new MobileMenu()


if (module.hot) {
    module.hot.accept()
}






