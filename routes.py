#!/usr/bin/env python3

from flask import Flask, render_template
app = Flask(__name__,  static_url_path='/static')

# two decorators, same function
@app.route('/')
@app.route('/index.html')
def index():
    return render_template('index.html', the_title='Hex Edit')


if __name__ == '__main__':
    app.run(debug=True)
