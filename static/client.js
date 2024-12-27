document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", sendReq);
});
sendReq = async () => {
  const response = await fetch("/hello", {
    method: "POST",
    body: JSON.stringify({ name: "John" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  document.getElementById("msg").textContent = response.statusText;
  document.getElementById("body").textContent = await response.text();
};
