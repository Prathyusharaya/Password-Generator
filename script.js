document.getElementById("passwordForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const length = parseInt(document.getElementById("length").value);
  const options = {
    uppercase: document.getElementById("uppercase").checked,
    lowercase: document.getElementById("lowercase").checked,
    numbers: document.getElementById("numbers").checked,
    symbols: document.getElementById("symbols").checked,
  };

  const response = await fetch("/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ length, ...options }),
  });

  const data = await response.json();
  document.getElementById("result").value = data.password;
});

function copyPassword() {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
}
