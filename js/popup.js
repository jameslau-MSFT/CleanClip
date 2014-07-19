
			
			
$('a#signin').click(function() {
	WL.init({
		client_id: "000000004410CD1A",
		redirect_uri: "https://login.live.com/oauth20_desktop.srf",
		scope: "wl.signin",
		response_type: "token"
	});
	WL.login({
        scope: ["wl.signin", "office.onenote_create"]
    }).then(
        function (response) {
            WL.api({
                path: "me",
                method: "GET"
            }).then(
                function (response) {
                    document.getElementById("first_name").innerText = response.first_name;
                    document.getElementById("last_name").innerText = response.last_name;
                    document.getElementById("email").innerText = response.emails.preferred;
                    document.getElementById("gender").innerText = response.gender;
                    document.getElementById("birthday").innerText =
                        response.birth_month + " " + response.birth_day + " " + response.birth_year;
                },
                function (responseFailed) {
                    document.getElementById("infoArea").innerText =
                        "Error calling API: " + responseFailed.error.message;
                }
            );
        }, 
        function (responseFailed)
        {
            document.getElementById("infoArea").innerText =
                "Error signing in: " + responseFailed.error_description;
        }
    );

});