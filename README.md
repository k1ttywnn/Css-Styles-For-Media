# CSS Styles for Media Devices

This project dynamically applies device-specific CSS classes based on the current screen dimensions, allowing for customized styling per device.

## Features
- Automatically applies device-specific classes based on screen size.
- Supports a variety of devices, including iPhone, Samsung Galaxy, Pixel, and more.
- Recalculates device class on window resize.

## Installation
1. Clone this repository:
    ```bash
    git clone https://github.com/k1ttywnn/Css-Styles-For-Media.git
    ```
2. Include the JavaScript file in your project.

## Usage
Add the script to your HTML:
```html
<script src="path/to/your/js/script.js"></script>
```

## Media Queries
Example media queries:
```css
@media(max-width: 641px) and (min-width: 639px) {
    /* Styles for BlackBerry Z30 */
}

@media(max-width: 897px) and (min-width: 895px) {
    /* Styles for iPhone XR */
}
```

## Contributing
Feel free to fork and submit pull requests for improvements.
