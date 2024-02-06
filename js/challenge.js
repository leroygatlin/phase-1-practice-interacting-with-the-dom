const counterElement = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const likeButton = document.getElementById("heart");
const likeCountElement = document.querySelector(".likes");
const pauseButton = document.getElementById("pause");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");





        // Initialize the timer count
        let count = 0;
        const likes = {
        };
        

        // Initialize the pause flag
        let isPaused = false;



        // Start the timer once the page has loaded
        let counterEvent = setInterval(() => {
                count++;
                counterElement.textContent = count;
            }, 1000);

        // Function to increment the counter
        const incrementCounter = () => {
                counterElement.textContent = count += 1
        };


        // Function to decrement the counter
        const decrementCounter = () => {
            counterElement.textContent = count -=1
                
    };

        // Function to handle liking a number
        const likeNumber = () => {
            if (!isPaused) {
                if (!likes[count]) {
                    likes[count] = 1;
                   const likeli = document.createElement("li")
                   likeli.id = count
                   likeli.textContent = `${count} has been ${likes[count]} times.` 
                   likeCountElement.append(likeli)
                } else {
                    likes[count]++;
                const incrementCount = document.getElementById(count)
                    incrementCount.textContent = `${count} has been ${likes[count]} times.`
                }
                
            }

        };


        // Function to update the like count
        const updateLikeCount = (likeCount) => {
        likeCountElement.textContent = `${likeCount} Likes`;
        };

        // Function to toggle the pause state
        const togglePause = () => {
        isPaused = !isPaused;
        if (isPaused) {
        pauseButton.textContent = "Resume";
        clearInterval(counterEvent)
        disableButtons();
         } else {
        pauseButton.textContent = "Pause";
        counterEvent = setInterval(() => {
            count++;
            counterElement.textContent = count;
        }, 1000);
        enableButtons();
    }
    
};

       // Function to disable the buttons
       const disableButtons = () => {
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
    };

    // Function to enable the buttons
    const enableButtons = () => {
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
    };

// Add event listener to the form submission
commentForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the comment input value
  const commentText = commentInput.value;

  // Create a new comment element
  const commentElement = document.createElement("p");
  commentElement.textContent = commentText;

  // Append the new comment to the body element
  document.body.appendChild(commentElement);

  // Clear the comment input
  commentInput.value = "";
});






        // Add event listeners to the buttons
        plusButton.addEventListener("click", incrementCounter);
        minusButton.addEventListener("click", decrementCounter);
        likeButton.addEventListener("click", likeNumber);
        pauseButton.addEventListener("click", togglePause);
        commentForm.addEventListener("submit", function(event) {
            event.preventDefault()}); // Prevent form submission
      
        
    
