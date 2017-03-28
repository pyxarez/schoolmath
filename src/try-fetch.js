/**
 * создание нового объекта article
 */
fetch('http://localhost:2403/articles', {
  method: 'post',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  body: '{"title": "Some title from fetch", "description": "some description from fetch", "lessons": ["Lesson 1", "Lesson 2", "Lesson 3"]}'
})
  .then(response => response.json())
  .then(data => { console.log('Request succeeded with new article\'s id' , data.id); })
  .catch(err => {console.log(err.message);})

/**
 * изменение объекта по id
 */
(function(id) {
  fetch(`http://localhost:2403/articles/${id}`, {
    method: 'put',
    body: '{"title": "Fetch can change whatever via put method"}'
  })
    .then(response => response.json())
    .then(data => { console.log('Request succeeded with new article\'s id' , data.id); })
    .catch(err => {console.log(err.message);})
}('940a720df900fa59'));
