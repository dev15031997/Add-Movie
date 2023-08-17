class User{
	constructor(name,movie,genre)
	{
		this.name=name;
		this.movie=movie;
		this.genre=genre;
	}

	show()
	{
		let tableBody=document.getElementById('tableBody')
		let note=JSON.parse(localStorage.getItem('notes'))
		let	noteObj;

		if(note==null)
		{
		noteObj=[];
		}
		else{
			noteObj=(note)
		}

		let data='';
		
		noteObj.forEach((elm)=>
			{
				data+=
					`
					<tr>
				      <td>${elm.name}</td>
				      <td>${elm.movie}</td>
				      <td>${elm.genre}</td>
    		  </tr>
					`
			})
 
		tableBody.innerHTML=data;
	}

	validate(book)
	{
			if(book.name.length<2 || book.movie.length<2)
			{
				return false;
			}
		else
			{
				return true;
			}
	}

	save(data)
	{
		let note=localStorage.getItem('notes')
		let noteObj;

		if(note==null)
		{
			noteObj=[];
		}
		else{
			noteObj=JSON.parse(note)
		}

	noteObj.push(data)
	localStorage.setItem('notes',JSON.stringify(noteObj))
	
	}
	
	clear()
	{
			let libraryForm = document.getElementById('libraryForm')
		libraryForm.reset()
	}

	msg(message,status)
	{
		let info=document.getElementById('info')
		info.innerHTML=
	`
		<div class="alert alert-${status} alert-dismissible fade show" role="alert">
			  <strong>${message}</strong> 
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
			  <span aria-hidden="true">&times;</span>
			  </button>
		</div>
	`
		setTimeout(()=>
			{
				info.innerHTML=''
			},3000)
	}
}


let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit',dataFill)

function dataFill(e)
	{
		e.preventDefault()
		let name=document.getElementById('name').value;
		let movie=document.getElementById('movie').value
		let horror=document.getElementById('horror')
		let romance=document.getElementById('romance')
		let scifi=document.getElementById('scifi')
		let genre=""

		if(horror.checked)
		{
			genre="horror"
		}
		else if(romance.checked)
		{
			genre="horror"
			
		}
		else if(scifi.checked)
		{
			genre="scifi"			
		}

		let user=new User(name,movie,genre)
		
		if(user.validate(user))
		{
				user.save(user)
				user.show()
				user.clear()
				user.msg("Data added Successfully",'success')
		}
		else
		{
				user.msg("Some error Occured",'danger')
		}
	}


// This is to disply data
let user1=new User()
user1.show()