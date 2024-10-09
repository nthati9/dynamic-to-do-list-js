// Listen for the DOMContentLoaded event to ensure the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn'); // Button to add tasks
    const taskInput = document.getElementById('task-input'); // Input field for tasks
    const taskList = document.getElementById('task-list'); // Unordered list to display tasks
    let tasks = []; // Array to hold tasks

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks'); // Retrieve tasks from Local Storage
        if (storedTasks) {
            tasks = JSON.parse(storedTasks); // Parse the tasks from JSON to an array
            tasks.forEach(task => {
                createTaskElement(task); // Create and display each task
            });
        }
    }

    // Function to create a task element in the DOM
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text content to the task text

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Set button text
        removeButton.classList.add('remove-btn'); // Add class for styling

        // Add an onclick event to the remove button
        removeButton.onclick = function() {
            removeTask(taskText, li); // Remove task from array and DOM
        };

        li.appendChild(removeButton); // Append remove button to li
        taskList.appendChild(li); // Append li to task list
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the task input

        if (taskText === "") {
            alert("Please enter a task."); // Alert if the input is empty
            return; // Exit the function
        }

        tasks.push(taskText); // Add new task to the tasks array
        createTaskElement(taskText); // Create and display the new task
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks to Local Storage
        taskInput.value = ''; // Clear the input field
    }

    // Function to remove a task
    function removeTask(taskText, li) {
        tasks = tasks.filter(task => task !== taskText); // Remove task from tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Update Local Storage
        taskList.removeChild(li); // Remove the li element from the DOM
    }

    // Load tasks from Local Storage on page load
    loadTasks();

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener to the task input for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter key is pressed
        }
    });
});
