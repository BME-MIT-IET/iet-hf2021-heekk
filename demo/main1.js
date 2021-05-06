const queryButton = document.getElementById('queryButton');
queryButton.addEventListener('click', () => {
    const url = new Url(location.href);
    const queryInput = document.getElementById('queryInput');
    url.query.a = queryInput.value;

    location.href = url;
});

const portButton = document.getElementById('portButton');
portButton.addEventListener('click', () => {
    const url = new Url(location.href);
    const portInput = document.getElementById('portInput');
    url.port = parseInt(portInput.value);
    
    location.href = url;
});

const pathButton = document.getElementById('pathButton');
pathButton.addEventListener('click', () => {
    const url = new Url(location.href);
    url.path = url.path.replace('index1', 'index2');
    
    location.href = url;
});

const testButton = document.getElementById('testButton');
testButton.addEventListener('click', () => {
    const url = new Url(location.href);
    url.paths(['test', 'url.html']);
    
    location.href = url;
});

const hashButton = document.getElementById('hashButton');
hashButton.addEventListener('click', () => {
    const url = new Url(location.href);
    const hashInput = document.getElementById('hashInput');
    url.hash = hashInput.value;
    
    location.href = url;
});


// u.protocol
// u.user
// u.pass
// u.host
