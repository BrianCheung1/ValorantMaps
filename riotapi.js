$(document).ready(function () {

    let fetchBtn = document.getElementById("fetchBtn");

    fetchBtn.addEventListener("click", buttonclickhandler);

    function buttonclickhandler() {
        // Instantiate an new XHR Object
        const xhr = new XMLHttpRequest();

        // Open an obejct (GET/POST, PATH,
        // ASYN-TRUE/FALSE)
        xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

        // When response is ready
        xhr.onload = function () {
            if (this.status === 200) {
                // Changing string data into JSON Object
                obj = JSON.parse(this.responseText);

                // Getting the ul element
                let list = document.getElementById("list");
                str = "";
                for (key in obj.data) {
                    console.log(obj.data[key])
                    str += `<li>${obj.data[key].employee_name}</li><ul><li>Age: ${obj.data[key].employee_age}</li><li>Salary: ${obj.data[key].employee_salary}</li></ul>`;
                }
                list.innerHTML = str;
            } else {
                console.log("File not found");
            }
        };

        // At last send the request
        xhr.send();
    }
});