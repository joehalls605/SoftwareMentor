const developersData = [
  {
    name: "Alice James",
    programmingLanguage: "JavaScript",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 100,
    image: "./images/AliceJames.png",
    bio: "Hi there, I'm Alice James, an experienced JavaScript developer with a passion for creating dynamic and responsive web applications. With over a decade of experience in the industry, I've had the opportunity to work on a wide range of projects, from small startups to large-scale enterprise applications. My expertise includes front-end development using modern frameworks like React, Vue, and Angular, as well as server-side programming with Node.js. I'm dedicated to writing clean, efficient code and staying updated with the latest trends in web development.",
    deliveryTime: 1
  },
  {
    name: "James Roedan",
    programmingLanguage: "Python",
    mentorshipType: "Programming_development",
    available: "No",
    pricePerHour: 60,
    image: "./images/JamesRoedan.png",
    bio: "Hello, I'm James Roedan, a Python enthusiast specializing in backend development and data science. With a master's degree in computer science and years of industry experience, I've become proficient in designing and implementing scalable, high-performance systems. My expertise extends to machine learning and artificial intelligence, where I've developed predictive models and recommendation systems for various applications. I'm passionate about solving complex problems and contributing to projects that make a positive impact.",
    deliveryTime: 1
  },
  {
    name: "Charlie Wano",
    programmingLanguage: "Java",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 55,
    image: "./images/CharlieWano.png",
    bio: "I'm Charlie Wano, a seasoned Java developer with a focus on enterprise-level applications. Over the past fifteen years, I've worked with leading companies to design and develop robust software solutions that meet their business needs. My expertise spans the entire software development lifecycle, from requirements analysis and architecture design to implementation and maintenance. I have a strong background in backend development using Java EE, Spring Framework, and Hibernate, and I'm committed to delivering high-quality code that meets both functional and non-functional requirements.",
    deliveryTime: 24
  },
  {
    name: "Christina Roof",
    programmingLanguage: "Ruby",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 45,
    image: "./images/ChristinaRoof.png",
    bio: "Greetings! I'm Christina Roof, a Ruby developer with a passion for building elegant and maintainable software solutions. Over the past eight years, I've worked with startups and established companies to develop web applications that are not only user-friendly but also scalable and secure. My expertise includes Ruby on Rails, Sinatra, and other Ruby frameworks, as well as front-end technologies like HTML, CSS, and JavaScript. I believe in writing clean, readable code and following best practices to ensure the long-term maintainability of projects.",
    deliveryTime: 48
  },
  {
    name: "Xavi Gonzalez",
    programmingLanguage: "C#",
    mentorshipType: "Resume_advice",
    available: "No",
    pricePerHour: 65,
    image: "./images/XaviGonzalez.png",
    bio: "Hello, I'm Xavi Gonzalez, a dedicated C# developer specializing in Windows application development and .NET technologies. With a background in computer engineering and several years of industry experience, I've developed a deep understanding of the Microsoft ecosystem. I've worked on a wide range of projects, from desktop applications to web services, using technologies like WPF, ASP.NET Core, and Xamarin. I'm passionate about crafting high-quality software solutions that leverage the full power of the .NET platform.",
    deliveryTime: 48
  },
  {
    name: "Frank Jackson",
    programmingLanguage: "PHP",
    mentorshipType: "Interview_coaching",
    available: "Yes",
    pricePerHour: 40,
    image: "./images/FrankJackson.png",
    bio: "I am Frank Jackson, an experienced PHP developer with a strong foundation in backend web development. Over the past ten years, I've built custom web applications for clients across various industries, from e-commerce platforms to content management systems. My expertise includes PHP frameworks like Laravel and Symfony, as well as frontend technologies like JavaScript and React. I'm passionate about writing clean, maintainable code and solving complex problems to deliver exceptional software solutions.",
    deliveryTime: 1
  },
  {
    name: "Henrich Burchards",
    programmingLanguage: "Swift",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 55,
    image: "./images/HenrichBurchards.png",
    bio: "Hey there! I'm Henrich Burchards, a Swift developer passionate about crafting delightful iOS applications. With a background in mobile app development and a keen eye for design, I've had the privilege of working on numerous iOS projects, ranging from consumer apps to enterprise solutions. My expertise includes Swift programming, UIKit, CoreData, and integrating third-party libraries. I'm dedicated to creating user-centric experiences that combine functionality with aesthetics.",
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


        developerDiv.addEventListener("click", function(){
          showProfile(developer);
        });

        const shortenedBio = developer.bio.substring(0, 250) + "...";


        developerDiv.innerHTML = `
            <h3>${developer.name}</h3>
            <p>${shortenedBio}</p>
   
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

  const encodedImage = encodeURIComponent(developer.image);
  const encodedBio = encodeURIComponent(developer.bio);
  const encodedLanguage = encodeURIComponent(developer.programmingLanguage);
  window.location.href = `profile.html?developer=${developer.name}&bio=${encodedBio}&language=${encodedLanguage}&image=${encodedImage}`;
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
