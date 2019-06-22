import MobileDetect from 'mobile-detect'

const device = new MobileDetect(window.navigator.userAgent)

if (device.phone()) {
  import('./mobile')
} else {
  import('./desktop')
}
