document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = document.getElementById("topic");
  
    const slogans = [
      "Engineering the Future with {topic}",
      "Innovate Today with {topic}",
      "Building a Better World through {topic}",
      "Empowering Progress with {topic}",
      "Where {topic} Meets Ingenuity",
      "Shaping Tomorrow with {topic}",
      "Driven by {topic}, Defined by Excellence",
      "{topic}: The Heart of Innovation",
      "Engineering Excellence through {topic}",
      "Your Future Engineered with {topic}"
    ];
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const topic = input.value.trim();
      if (topic === "") {
        alert("Please enter a topic.");
        return;
      }
  
      // Select a random slogan template
      const randomTemplate = slogans[Math.floor(Math.random() * slogans.length)];
      const slogan = randomTemplate.replace("{topic}", topic);
  
      alert(slogan);
  
      input.value = "";
    });
  });
  