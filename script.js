async function loadPosts(){
  document.getElementById('posts').innerHTML = "carregando"

  let req = await fetch('https://jsonplaceholder.typicode.com/posts')
  let json = await req.json();
    montarBlog(json);
  
}

function montarBlog(lista){
  let html = '';

  for(let i=0;i<lista.length;i++){
    html += '<h3>'+lista[i].title+'</h3>';
    html += lista[i].body+'<br/>';
    html += '<hr/>';

  }
  document.getElementById('posts').innerHTML = html;

}