
let array=[] // for storing filtered  json data 

let input = document.querySelector(".filterbox")
  input.addEventListener("keypress", function(event) {
    
    if (event.keyCode === 13) {
         $(document).ready(function(){
         $.getJSON("json/resume_details.json",function(data){
              
            document.getElementById("prev").style.visibility="visible"
            document.getElementById("next").style.visibility="visible"
            document.querySelector(".errorpage").style.display="none"
            document.querySelector(".resumebox").style.display="grid"
            z=1
            btn=null
            let arr=[]
            let k =0
      for(i=0;i<=5;i++)
      {
        if((data.resume[i].basics.AppliedFor).toLowerCase()==input.value.toLowerCase())
        {
         
       arr[k]=i
        k++
      }}
      
        
      if(k==1)
      {
        document.getElementById("prev").style.visibility="hidden"
        document.getElementById("next").style.visibility="hidden"
        displayfilter(data,arr[0])
      } else if (k>=2) {

        document.getElementById("prev").style.visibility="hidden"
        displayfilter(data,arr[0])

      } else {
        document.querySelector(".errorpage").style.display="flex"
        document.querySelector(".resumebox").style.display="none"
        document.getElementById("prev").style.visibility="hidden"
        document.getElementById("next").style.visibility="hidden"
      }

         array=arr
               
})
})
      
}

});
 
// for displaying searched resumes

function displayfilter(data,k){

    var child = achievelist.lastElementChild; 
    while (child) {
      achievelist.removeChild(child);
      child = achievelist.lastElementChild;
    }

    var child = hobbieslist.lastElementChild; 
    while (child) {
      hobbieslist.removeChild(child);
      child = hobbieslist.lastElementChild;
    }
   
    var child = techlist.lastElementChild; 
    while (child) {
      techlist.removeChild(child);
      child = techlist.lastElementChild;
    }

// for displaying personal information    


let names=document.querySelector(".names")
names.innerText = `${data.resume[k].basics.name}` 
let AppliedFor=document.querySelector(".AppliedFor")
AppliedFor.innerText = `${data.resume[k].basics.AppliedFor}`

let phone=document.querySelector(".phone")
phone.innerText = `${data.resume[k].basics.phone}`

let email=document.querySelector(".email")
email.innerText = `${data.resume[k].basics.email}`

//for changing the links of linkdin

document.querySelector(".link").href=`${data.resume[k].basics.profiles.url}`; 

// for displaying technical skills

for(i=1;i<=((data.resume[k].skills.keywords).length);i++)
{  

  techlist = document.querySelector(".tech")
  let p = document.createElement("p");
  p.innerText= `${data.resume[k].skills.keywords[i-1]}`
  techlist.appendChild(p);
}

//for displaying hobbies
 
for(i=1;i<=((data.resume[k].interests.hobbies).length);i++)
{  
  hobbieslist = document.querySelector(".hobbies")
  let p = document.createElement("p");
  p.innerText= `${data.resume[k].interests.hobbies[i-1]}`
  hobbieslist.appendChild(p);
} 

// for displaying Work Experience

let company=document.querySelector(".company")
company.innerText = `${data.resume[k].work["company name"]}`

let position=document.querySelector(".workingpostion")
position.innerText = `${data.resume[k].work.Position}`

let startdate=document.querySelector(".sd")
startdate.innerText = `${data.resume[k].work["Start Date"]}`

let enddate=document.querySelector(".ed")
enddate.innerText = `${data.resume[k].work["End Date"]}`

let summary=document.querySelector(".worksummary")
summary.innerText = `${data.resume[k].work.Summary}`

// for displaying project details

let projectname=document.querySelector(".projectname")
projectname.innerText = `${data.resume[k].projects.name}:`

let description=document.querySelector(".description")
description.innerText = `${data.resume[k].projects.description}:`

// for displaying education

let ug=document.querySelector(".ug")
ug.innerText = `${data.resume[k].education.UG.institute},${data.resume[k].education.UG.course},${data.resume[k].education.UG["Start Date"]},${data.resume[k].education.UG["End Date"]},${data.resume[k].education.UG.cgpa}`

let pu=document.querySelector(".pu")
pu.innerText = `${data.resume[k].education["Senior Secondary"].institute},${data.resume[k].education["Senior Secondary"].cgpa}`

let school=document.querySelector(".school")
school.innerText = `${data.resume[k].education["High School"].institute},${data.resume[k].education["High School"].cgpa}`

//for displaying internship

let intern_company=document.querySelector(".intern_company")
intern_company.innerText = `${data.resume[k].Internship["company name"]}`

let intern_postion=document.querySelector(".intern_postion")
intern_postion.innerText = `${data.resume[k].Internship.Position}`

let intern_startdate=document.querySelector(".intern_startdate")
intern_startdate.innerText = `${data.resume[k].Internship["Start Date"]}`

let intern_enddate=document.querySelector(".intern_enddate")
intern_enddate.innerText = `${data.resume[k].Internship["End Date"]}`

let intern_summary=document.querySelector(".intern_summary")
intern_summary.innerText = `${data.resume[k].Internship.Summary}` 

//for displaying achievement
 
for(i=1;i<=((data.resume[k].achievements.Summary).length);i++)
{  
  achievelist = document.querySelector(".achievements")
  let li = document.createElement("li");
  li.innerText= `${data.resume[k].achievements.Summary[i-1]}`
  achievelist.appendChild(li);
   
} 

}