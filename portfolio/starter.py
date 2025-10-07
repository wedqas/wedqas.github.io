from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/run", methods=["POST"])
def run():
    user_input = request.form["code"]
    # Call your existing Python logic here
    result = f"Received: {user_input}"
    return render_template("index.html", output=result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)