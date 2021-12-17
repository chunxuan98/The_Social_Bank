function getTransactions() {
    fetch("http://localhost:3000/transaction/all", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>Date</th>
                  <th>Transaction Details</th>
                  <th>Transaction Amount</th>
                </tr>`;

            data.forEach((item) => {
                text += `
                    <tr>
                      <td>${item.DATE}</td>
                      <td>${item.TRANSACTION_DETAILS}</td>
                      <td>${item.Transaction_Amount}</td>
                    </tr>`;
            });
            text += "</table>";
            $(".transaction_div").html(text);
        })
        .catch((error) => console.log("error", error));
}
