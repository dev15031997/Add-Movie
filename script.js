
function add(name,movie,genre){
		let user=[];
	
			let obj={
				name:name,
				movie:movie,
				genre:genre
			}
		
		let data=JSON.stringify(obj)
		user.push(data)
		localStorage.setItem('user',user)
	  display(obj)
}


function display(data)
	{
		
		let table=document.getElementById('tableBody')
		let info=
			`
				<tr>
						<td>${data.name}</td>
						<td>${data.movie}</td>
						<td>${data.genre}</td>
				</tr>	
 			`
		table.innerHTML=info
	}


let frm=document.getElementById('frm')
frm.addEventListener('submit',dataFill)

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

	add(name,movie,genre)
		
	}