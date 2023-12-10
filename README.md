# Quote Generator Project

This project is a simple web application that generates quotes fetched from an external API. Users can view a random quote on the website and also have the functionality to download the displayed quote as an image.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- [Quote API](https://github.com/lukePeavey/quotable) - Used to fetch quotes
- [html2canvas Library](https://html2canvas.hertzen.com/) - Used for generating image from HTML content

## Project Overview

### Screenshot

<img src="" width="70%" alt="pro3 />

### Features

1. **Fetching Quotes**: The application fetches a random quote from the external API and displays it on the webpage.

2. **Image Download**: Users can download the displayed quote as an image by clicking a button.

### How to Use

1. Clone the repository to your local machine.
2. Open `index.html` in your web browser.
3. Click on the "Generate Quote" button to fetch and display a new quote.
4. Use the "Download Image" button to save the displayed quote as an image.

### Project Structure

- `index.html`: HTML file containing the structure of the web page.
- `styles.css`: CSS file for styling the HTML elements.
- `script.js`: JavaScript file containing logic for fetching quotes, displaying them, and enabling the image download feature.

### Implementation Details

The project is implemented using HTML, CSS, and JavaScript. The `script.js` file handles API requests to fetch quotes, dynamically updates the HTML content, and utilizes the `html2canvas` library to generate an image of the displayed quote for download.

### Resources

- [html2canvas Documentation](https://html2canvas.hertzen.com/documentation/)

## How to Contribute

Contributions to enhance the functionality, improve UI/UX, or add new features are welcome. To contribute, fork this repository and submit a pull request with your changes.

## Credits

- The quote API used in this project is provided by [Quotable API](https://github.com/lukePeavey/quotable).
- Special thanks to the [html2canvas](https://html2canvas.hertzen.com/) library for enabling the image download feature.
