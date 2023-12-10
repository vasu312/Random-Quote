const quote = document.getElementById("quote");
const author = document.getElementById("author");

window.onload = () => {
  getQuote();
};

async function getQuote() {
  const url = "https://api.quotable.io/random";
  const response = await fetch(url);

  const data = await response.json();
  setData(data);
}

async function setData(data) {
  quote.innerText = data.content;
  author.innerText = data.author;
}



// Function to trigger image download

function downloadImage() {
  // Select the div element
  const element = document.getElementById('quoteImg');

  // Use html2canvas to capture the div content as an image

  html2canvas(element).then(function(canvas) {
  
    // Convert canvas to image data
      const imageData = canvas.toDataURL('image/png');

      // Create a link element
      const link = document.createElement('a');
      link.href = imageData;
      link.download = 'Quote.png'; // Set the downloaded file name

      // Simulate a click to trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
  });
}

// Attach click event to the download button
document.getElementById('download').addEventListener('click', downloadImage);

