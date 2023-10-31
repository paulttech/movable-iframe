const phoneButton = document.querySelector(".phone-button");
const hiHelloHow = document.querySelector(".hi-hello-how");

phoneButton.addEventListener('click', () => {
  // Create a new iframe element.
  const iframe = document.createElement('iframe');

  // Set the iframe's src attribute to the URL of the IP you want to serve.
  iframe.src = 'https:////';

  // Set the iframe's allow attribute to allow camera and microphone access.
  iframe.setAttribute('allow', 'camera *;microphone *');

  // Set the iframe's style to position it in the middle of the browser window.
  iframe.style.position = 'absolute';
  iframe.style.top = '20%';
  iframe.style.left = '50%';
  iframe.style.transform = 'translate(-50%, -50%)';
  iframe.style.width = "30em"
  iframe.style.height = "30em"

  // Append the iframe element to the body of the document.
  document.body.appendChild(iframe);

  // Request permission to access the microphone.
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    // The user has granted permission to access the microphone.

    // Send the microphone stream to the iframe.
    iframe.contentWindow.postMessage(stream, '*');
  })
  .catch(error => {
    // The user has denied permission to access the microphone.
    console.log(error)
  });

  // Add event listeners for the mousedown and mousemove events.
  iframe.addEventListener('mousedown', (event) => {
    iframe.startX = event.clientX;
    iframe.startY = event.clientY;
  });

  document.addEventListener('mousemove', (event) => {
    iframe.style.left = `${event.clientX - iframe.startX}px`;
    iframe.style.top = `${event.clientY - iframe.startY}px`;
  });

  // Set the text content of the hiHelloHow element to indicate that the iframe has been served from the JavaScript code.
  hiHelloHow.textContent = "this is being served from the js";

  // Log a message to the console indicating that the iframe has been served.
  console.log("static serve this is");
});
