function autofillJobForm() {
  // Mock data for the assignment
  const mockData = {
    fullName: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "1234567890",
    skills:
      "JavaScript (ES6+), Chrome Extensions, DOM Manipulation, CSS3, HTML5",
  };

  const inputs = document.querySelectorAll("input, textarea");
  let filledCount = 0;

  inputs.forEach((input) => {
    // 1. Collect all possible text identifiers for this field
    const labelText = input.labels?.[0]?.innerText.toLowerCase() || "";
    const nameAttr = input.name.toLowerCase();
    const idAttr = input.id.toLowerCase();
    const placeholder = input.placeholder.toLowerCase();

    // Check if the parent element contains a label (useful for some form structures)
    const parentText = input.parentElement?.innerText.toLowerCase() || "";

    const combinedSearch = `${labelText} ${nameAttr} ${idAttr} ${placeholder} ${parentText}`;

    // 2. Helper function to find keywords
    const matches = (keywords) =>
      keywords.some((key) => combinedSearch.includes(key));

    let valueToFill = null;

    // 3. Logic to determine which mock data fits
    if (matches(["name", "username", "user"])) {
      valueToFill = mockData.fullName;
    } else if (input.type === "email" || matches(["email", "mail"])) {
      valueToFill = mockData.email;
    } else if (
      input.type === "tel" ||
      matches(["phone", "mobile", "tel", "contact", "number"])
    ) {
      valueToFill = mockData.phone;
    } else if (
      input.tagName === "TEXTAREA" ||
      matches(["skill", "experience", "about", "summary"])
    ) {
      valueToFill = mockData.skills;
    }

    // 4. Fill the field and trigger events
    if (valueToFill) {
      input.value = valueToFill;

      // These events tell the website: "Hey, someone typed here!"
      // This is necessary for modern websites to save the data.
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));

      // Visual feedback: brief highlight
      input.style.transition = "background-color 0.5s";
      input.style.backgroundColor = "#e8f0fe";

      filledCount++;
    }
  });

  // Final feedback alert
  alert(`Zobsai Autofill: Successfully filled ${filledCount} fields!`);
}

// Listener to receive the command from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "autofill") {
    autofillJobForm();
  }
});
