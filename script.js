const developersData = [
  {
    name: "Alice James",
    programmingLanguage: "JavaScript",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 100,
    image: "./images/AliceJames.jpg",
    bio: "I am Alice James, an experienced JavaScript developer with a passion for creating dynamic and responsive web applications...",
    deliveryTime: 1
  },
  {
    name: "James Roedan",
    programmingLanguage: "Python",
    mentorshipType: "Programming_development",
    available: "No",
    pricePerHour: 60,
    image: "./images/JamesRoedan.jpg",
    bio: "Hello, I'm James Roedan, a Python enthusiast specializing in backend development and data science...",
    deliveryTime: 1
  },
  {
    name: "Charlie Wano",
    programmingLanguage: "Java",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 55,
    image: "./images/CharlieWano.jpg",
    bio: "I'm Charlie Wano, a seasoned Java developer with a focus on enterprise-level applications...",
    deliveryTime: 24
  },
  {
    name: "David Roberts",
    programmingLanguage: "Ruby",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 45,
    image: "./images/DavidRoberts.jpg",
    bio: "Greetings! I'm David Roberts, a Ruby developer with a passion for building elegant and maintainable code...",
    deliveryTime: 48
  },
  {
    name: "Xavi Gonzalez",
    programmingLanguage: "C#",
    mentorshipType: "Resume_advice",
    available: "No",
    pricePerHour: 65,
    image: "./images/XaviGonzalez.jpg",
    bio: "Hello, I'm Xavi Gonzalez, a dedicated C# developer specializing in Windows application development and .NET technologies...",
    deliveryTime: 48
  },
  {
    name: "Frank Jackson",
    programmingLanguage: "PHP",
    mentorshipType: "Interview_coaching",
    available: "Yes",
    pricePerHour: 40,
    image: "./images/FrankJackson.jpg",
    bio: "I am Frank Jackson, an experienced PHP developer with a strong foundation in backend web development...",
    deliveryTime: 1
  },
  {
    name: "Henrich Burchards",
    programmingLanguage: "Swift",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 55,
    image: "./images/HenrichBurchards.jpg",
    bio: "Hey there! I'm Henrich Burchards, a Swift developer passionate about crafting delightful iOS applications...",
    deliveryTime: 8
  },
];


const developersWidget = document.getElementById("developers");

function renderDevelopers(developers) {
    developersWidget.innerHTML = "";
    developers.forEach(developer => {
        const developerDiv = document.createElement("div");
        developerDiv.classList.add("developer");


    // Create an anchor tag to link to the profile page
    const profileLink = document.createElement("a");
    profileLink.href = `profile.html?developer=${developer.name}`;
    profileLink.textContent = "View Profile";


        developerDiv.addEventListener("click", function(){
          showProfile(developer);
        });


        developerDiv.innerHTML = `
            <h3>${developer.name}</h3>
            <p>${developer.bio}</p>
   
            <img src="${developer.image}">
                     <div class="programmingLanguage">
            <p>${developer.programmingLanguage}</p>
            </div>
        `;
        developersWidget.appendChild(developerDiv);
    });
}

function showProfile(developer){
  console.log("Developer Bio:", developer.bio);
  console.log("Developer Language:", developer.programmingLanguage);

  const encodedBio = encodeURIComponent(developer.bio);
  const encodedLanguage = encodeURIComponent(developer.programmingLanguage);
  window.location.href = `profile.html?developer=${developer.name}&bio=${encodedBio}&language=${encodedLanguage}`;
}

renderDevelopers(developersData);



const filterButton = document.getElementById("filterButton");
filterButton.addEventListener("click", function(event) {
    filterDevelopers(event); // Pass the event object
});

function filterDevelopers(event) {
    event.preventDefault();
    const mentorshipType = document.getElementById("mentorshipType").value;
    const selectedLanguage = document.getElementById("programmingLanguage").value;
    const budgetValue = parseInt(document.getElementById("budget_input").value);
    const deliveryTimeValue = document.getElementById("deliveryTime").value;
    

    const filteredDevelopers = developersData.filter(developer => {
        return (
            (mentorshipType === '' || developer.mentorshipType === mentorshipType) &&
            (selectedLanguage === '' || developer.programmingLanguage === selectedLanguage || selectedLanguage === "Any") &&
            (isNaN(budgetValue) || developer.pricePerHour <= budgetValue) &&
            (deliveryTimeValue <= developer.deliveryTime || deliveryTimeValue === "Any")
        );
    });

    console.log(filteredDevelopers);
    renderDevelopers(filteredDevelopers);
}





// FOOTER

const footerElement = document.getElementById("footer");
const date = new Date().getFullYear();
footerElement.append(date);
footerElement.append(" Software Mentor. All rights reserved");
