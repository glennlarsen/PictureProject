const uploadFunction = (event) => {
  const files = event.target.files;
  const data = new FormData();
  data.append("file", files[0]);

  fetch("/pictures", {
    method: "POST",
    body: data,
  })
    .then((response) => {
      // Check if the response indicates a successful upload (you can modify this condition based on your server response)
      if (response.status === 200) {
        // Reload the page
        window.location.reload();
      }
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
};

document.getElementById("formFile").addEventListener("change", (event) => {
  uploadFunction(event);
});
