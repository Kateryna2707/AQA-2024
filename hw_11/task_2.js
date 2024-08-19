function fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(todo => {
            console.log(todo);
        })

        .catch(error => {
            console.error(error);
        });
}

function fetchUser() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => {
            console.log('GET Response:', user);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Promise.all results:');
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => console.error('Promise.all error:', error));

Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('Promise.race result:', result);
    })
    .catch(error => console.error('Promise.race error:', error));