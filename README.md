Title: Software Mentor
Description: Software Mentor matches students with the right coding mentor to support their programming journey.

This application can be opened by selecting any of the html files. This application was developed for learning purposes.

Logic Overview:

- Script.js

The current data for this application is created with an array of objects.
A future version of this application will pull data from a remote server.

renderDevelopers()
loops through each of the developers in the array of objects and creates a DOM element to  display them.
It  achieves this by injecting a developer's data into each of the innerHTML.

showProfile()
This function constructs a URL with encoded query parameters then redirects the browser to the URL based on this information.
By using the encodeURIComponent, it safely encodes the properties of the developer. 
This ensures that special characters are properly converted into a format that can be included in a URL.
This routing technique was used for learning purposes, however would not be suitable for a professional application, one of the primary reasons being data safety due to the information being embedded in the URL.

filterDevelopers()
This function is used to filter the developer list shown based on criteria selected by the user.
Based on this information, it evaluates each developer against a set of conditions.
Each condition checks if the developer's attribute match the corresponding input value.
Only developers that meet the condition will be included in the filtered developers array.

This filteredDevelopers array is then rendered by calling renderDevelopers()


- Profile.js

getURLParameter()
This retrieves the query parameter from the current URL.
It then creates a new URL search params allowing easy use of query parameters.
Query parameters are extracted from the URL and decoded.
Notably the developer reviews are parsed into a JavaScript object. These reviews are mapped and rendered.
The developer information is also rendered.

This uses similar routing logic found in Script.js. 
If the user wishes to proceed with a developer, it builds another URL and updates the location to complete a contact form.

