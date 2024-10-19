const resumeForm = document.getElementById("resumeForm");
const resumeOutput = document.getElementById("resumeOutput");
const imageFileInput = document.getElementById("imageFile");
let imageDataUrl = "";
imageFileInput.addEventListener("change", (event) => {
    const fileInput = event.target;
    const file = fileInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const readerTarget = e.target;
            imageDataUrl = readerTarget.result;
        };
        reader.readAsDataURL(file);
    }
});
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Get data from form
    const formData = new FormData(resumeForm);
    const name = formData.get("yourName");
    const title = formData.get("yourTitle");
    const description = formData.get("desc");
    const email = formData.get("yourEmail");
    const phone = formData.get("yourPhone");
    const location = formData.get("yourLocation");
    const skill1 = formData.get("skill1");
    const skill2 = formData.get("skill2");
    const skill3 = formData.get("skill3");
    const lan1 = formData.get("lan1");
    const lan2 = formData.get("lan2");
    const edu = formData.get("edu");
    const college = formData.get("college");
    const pro1 = formData.get("pro1");
    const pro2 = formData.get("pro2");
    const pro3 = formData.get("pro3");
    const resumeDisplay = `
    <div class="container">
      <div class="header">
        <h1>${name}</h1>
        <h2 class="yellow">${title}</h2>
        <div class="profile">
          <img src="${imageDataUrl}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;">
          <div class="about-me">
            <h3>About Me</h3>
            <p>${description}</p>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="left-section">
          <h3>Contact</h3>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Location: ${location}</p>

          <h3>Skills</h3>
          <ul>
            <li>${skill1}</li>
            <li>${skill2}</li>
            <li>${skill3}</li>
          </ul>

          <h3>Languages</h3>
          <ul>
            <li>${lan1}</li>
            <li>${lan2}</li>
          </ul>
        </div>

        <div class="right-section">
          <h3>Education</h3>
          <p>${edu}</p>
          <p>${college}</p>

          <h3>Projects</h3>
          <ul>
            <li>${pro1}</li>
            <li>${pro2}</li>
            <li>${pro3}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeDisplay;
    }
});

