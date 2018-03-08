import dash
from dash.dependencies import Output, Event, Input
import dash_core_components as dcc
import dash_html_components as html
from pandas_datareader.data import DataReader
import time
import plotly.graph_objs as go
from collections import deque
import plotly
from flask import Flask
import datetime
import pandas as pd
import random
import video_engine as rpd
# ^^ Dependences ^^ #

X = deque(maxlen=1)
Y = deque(maxlen=1)
X.append(1)
Y.append(1)

newtime = deque(maxlen=0)

app = dash.Dash("Beyond Data") #Creates application

df = pd.read_csv('CleanData.csv') #Reads CSV Data


app.layout = html.Div(children=[
    html.H1(children='Hello Dash'),

   dcc.Graph(id='data-graph'),
   html.H2(id='text', children='Nothing'),
    dcc.Slider(
        id='time-slider',
        value=0,
        min = 0,
        max = 120,
        step = 1,
        marks={0: 'Start', 120: 'End'}
    )
])


@app.callback( #Update graph
    dash.dependencies.Output('data-graph', 'figure'),
    [dash.dependencies.Input('time-slider', 'value')])
def update_time(newtime):
    X.append(newtime)
    data = go.Scatter(
                x = df['timestamp'],
                y = df['sens1'],
                name = 'Scatter',
                mode = 'lines'
        )
    
    return {'data': [data], 'layout': go.Layout(xaxis = dict(range=[min(X), max(X)], fixedrange='true'),)}

@app.callback( # Update Text
    dash.dependencies.Output('text', 'children'),
    [dash.dependencies.Input('time-slider', 'value')])
def update_text(newTime):
    return("Time - {}".format(str(newTime)))  

if __name__ == '__main__':
    app.run_server(debug=True)





external_css = ["https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"]
for css in external_css:
    app.css.append_css({"external_url": css})

external_js = ['https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js']
for js in external_css:
    app.scripts.append_script({'external_url': js})


if __name__ == '__main__':
    app.run_server(debug=True)