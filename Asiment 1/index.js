function arraydisplay() {
    const userfname = document.getElementById('fname').value;
    const userlname = document.getElementById('lname').value;
    const userage = document.getElementById('age').value;
    const useradd = document.getElementById('add').value;
    const data = ""
    const arr = []
    const arr1 = []
    const arr2 = []
    const arr3 = []
    for (let i = 0; i < userfname.length; i++) {
        arr.push(userfname);
        document.getElementById('fname').value = "";
        arr1.push(userlname);
        document.getElementById('lname').value = "";
        arr2.push(userage);
        document.getElementById('age').value = "";
        arr3.push(useradd);
        document.getElementById('add').value = "";
    data += `<div class="mb-3 m-5 card bg-light d-flex flex-wrap justify-content-between " style="width: 18rem;">
    <div class="m-2">
        First name :${arr[i].userfname}
        <br>
        Last name :${arr1[i].userlname}
        <br>
        Age :
        <br>
        Address :
        <div class="m-2 ">
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
    </div>
</div>
</div>`}
    console.log(data)
    document.getElementById('display').innerHTML = data
}