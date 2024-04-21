const obtenerPosts = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if (response.status === 200) {
            const data = await response.json();
            mostrar(data);
        }
        //console.log(data);
    } catch (error) {
        console.error('Error al obtener datos', error);
    }
}

const mostrar = (data) => {
    try {
        let posts = '';
        data.forEach(element => {
            posts += `
            <ul>
                <li>
                    <p>User Id: ${element.userId} </p>
                    <p>Id: ${element.id} </p>
                    <p>Title: ${element.title} </p>
                    <p>Body: ${element.body} </p>
                </li>
            </ul>
            `
        });
        document.getElementById('post-data').innerHTML = posts;
    } catch (error) {
        console.log(error)
    }
}

const getPosts = () => {
    obtenerPosts();
}