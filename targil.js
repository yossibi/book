function Book (bookName, authorName, score) {
	this.bookName = bookName;
	this.authorName = authorName;
	this.score = score;
};


function reset(){
	document.getElementById('bookName').value = "";
	document.getElementById('authorName').value = "";
	document.getElementById('score').value = "";
}

function addBook(){
	var bookName = document.getElementById('bookName').value.trim();
	if(bookName ==''){
	document.getElementById('bookName').className = "red";}else{
	var authorName = document.getElementById('authorName').value.trim();
	if(authorName ==''){
	document.getElementById('authorName').className = "red";}else{
	var score = document.getElementById('score').value;
	if(score <0 || score >10 || score == isNaN){
	document.getElementById('score').className = "red";}else{
	var book = new Book(bookName, authorName, score);
	//זה עובד if(bookName !=''&& authorName !='' && score > 0 && score <11){
	addToList(book);
	reset();}}}
}

function resetList(){
    document.getElementById("bookList").innerHTML = '';
    
}

function addToList(book) {
		var newElement = document.createElement("li");
		var bookNameDiv = document.createElement("div");
		bookNameDiv.innerHTML = book.bookName;
		bookNameDiv.className = "left";
		var authorNameDiv = document.createElement("div");
		authorNameDiv.innerHTML = book.authorName;
		authorNameDiv.className = "center";
		var scoreDiv = document.createElement("div");
		scoreDiv.innerHTML = book.score;
		scoreDiv.className = "right";
		newElement.appendChild(bookNameDiv);
		newElement.appendChild(authorNameDiv);
		newElement.appendChild(scoreDiv);
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement);
}
