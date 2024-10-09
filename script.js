// Listen for the DOMContentLoaded event to ensure the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for tasks
    const taskList = document.getElementById('task-list'); // Unordered list to display tasks

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if the input is empty
            return; // Exit the function
        }

        // Create a new li element for the task
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text content to the task text

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Set button text
        removeButton.className = 'remove-btn'; // Assign class name

        // Add an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the li element from taskList
        };

        // Append the remove button to the li element, then append the li to taskList
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener to the task input for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter key is pressed
        }
    });

    // Invoke the addTask function on DOMContentLoaded
    addTask();
});
