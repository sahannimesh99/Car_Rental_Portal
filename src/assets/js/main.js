function saveCustomer() {
    $('#signupUser').css('display', 'none');
    $('#signupDetails').css('display', 'block');
}

function registerUser() {
    var userData = {
        id: $('#userNic').val(),
        email: $('#userEmail').val(),
        password: $('#userPass').val(),
        customer: {
            nic: $('#userNic').val(),
            name: $('#userName').val(),
            address: $('#userAddress').val(),
            contact: $('#userContact').val(),
            drivingLicNo: $('#userLicenceNo').val()
        }
    };

    $.ajax({
        url: "http://localhost:8080/CarRentalSystem/api/v1/user",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(userData),
        success: function (resp) {
            if (resp.state === true) {
                alert(resp.message);
                $('#signupDetails').css('display', 'none');
                $('#fileUpload').css('display', 'block');
                $('.loginBanner').css('display','none');
            } else {
                alert(resp.message);
            }
        }
    });
}

$('#but_upload').click(function () {
    var frmdata = new FormData();
    frmdata.append('file[]',$('#fileNicF')[0].files[0]);
    frmdata.append('file[]',$('#fileNicB')[0].files[0]);
    frmdata.append('file[]',$('#fileLicF')[0].files[0]);
    frmdata.append('file[]',$('#fileLicB')[0].files[0]);
    frmdata.append('nic',$('#userNic').val());
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem/api/v1/user/upload",
        type: "post",
        data: frmdata,
        contentType: false,
        processData: false,
        success: function (resp) {
            if (resp.state === true) {
                alert(resp.message);
                $('#fileUpload').css('display', 'none');
                $('#signupMessage').css('display', 'block');
            } else {
                alert(resp.message);
            }
        }
    });
});

