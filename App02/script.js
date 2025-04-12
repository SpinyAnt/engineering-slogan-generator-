document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = document.getElementById("topic");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const topic = input.value.trim();
      if (topic === "") {
        alert("Please enter a topic.");
        return;
      }
  
      try {
        const response = await fetch("/generate-slogan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ topic })
        });
  
        const data = await response.json();
  
        if (data.slogan) {
          alert(data.slogan); // Show generated slogan
        } else {
          alert("No slogan generated. Try again.");
        }
  
        input.value = "";
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to generate slogan. Please try again later.");
      }
    });
  });
  