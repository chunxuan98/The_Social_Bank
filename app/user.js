function getUserHomepage() {
  let uid = localStorage['uid']
    fetch(`http://localhost:3000/user/by-uid?username=${uid}`, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
            $("#home-user-display").html(data[0].first_name);
            $("#coin_amount").html(data[0].social_coins);
            $("#account_amount").html(data[0].bank_balance);
            $("#account_num").html(data[0].account_number);
        })
        .catch((error) => console.log("error", error));
}


function getUserProfile() {
  const d = new Date();
  let text = d.toISOString().substring(0, 10)
  let uid = localStorage['uid']
    fetch(`http://localhost:3000/user/by-uid?username=${uid}`, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
            $("#profile_username").html(data[0].username);
            $("#profile_coins").html(data[0].social_coins);
            $("#profile_exp").html(data[0].financial_exp);
            $("#profile_following").html(data[0].following);
            $("#profile_followers").html(data[0].followers);
            $("#profile_signupdate").html(data[0].join_date.substring(0,10));
            $("#profile_lastlogin").html(text);
        })
        .catch((error) => console.log("error", error));
}