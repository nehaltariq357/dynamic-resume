const resumeForm: HTMLFormElement = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput: HTMLElement | null = document.getElementById("resumeOutput");
const imageFileInput: HTMLInputElement = document.getElementById("imageFile") as HTMLInputElement;

let imageDataUrl: string = "";

imageFileInput.addEventListener("change", (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  const file: File | null | undefined = fileInput.files?.[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e: ProgressEvent) {
        const readerTarget = e.target as FileReader;
        imageDataUrl = readerTarget.result as string;
      };
    reader.readAsDataURL(file);
  }
});

resumeForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

 
  const formData = new FormData(resumeForm);
  const name: string = formData.get("yourName") as string;
  const title: string = formData.get("yourTitle") as string;
  const description: string = formData.get("desc") as string;
  const email: string = formData.get("yourEmail") as string;
  const phone: string = formData.get("yourPhone") as string;
  const location: string = formData.get("yourLocation") as string;
  const skill1: string = formData.get("skill1") as string;
  const skill2: string = formData.get("skill2") as string;
  const skill3: string = formData.get("skill3") as string;
  const lan1: string = formData.get("lan1") as string;
  const lan2: string = formData.get("lan2") as string;
  const edu: string = formData.get("edu") as string;
  const college: string = formData.get("college") as string;
  const pro1: string = formData.get("pro1") as string;
  const pro2: string = formData.get("pro2") as string;
  const pro3: string = formData.get("pro3") as string;

  const resumeDisplay: string = `
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

//code is already compiled, ensure that not compile the code ,if compiled , go to script.js file and remove last line "expoert{}"