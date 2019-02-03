
//Asynchronous
console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user){
    getRepositories(user.gitHubUsername,getCommits);
}

function getCommmits(repo){
    getCommmits(repo,displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}


function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading User From a database......');
        callback({id:id, gitHubUsername:'rxs1'});
    }, 2000)
    
}

function getRepositories(username, callback){
    setTimeout(()=>{
        console.log('Reading repositories by username:'+username);
        callback(['repo1','repo2','repo3']);
    },2000);
}