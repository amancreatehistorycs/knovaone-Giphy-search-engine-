function getUserInput() {
    var inputValue = document
        .querySelector(".js-userinput").value;
    return inputValue;
    }
    
document.querySelector(".js-go").addEventListener("click", function () {
    var inputValue = document
        .querySelector(".js-userinput").value;
    var userInput = getUserInput();
    searchGiphy(userInput);
    });
    document.querySelector(".js-userinput")
    .addEventListener("keyup", function (e) {
    
    // If the Key Enter is Pressed
    if (e.which === 13) {
        var userInput = getUserInput();
        searchGiphy(userInput);
    }
    });
    function searchGiphy(searchQuery) {
        var url =
        "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="
        + searchQuery;
            
        // making AJAX Request
            
        var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open("GET", url);
        GiphyAJAXCall.send();
        
        GiphyAJAXCall.addEventListener("load", function (data) {
            console.log(data);
            var actualData = data.target.response;
            console.log(actualData);
            pushToDOM(actualData);
            console.log(actualData);
            
        });
        }
        function pushToDOM(response) {

            // converting the web returned string to a JSON object
            response = JSON.parse(response);
                
            // acess the data part of the response as it is containing the required url
            var pics = response.data;
            
            // Find a container to hold the response in DOM and to display images
            var container = document.querySelector(".js-container");
                
            // to delete the result from pevious searches
            
            container.innerHTML = "";
            
            // Looping through data array and add IMG html
            pics.forEach(function (pic) {
            
                // Finding desired image src 
                var src = pic.images.fixed_height.url;
            
                // Concatenate a new IMG tag with src snd adding it to the htmml of the container.
                container.innerHTML += "<img src='"+ src + "' class='container-image' />";
            });
            }
                            