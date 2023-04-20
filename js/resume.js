let datas  // for storing json data
let front =1  
let buttonfirst // this varibale is used to control next prev navigation buttons
let btn  // this varibale is used to control next prev navigation buttons  for filtered results
let z=1 // used for passing array elements
 
  // for reading json file
$(document).ready(function(){
$.getJSON("json/resume_details.json",function(data){
    document.querySelector(".errorpage").style.display="none"
    datas=data
    display(datas,0)  
})
})

  // working next button 
function forward(){
      
  console.log("z for front="+z)

    if(btn=="r" ){
        z=z+2
    }

    console.log("z for front="+z)
    
    btn="f"
    if(array[z]!=undefined){            
      
      document.getElementById("prev").style.visibility="visible"
       
    if(z==array.length-1)
      document.getElementById("next").style.visibility="hidden"    
      
      displayfilter(datas,array[z])
      z++
      
    }else{
  
      var child = achievelist.lastElementChild; 
      while (child) {
      achievelist.removeChild(child);
      child = achievelist.lastElementChild;
    }

      var child = hobbieslist.lastElementChild; 
      while (child) {
      hobbieslist.removeChild(child)
      child = hobbieslist.lastElementChild;
      }
   
      var child = techlist.lastElementChild; 
      while (child) {
      techlist.removeChild(child);
      child = techlist.lastElementChild;
      } 
    if((buttonfirst=="reverse" && (front!=0))){  
        front++
    }

      buttonfirst="forward"
      if((front<=5)&&(front==0)){  
        front++
        display(datas,front++)
      }else{
        display(datas,front++)
      }
    }
    }
     
    
// working prev button 
function back(){
     
  if(btn=="f" ){
    z=z-2
   }    
  
      btn="r"

      if(array[z]!=undefined)
      {    
        document.getElementById("next").style.visibility="visible"
        if(z==0)
        document.getElementById("prev").style.visibility="hidden"    
   
        displayfilter(datas,array[z])
        z--
 
      }else{

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
      
      if((buttonfirst=="forward")&&  (front!=5))
      {  
        front--
      }
      buttonfirst="reverse"

      if(front>0)
      {    
        display(datas,--front)
      }
      }
    }


     // for displaying the contents
  function display(datas,k)
        {   
              
        if(k==0){
        btn=document.getElementById("prev").style.visibility="hidden"
            
            
        }else if(k==5)
        {
            btn=document.getElementById("next").style.visibility="hidden"
            front--

        }else {

            btn=document.getElementById("prev").style.visibility="visible"
            btn=document.getElementById("next").style.visibility="visible"

        }

    
    // for displaying personal information    

    let names=document.querySelector(".names")
    names.innerText = `${datas.resume[k].basics.name}` 
    let AppliedFor=document.querySelector(".AppliedFor")
    AppliedFor.innerText = `${datas.resume[k].basics.AppliedFor}`
    
    let phone=document.querySelector(".phone")
    phone.innerText = `${datas.resume[k].basics.phone}`
    
    let email=document.querySelector(".email")
    email.innerText = `${datas.resume[k].basics.email}`
    
    //for changing the links of linkdin
    
    document.querySelector(".link").href=`${datas.resume[k].basics.profiles.url}`; 

    // for displaying technical skills
    
   for(i=1;i<=((datas.resume[k].skills.keywords).length);i++)
    {  

      techlist = document.querySelector(".tech")
      let p = document.createElement("p");
       p.innerText= `${datas.resume[k].skills.keywords[i-1]}`
       techlist.appendChild(p);
    }
    
    //for displaying hobbies
     
    for(i=1;i<=((datas.resume[k].interests.hobbies).length);i++)
    {  
      hobbieslist = document.querySelector(".hobbies")
      let p = document.createElement("p");
       p.innerText= `${datas.resume[k].interests.hobbies[i-1]}`
       hobbieslist.appendChild(p);
    } 
    
    // for displaying Work Experience
    
    let company=document.querySelector(".company")
    company.innerText = `${datas.resume[k].work["company name"]}`
    
    let position=document.querySelector(".workingpostion")
    position.innerText = `${datas.resume[k].work.Position}`
    
    let startdate=document.querySelector(".sd")
    startdate.innerText = `${datas.resume[k].work["Start Date"]}`
    
    let enddate=document.querySelector(".ed")
    enddate.innerText = `${datas.resume[k].work["End Date"]}`
    
    let summary=document.querySelector(".worksummary")
    summary.innerText = `${datas.resume[k].work.Summary}`
    
    // for displaying project details
    
    let projectname=document.querySelector(".projectname")
    projectname.innerText = `${datas.resume[k].projects.name}:`
    
    let description=document.querySelector(".description")
    description.innerText = `${datas.resume[k].projects.description}:`
    
    // for displaying education
    
    let ug=document.querySelector(".ug")
    ug.innerText = `${datas.resume[k].education.UG.institute},${datas.resume[k].education.UG.course},${datas.resume[k].education.UG["Start Date"]},${datas.resume[k].education.UG["End Date"]},${datas.resume[k].education.UG.cgpa}`
    
    let pu=document.querySelector(".pu")
    pu.innerText = `${datas.resume[k].education["Senior Secondary"].institute},${datas.resume[k].education["Senior Secondary"].cgpa}`
    
    let school=document.querySelector(".school")
    school.innerText = `${datas.resume[k].education["High School"].institute},${datas.resume[k].education["High School"].cgpa}`
    
    //for displaying internship
    
    let intern_company=document.querySelector(".intern_company")
    intern_company.innerText = `${datas.resume[k].Internship["company name"]}`
    
    let intern_postion=document.querySelector(".intern_postion")
    intern_postion.innerText = `${datas.resume[k].Internship.Position}`
    
    let intern_startdate=document.querySelector(".intern_startdate")
    intern_startdate.innerText = `${datas.resume[k].Internship["Start Date"]}`
    
    let intern_enddate=document.querySelector(".intern_enddate")
    intern_enddate.innerText = `${datas.resume[k].Internship["End Date"]}`
    
    let intern_summary=document.querySelector(".intern_summary")
    intern_summary.innerText = `${datas.resume[k].Internship.Summary}` 

    //for displaying achievement
     
    for(i=1;i<=((datas.resume[k].achievements.Summary).length);i++)
    {  
      achievelist = document.querySelector(".achievements")
      let li = document.createElement("li");
      li.innerText= `${datas.resume[k].achievements.Summary[i-1]}`
      achievelist.appendChild(li);
       
    } 

  } 


  