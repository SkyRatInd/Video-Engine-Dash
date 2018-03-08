import random

import dash
import datetime
from dash.dependencies import Input, Output, State, Event
import dash_core_components as dcc
import dash_html_components as html
import plotly.plotly as py
from plotly import graph_objs as go
from plotly.graph_objs import *
from flask import Flask
import pandas as pd
from collections import deque

import video_engine as rpd
# ^^ Dependences ^^ #

X = deque(maxlen=20)
Y = deque(maxlen=20)
X.append(1)
Y.append(1)

app = dash.Dash("Beyond Data") #Creates application

df = pd.read_csv('testCleanREDO.csv') #Reads CSV Data


data_dict = {"data1":df['data1'],
"data2": df['data2'],
"data3": df['data3'],
"data4":df['data4']}

app.layout = html.Div([
    html.Div([
        html.H2('Beyond Data',
                style={'textAlign': 'center'
                       }),
        ]),
    dcc.Dropdown(id='eeg-data', #Creates dropdown menu for all options defined in dict
                 options=[{'label': s, 'value': s}
                          for s in data_dict.keys()],
                 value=[],
                 multi=True
                 ),
    dcc.Slider(id='time-slider', value=0, min=-10, max=20, step=0.00001,
                labels={-10: 'start', 20: 'end'}),
    rpd.my_Player(
        id = 'video_player',
        url = 'http://127.0.0.1:8080/testvideo.mp4',
        width = 900,
        height = 720,
        controls = True,
        playing = True ),             
    html.Div(children=html.Div(id='graphs'), className='row'), #Conatins all of the Graphs
    dcc.Interval( #Updates graphs determind in ms by interval var
        id='graph-update',
        interval=100),
    ], className="container",style={'width':'98%','margin-left':10,'margin-right':10,'max-width':50000})


@app.callback(
    dash.dependencies.Output('graphs','children'),
    [dash.dependencies.Input('eeg-data', 'value')],
    events=[dash.dependencies.Event('graph-update', 'interval')]
    )
def update_graph(data_names):
    graphs = []
    global X 
    global Y               
    X.append (X[-1]+1)
    Y.append (Y[-1]+1)
    if len(data_names)>2: 
        class_choice = 'col s12 m6 l4'
    elif len(data_names) == 2:
        class_choice = 'col s12 m6 l6'
    else:
        class_choice = 'col s12'


    for data_name in data_names:

        data = go.Scatter(
            x=list(df['timestamp']),
            y=list(data_dict[data_name]),
            name='Scatter',
            fill="tozeroy",
            fillcolor="#6897bb"
            )

        graphs.append(html.Div(dcc.Graph(
            id=data_name,
            animate=True,
            figure={'data': [data],'layout' : go.Layout(xaxis=dict(range=[min(X), max(X)]),
                                                        yaxis=dict(range=[min(data_dict[data_name]),max(data_dict[data_name])]),
                                                        margin={'l':50,'r':1,'t':45,'b':1}, #setting margins for Left,right,top,bototm
                                                        title='{}'.format(data_name))}
            ), className=class_choice))

    return graphs



external_css = ["https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"]
for css in external_css:
    app.css.append_css({"external_url": css})

external_js = ['https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js']
for js in external_css:
    app.scripts.append_script({'external_url': js})


if __name__ == '__main__':
    app.run_server(debug=True)