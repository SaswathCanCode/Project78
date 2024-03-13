var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg",
"https://i.postimg.cc/qqyYvVbq/grandpa.jpg",
 "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
  "https://i.postimg.cc/5ymDKL83/bro.jpg",
   "https://i.postimg.cc/JnL6wtrd/sister.jpg",
    "https://i.postimg.cc/bw5W5zSK/mother.jpg",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1404030356%2Fvector%2Fthe-end-cinema-screen.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3Dlb6n6RfNcpDkUm46pM5hE3XLrIBBZu4VhQpktem4kcQ%3D&tbnid=phprkMLGI48twM&vet=12ahUKEwiI6pfejPKEAxVOx8kDHRrCB2MQMygAegQIARBy..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fthe-end-cinema-screen-gm1404030356-456374570&docid=HnRQpkgKko-VVM&w=612&h=445&q=the%20end&ved=2ahUKEwiI6pfejPKEAxVOx8kDHRrCB2MQMygAegQIARBy"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh", "The End!"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
