var likecount=0;

let clickMe = function ()
{
    likecount=likecount+1;
    var likebutton=document.getElementById('likebtn');
    likebutton.innerText="Like"+likecount;
};
let dislike=function()
{
  if(likecount>0){
  likecount=likecount-1;
  var likebutton=document.getElementById('likebtn');
  likebutton.innerText="Like"+likecount;
  }
}

 let commentMe= function (btnComment)
 {
    let commentBox =
      btnComment.parentElement.parentElement.parentElement
        .children[2];
  
   
    let newElement = commentBox.children[0].cloneNode(true);
  
    // read the input
    const inputBox =
      btnComment.parentElement.parentElement.children[2].children[0];
  
    // dynamic value in new element
    newElement.children[0].innerHTML = inputBox.value;
  
    // clear the input box
    inputBox.value = "";
  
    commentBox.insertBefore(newElement, commentBox.firstChild);

 };

 let deleteComment = (btnEelementDel) => {
  console.log(btnEelementDel.parentElement.parentElement);

  btnEelementDel.parentElement.parentElement.remove();
};