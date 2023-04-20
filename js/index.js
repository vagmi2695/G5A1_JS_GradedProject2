// import data from Json
import candidatesData from "../data/Data.json" assert { type: 'json' };
// Add action listner
document.getElementById("loginButton").addEventListener('click', VerifyLoginCredentials);
document.getElementById("resumePage").style.display = 'none';

//Converted data
var data = candidatesData.resume;
var loadedData = 0;

function VerifyLoginCredentials() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username === '' || password === '') {
		document.getElementById("InvalidInformation").innerText = "Enter valid username and password!";
	}
	else if (username === 'admin' && password === 'admin') {
		document.getElementById("container").remove();
		document.getElementById("resumePage").style.display = 'block';
		AddOtherTabsInPage();
	}
	else {
		document.getElementById("InvalidInformation").innerText = "Enter valid username and password!";
	}
}

function AddOtherTabsInPage() {

	document.body.style.background = "white";

	//Event for Search Box
	document.getElementById("searchBox").addEventListener('change', SearchBasedOnJobDescription);

	//Event for Next and Previous Button
	document.getElementById("previousButton").addEventListener('click', loadPreviousData);
	document.getElementById("nextButton").addEventListener('click', loadNextData);

	//Adding Previous and Next Data
	enableNextAndPreviousButton();

	//Display User Details
	loadData(loadedData);
}

// Add Next and Previous Button
function enableNextAndPreviousButton() {

	if (data.length == 1) {
		document.getElementById("previousButton").style.display = 'none';
		document.getElementById("nextButton").style.display = 'none';
	}
	//Display Next Button
	else if (data.length > 0 && loadedData == 0) {
		document.getElementById("previousButton").style.display = 'none';
		document.getElementById("nextButton").style.display = 'block';
	}

	//Display Previous Button
	else if (data.length - 1 === loadedData) {
		document.getElementById("previousButton").style.display = 'block';
		document.getElementById("nextButton").style.display = 'none';
	}

	//Both Previous and Next Button to be displayed
	else {
		document.getElementById("previousButton").style.display = 'block';
		document.getElementById("nextButton").style.display = 'block';
	}
}

// Load Previous Data
function loadPreviousData() {
	loadedData--;
	loadData(loadedData);
	enableNextAndPreviousButton();
}

//Load Next Data
function loadNextData() {
	loadedData++;
	loadData(loadedData);
	enableNextAndPreviousButton();
}

var concatenateData = '';
function loadData(i) {
	var candidate = data[i];
	document.getElementById("applierName").innerText = candidate.basics.name;
	document.getElementById("appliedFor").innerText = "Applied For : " + candidate.basics.AppliedFor;
	document.getElementById("mobNo").innerText = candidate.basics.phone;
	document.getElementById("emailAddress").innerText = candidate.basics.email;
	document.getElementById("profile").href = candidate.basics.profiles.url;
	document.getElementById("profile").innerText = candidate.basics.profiles.network;
	concatenateData = '';
	candidate.skills.keywords.forEach(concatData);
	document.getElementById("skills").innerHTML = concatenateData;
	concatenateData = '';
	candidate.interests.hobbies.forEach(concatData);
	document.getElementById("hobbies").innerHTML = concatenateData;

	// Work experience in previous company
	document.getElementById("companyName").innerHTML = "<b>Company Name : </b>" + candidate.work.CompanyName;
	document.getElementById("position").innerHTML = "<b>Position : </b>" + candidate.work.Position;
	document.getElementById("startDate").innerHTML = "<b>Start Date : </b>" + candidate.work.StartDate;
	document.getElementById("endDate").innerHTML = "<b>End Date : </b>" + candidate.work.EndDate;
	document.getElementById("summary").innerHTML = "<b>Summary : </b>" + candidate.work.Summary;

	//Project
	document.getElementById("project").innerHTML = "<b>" + candidate.projects.name + " : </b>" + candidate.projects.description;

	//Education
	document.getElementById("ugEducation").innerHTML = "<b>UG: </b>" + candidate.education.UG.institute + ", " + candidate.education.UG.course + ", " + candidate.education.UG.StartDate
		+ ", " + candidate.education.UG.EndDate + ", " + candidate.education.UG.cgpa;
	document.getElementById("puEducation").innerHTML = "<b>PU: </b>" + candidate.education.SeniorSecondary.institute + ", " + candidate.education.SeniorSecondary.cgpa;
	document.getElementById("hsEducation").innerHTML = "<b>High School: </b>" + candidate.education.HighSchool.institute + ", " + candidate.education.HighSchool.cgpa;

	//Internship
	document.getElementById("internCompanyName").innerHTML = "<b>Company Name : </b>" + candidate.Internship.CompanyName;
	document.getElementById("internPosition").innerHTML = "<b>Position : </b>" + candidate.Internship.Position;
	document.getElementById("internStartDate").innerHTML = "<b>Start Date : </b>" + candidate.Internship.StartDate;
	document.getElementById("internEndDate").innerHTML = "<b>End Date : </b>" + candidate.Internship.EndDate;
	document.getElementById("internSummary").innerHTML = "<b>Summary : </b>" + candidate.Internship.Summary;

	//Achievments
	concatenateData = '';
	candidate.achievements.Summary.forEach(prepareBulletedPoints);
	document.getElementById("allAchievments").innerHTML = concatenateData;
}

function concatData(item) {
	concatenateData += item + "<br>";
}

function prepareBulletedPoints(item) {
	concatenateData += "<li>" + item + "</li>";
}

// Searching based on Job Applied For
var searchPosition = '';
function SearchBasedOnJobDescription() {
	data = candidatesData.resume;
	loadedData = 0;
	document.getElementById("noDataFound").style.display = 'none';
	document.getElementById("displayResume").style.display = 'block';
	searchPosition = document.getElementById("searchBox").value;
	if (searchPosition != "") {
		var selectedData = data.filter(GetDataBasedOnPosition)
		data = selectedData;
	}

	// Check if data exists or not
	if (data.length == 0) {
		document.getElementById("noDataFound").style.display = 'flex';
		document.getElementById("displayResume").style.display = 'none';
		document.getElementById("previousButton").style.display = 'none';
		document.getElementById("nextButton").style.display = 'none';
		return;
	}

	//Display User Details
	loadData(loadedData);

	//Display Previous and Next Button
	enableNextAndPreviousButton();
}

//Fetching data based on Positon Applied
function GetDataBasedOnPosition(data) {
	let position = data.basics.AppliedFor.toLowerCase();
	if (position.includes(searchPosition.toLowerCase()))
		return data
}