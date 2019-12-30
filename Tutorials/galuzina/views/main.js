var fname = document.getElementById('fname');
var phone = document.getElementById('phone');
var time = document.getElementById('time');
var submit = document.getElementById('submit');


var key = 0;
submit.onclick = function(){
    key += 1;
    var user = {
        name: fname.value,
        phone: phone.value,
        time: time.value
    };
    if(user){
        console.log("user: " + user.name + " phone: " + user.phone + " time: " + user.time);
        localStorage.setItem(key, JSON.stringify(user));
    }
    var data = JSON.parse(localStorage.getItem(key));
    console.log("Name: " + data.name + " Time: " + data.time);
    alert(`${data.name} Вы записались на ${data.time}`);
    var x = document.getElementById("time");
    x.remove(x.selectedIndex);
}
