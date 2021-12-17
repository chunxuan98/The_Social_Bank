function getBlogs() {
    fetch("http://localhost:3000/blogs/all", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = ``;

            data.forEach((item) => {
                text += `<div class="row">
                <ul>
                  <li style="margin-bottom: 5px; background-color: white;">
                    <div 
                    style="border-radius: 4px; display:flex; padding: 24px 16px; position: relative; color: rgb(64,72,90)">
                      <div><img src="
                    ${item.Image}" style="width: 289px; height: 152px;"></div>
                    <div style="display: flex; padding: 0px 0px 0px 24px; flex-direction: column;">
                      <div style="color: blue; font-weight: bold;">${item.Category}</div>
                      <h3>${item.Title}</h3>
                      <p>${item.Content}</p>
                      <div>
                        <div>Posted by user <b>${item.Username}</b></div>
                        <div>Post date : ${item.Post_Date.substring(0,10)}</div>
                        </div>
                      </div>
                    </div>
                  </li>`;
            });
            text += "</ul></div>";
            $(".blog_post").html(text);
        })
        .catch((error) => console.log("error", error));
}

function getBlogsbyCat() {
  var cat = document.getElementById('content-search');
  fetch(`http://localhost:3000/blogs/bycat?cat=${cat.value}`, {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
          var text = ``;

          data.forEach((item) => {
              text += `<div class="row">
              <ul>
                <li style="margin-bottom: 5px; background-color: white;">
                  <div 
                  style="border-radius: 4px; display:flex; padding: 24px 16px; position: relative; color: rgb(64,72,90)">
                    <div><img src="
                  ${item.Image}" style="width: 289px; height: 152px;"></div>
                  <div style="display: flex; padding: 0px 0px 0px 24px; flex-direction: column;">
                    <div style="color: blue; font-weight: bold;">${item.Category}</div>
                    <h3>${item.Title}</h3>
                    <p>${item.Content}</p>
                    <div>
                      <div>Posted by user <b>${item.Username}</b></div>
                      <div>Post date : ${item.Post_Date.substring(0,10)}</div>
                      </div>
                    </div>
                  </div>
                </li>`;
          });
          text += "</ul></div>";
          $(".blog_post").html(text);
      })
      .catch((error) => console.log("error", error));
}

