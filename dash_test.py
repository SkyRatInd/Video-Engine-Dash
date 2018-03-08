import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd
from flask import Flask
app = dash.Dash()
df = pd.read_csv('CleanData.csv')




if __name__ == '__main__':
    app.run_server(debug=True)