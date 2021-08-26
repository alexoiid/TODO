console.log(uuid.v4())
const notes = [{
    title:'My next trip',
   completed:false,
    uuid: uuid.v4()
},
{   title: 'Habits to work on',
     completed:true,
     uuid: uuid.v4()
},{
    title:'Office modification',
    completed:false,
    uuid: uuid.v4()
},
    { title:'Feed the dogs',
     completed:true,
     uuid: uuid.v4()

}]

console.log(notes[0].uuid)

const filters = {
    searchText:''
}

const renderNotes = function(notes,filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())

    })
    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach(function (note){
        const noteel= document.createElement('p')
        noteel.textContent = note.title
        
        noteel.id = note.uuid
        document.querySelector('#notes').appendChild(noteel)
       
    })
}
renderNotes(notes,filters)

// document.querySelector('#search').addEventListener('click',function(b){
   
// })
// document.querySelector('#create-note').addEventListener('click',function(e){
  
// })


document.querySelector('#remove-all').addEventListener('click',function(){
document.querySelectorAll('#notes p').forEach(function (a){
  //find the node that we want to delete
  
  let result = notes.findIndex((val) => {
    return val.uuid == a.id
    
})
console.log(a.id + 'hi')
notes.splice(result,1)
    // console.log(result)
   // console.log(a.id)


renderNotes(notes,filters)

    
 })
 })
document.querySelector("#search-text").addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})
// document.querySelector('#form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

document.querySelector('#Add').addEventListener('click',function(){
    let addtodo = {
        title: document.getElementById('thicc').value,
        uuid: uuid.v4()
    }
    document.querySelectorAll('#notes').forEach(function (){
       
        if (document.getElementById('thicc').value === ''  )
        {
            return console.log('Cannot be empty')
        } 
   
   })
   if(document.getElementById('thicc').value !== ''){
    notes.push(addtodo)
    const paragraph = document.createElement('p')
   // let newtext = document.getElementById('#thicc')
    paragraph.textContent= addtodo.title
   paragraph.id = addtodo.uuid
   // paragraph.id = notes.length[-1]
    document.querySelector('#notes').appendChild(paragraph)
   }
   
   console.log(notes)   

})
   
