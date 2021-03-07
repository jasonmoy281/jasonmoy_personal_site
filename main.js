try {
  document.getElementById("email-id").innerText = footer.email;
  document.getElementById("phone-id").innerText = footer.phone;
} catch {}

try {
  document.getElementById("about-paragraph").innerText = aboutParagraph;
} catch {}

try {
  const publicationElement = document.querySelector("#publication");
  if (publication == null) {
    publicationElement.style.display = "none";
  } else {
    for (let index = 0; index < publication.length; index++) {
      const item = publication[index];
      const itemElement = document.createElement("p");
      itemElement.innerHTML = item[0];
      const link = document.createElement("a");
      link.href = item[1];
      link.target = "_blank";
      link.innerText = "[Project Website]";
      itemElement.append(link);
      publicationElement.appendChild(itemElement);
    }
  }

  const manuscriptUnderReviewElement = document.querySelector(
    "#manuscript-under-review"
  );
  if (manuscriptUnderReview == null) {
    manuscriptUnderReviewElement.style.display = "none";
  } else {
    for (let index = 0; index < manuscriptUnderReview.length; index++) {
      const item = manuscriptUnderReview[index];
      const itemElement = document.createElement("p");
      itemElement.innerHTML = item[0];
      const link = document.createElement("a");
      link.href = item[1];
      link.target = "_blank";
      link.innerText = "[Project Website]";
      itemElement.append(link);
      publicationElement.appendChild(itemElement);
    }
  }

  const manuscriptInPrepartionElement = document.querySelector(
    "#manuscript-in-preparation"
  );
  if (manuscriptInPreparation == null) {
    manuscriptInPrepartionElement.style.display = "none";
  } else {
    for (let index = 0; index < manuscriptInPreparation.length; index++) {
      const item = manuscriptInPreparation[index];
      const itemElement = document.createElement("p");
      itemElement.innerHTML = item[0];
      const link = document.createElement("a");
      link.href = item[1];
      link.target = "_blank";
      link.innerText = "[Project Website]";
      itemElement.append(link);
      manuscriptInPrepartionElement.appendChild(itemElement);
    }
  }

  const conferenceElement = document.querySelector("#conference");
  if (conference == null) {
    conferenceElement.style.display = "none";
  } else {
    for (let index = 0; index < conference.length; index++) {
      const item = conference[index];
      const itemElement = document.createElement("p");
      itemElement.innerHTML = item;
      conferenceElement.appendChild(itemElement);
    }
  }
} catch {}
