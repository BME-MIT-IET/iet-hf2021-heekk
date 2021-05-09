let url = new Url(location.href);

const addParam = () => {
    const key = document.getElementById('keyInput').value;
    const value = document.getElementById('valueInput').value;
    url.query[key] = value;
	location.href = url;
};


const clear = () => {
	location.href = url.clearQuery();
};

const changePort = () => {
    url.post = document.getElementById('portInput').value;
	location.href = url;
};


const countParams = () => {
    url = new Url(location.href);
	document.getElementById('countLabel').innerHTML
		= url.queryLength().toString();
};