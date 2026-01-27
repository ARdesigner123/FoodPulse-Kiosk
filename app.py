from flask import Flask, render_template

app = Flask(
    __name__,
    template_folder=".",   # 👈 templates are in root folder
    static_folder="static"
)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/schedule")
def schedule():
    return render_template("schedule.html")

@app.route("/foodcourt")
def foodcourt():
    return render_template("foodcourt.html")

if __name__ == "__main__":
    app.run(debug=True)