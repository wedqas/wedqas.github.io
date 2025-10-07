from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html', script='js/script.js')

if __name__=="__main__":
   app.run(debug=True)