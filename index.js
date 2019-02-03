
//Asynchronous
console.log('Before');
getUser(1, (user) => {
    getRepositories(user.gitHubUsername,(repo)=>{
        getCommits(repo[0],(commits)=>{
            console.log(commits);
        })
    });

})


getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repo => getCommits(repo[0]))
    .then(commits => console.log(commits))
    .catch(err => console.log('Error', err.message));

console.log('After');


function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Reading User From a database......');
            resolve({id:id, gitHubUsername:'rxs1'});
        }, 2000)
    });
    
    
}

function getRepositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Reading repositories by username:'+username);
            resolve(['repo1','repo2','repo3']);
        },2000);
    })
    
}


function getCommits(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Calling Github API...');
            resolve(['commit']);
        },2000);
    })
    
}