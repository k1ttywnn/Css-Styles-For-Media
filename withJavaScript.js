function applyDeviceClass() {
 const width = window.innerWidth;
 const height = window.innerHeight;
 const body = document.body;

 // Remove all previously added device classes.
 body.className = '';

 // Add device classes.
 if (width <= 641 && width >= 639 && height <= 361 && height >= 359) {
 body.classList.add('device-blackberry-z30');
 } else if (width <= 897 && width >= 895 && height <= 415 && height >= 414) {
 body.classList.add('device-galaxy-note3');
 } else if (width <= 668 && width >= 666 && height <= 376 && height >= 374) {
 body.classList.add('device-iphone-se');
 } else if (width <= 813 && width >= 811 && height <= 376 && height >= 374) {
 body.classList.add('device-iphone-x');
 } else if (width <= 845 && width >= 843 && height <= 391 && height >= 389) {
 body.classList.add('device-iphone-12-pro');
 } else if (width <= 933 && width >= 931 && height <= 431 && height >= 429) {
 body.classList.add('device-iphone-14-pro-max');
 } else if (width <= 916 && width >= 914 && height <= 413 && height >= 411) {
 body.classList.add('device-pixel');
 } else if (width <= 741 && width >= 739 && height <= 361 && height >= 359) {
 body.classList.add('device-galaxy-s8-plus');
 } else if (width <= 659 && width >= 658 && height <= 321 && height >= 319) {
 body.classList.add('device-galaxy-s9-plus');
 } else if (width <= 641 && width >= 649 && height <= 385 && height >= 383) {
 body.classList.add('device-lg-optimus-l70');
 }
}

// Check the screen size and apply the appropriate class.
applyDeviceClass();

// Check again when the screen size changes.
window.addEventListener('resize', applyDeviceClass);
