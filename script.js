const developersData = [
  {
    name: "Alice James",
    programmingLanguage: "JavaScript",
    programmingLanguageImage: "./images/logos/javaScript.png",
    image: "./images/AliceJames.png",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 100,
    bio: "An experienced JavaScript developer with a passion for creating dynamic and responsive web applications. With over a decade of experience in the industry, I've had the opportunity to work on a wide range of projects, from small startups to large-scale enterprise applications. My expertise includes front-end development using modern frameworks like React, Vue, and Angular, as well as server-side programming with Node.js. I'm dedicated to writing clean, efficient code and staying updated with the latest trends in web development.",
    deliveryTime: 1,
    shortBio: "An experienced JavaScript developer passionate about creating dynamic web applications. Expertise in front-end frameworks like React and back-end development with Node.js.",
    reviews: [
      {
        reviewer: "John Doe",
        review: "Alice is a fantastic mentor. Her knowledge of JavaScript and modern frameworks is exceptional. She helped me understand complex concepts with ease."
      },
      {
        reviewer: "Jane Smith",
        rating: 4,
        review: "Great mentor! Alice provided me with valuable insights into web development. Her teaching style is very clear and concise."
      }
    ]
  },
  {
    name: "James Roedan",
    programmingLanguage: "Python",
    programmingLanguageImage: "./images/logos/python.png",
    mentorshipType: "Programming_development",
    available: "No",
    pricePerHour: 60,
    image: "./images/JamesRoedan.png",
    bio: "A Python enthusiast specialising in backend development and data science. With a master's degree in computer science and years of industry experience, I've become proficient in designing and implementing scalable, high-performance systems. My expertise extends to machine learning and artificial intelligence, where I've developed predictive models and recommendation systems for various applications. I'm passionate about solving complex problems and contributing to projects that make a positive impact.",
    deliveryTime: 1,
    shortBio: "A Python specialist in backend development and data science with a focus on machine learning and AI. Holds a master's in computer science and offers extensive industry experience. Currently unavailable for mentorship.",
    reviews: [
      {
        reviewer: "Michael Brown",
        review: "James has deep knowledge in Python and data science. His mentoring sessions were extremely helpful for my career development."
      },
      {
        reviewer: "Emily Davis",
        review: "James is a great mentor. His expertise in machine learning helped me complete my project successfully."
      }
    ]
  },
  {
    name: "Charlie Wano",
    programmingLanguage: "Java",
    programmingLanguageImage: "./images/logos/java-.png",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 55,
    image: "./images/CharlieWano.png",
    bio: "A Java developer with a focus on enterprise-level applications. Over the past fifteen years, I've worked with leading companies to design and develop robust software solutions that meet their business needs. My expertise spans the entire software development lifecycle, from requirements analysis and architecture design to implementation and maintenance. I have a strong background in backend development using Java EE, Spring Framework, and Hibernate, and I'm committed to delivering high-quality code that meets both functional and non-functional requirements.",
    deliveryTime: 24,
    shortBio: "Java developer with 15 years of experience in enterprise-level applications, skilled in Java EE, Spring Framework, and Hibernate.",
    reviews: [
      {
        reviewer: "Sarah Johnson",
        review: "Charlie is an excellent Java mentor. His experience with enterprise applications is evident in his teaching."
      },
      {
        reviewer: "David Lee",
        review: "Charlie's mentoring sessions were very informative. He helped me improve my understanding of Java EE and Spring Framework."
      }
    ]
  },
  {
    name: "Christina Roof",
    programmingLanguage: "Ruby",
    programmingLanguageImage: "./images/logos/ruby.png",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 45,
    image: "./images/ChristinaRoof.png",
    bio: "A Ruby developer with a passion for building elegant and maintainable software solutions. Over the past eight years, I've worked with startups and established companies to develop web applications that are not only user-friendly but also scalable and secure. My expertise includes Ruby on Rails, Sinatra, and other Ruby frameworks, as well as front-end technologies like HTML, CSS, and JavaScript. I believe in writing clean, readable code and following best practices to ensure the long-term maintainability of projects.",
    deliveryTime: 48,
    shortBio: "Ruby developer with 8 years of experience, skilled in Ruby on Rails and front-end technologies. Focused on building scalable and secure web applications.",
    reviews: [
      {
        reviewer: "Linda Williams",
        review: "Christina is a fantastic mentor for Ruby on Rails. She helped me build a scalable web application from scratch."
      },
      {
        reviewer: "Robert Martinez",
        review: "Christina's mentoring sessions were very helpful. She provided valuable insights into Ruby and front-end technologies."
      }
    ]
  },
  {
    name: "Xavi Gonzalez",
    programmingLanguage: "C#",
    programmingLanguageImage: "./images/logos/cSharp.png",
    mentorshipType: "Resume_advice",
    available: "No",
    pricePerHour: 65,
    image: "./images/XaviGonzalez.png",
    bio: "A dedicated C# developer specialising in Windows application development and .NET technologies. With a background in computer engineering and several years of industry experience, I've developed a deep understanding of the Microsoft ecosystem. I've worked on a wide range of projects, from desktop applications to web services, using technologies like WPF, ASP.NET Core, and Xamarin. I'm passionate about crafting high-quality software solutions that leverage the full power of the .NET platform.",
    deliveryTime: 48,
    shortBio: "Dedicated C# developer with expertise in Windows application development and .NET technologies. Background in computer engineering with extensive industry experience.",
    reviews: [
      {
        reviewer: "Anna Wilson",
        review: "Xavi provided excellent resume advice. His feedback helped me land my current job."
      },
      {
        reviewer: "Mark Thomas",
        review: "Xavi's insights into the .NET ecosystem and resume tips were invaluable for my job search."
      }
    ]
  },
  {
    name: "Frank Jackson",
    programmingLanguage: "Python",
    programmingLanguageImage: "./images/logos/python.png",
    mentorshipType: "Interview_coaching",
    available: "Yes",
    pricePerHour: 40,
    image: "./images/FrankJackson.png",
    bio: "An experienced Python developer with a strong foundation in backend web development. Over the past ten years, I've built custom web applications for clients across various industries, from e-commerce platforms to content management systems.",
    deliveryTime: 1,
    shortBio: "Experienced Python developer with a strong foundation in backend web development. Expertise in building custom web applications.",
    reviews: [
      {
        reviewer: "Sophia White",
        review: "Frank's interview coaching was extremely helpful. He provided great tips and mock interview sessions that boosted my confidence."
      },
      {
        reviewer: "William Moore",
        review: "Frank's interview coaching helped me prepare effectively for my job interviews. His feedback was very constructive."
      }
    ]
  },
  {
    name: "Henrich Burchards",
    programmingLanguage: "Ruby",
    programmingLanguageImage: "./images/logos/ruby.png",
    mentorshipType: "Programming_development",
    available: "Yes",
    pricePerHour: 55,
    image: "./images/HenrichBurchards.png",
    bio: "A Ruby developer passionate about crafting delightful applications. With a background in mobile app development and a keen eye for design, I've had the privilege of working on numerous projects, ranging from consumer apps to enterprise solutions.",
    deliveryTime: 8,
    shortBio: "Ruby developer with a background in mobile app development and a keen eye for design. Experienced in crafting delightful applications.",
    reviews: [
      {
        reviewer: "Jessica Green",
        review: "Henrich's mentoring sessions were very insightful. He has a deep understanding of Ruby and mobile app development."
      },
      {
        reviewer: "Chris Taylor",
        review: "Henrich provided valuable guidance on my Ruby projects. His feedback helped me improve my coding skills significantly."
      }
    ]
  }
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

        developerDiv.innerHTML = `
            <h3>${developer.name}</h3>
            <p>${developer.shortBio}</p>
            <br>
            <p>£${developer.pricePerHour}/h</p>
            <img src="${developer.image} ">
            <div class="programmingLanguage">
            <image src="${developer.programmingLanguageImage}">
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
  const encodedPricePerHour = encodeURIComponent(developer.pricePerHour);
  const encodedLanguage = encodeURIComponent(developer.programmingLanguage);
  const encodedLanguageImage = encodeURIComponent(developer.programmingLanguageImage);
  const encodedReviews = encodeURIComponent(JSON.stringify(developer.reviews));
  const encodedMentorshipType = encodeURIComponent(developer.mentorshipType);
  window.location.href = `profile.html?developer=${developer.name}&bio=${encodedBio}&language=${encodedLanguage}&image=${encodedImage}&languageImage=${encodedLanguageImage}&pricePerHour=${encodedPricePerHour}&reviews=${encodedReviews}&mentorshipType=${encodedMentorshipType}`;
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
            (deliveryTimeValue === 'Any' || developer.deliveryTime <= parseInt(deliveryTimeValue))
        );
    });

    console.log(filteredDevelopers);
    renderDevelopers(filteredDevelopers);
    document.getElementById('developers').scrollIntoView({ behavior: 'smooth' });

}