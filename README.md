# video-engine

video engine react component integrated into dash for synced realtime playback of csv data and video

# NOTE

This repository is missing node_modules due to inability to upload so many files

# Note

In your pythong file import video-engine

Raw code for engine is located in/src

Any changes to /src should be saved and followed by:

npm run prepublish
python setup.py install

# Video

Your video needs to be hosted, It won't load locally into dash easiest way to host is:


npm install http-server
then run
http-server in the folder in which your video is hosted
I've uploaded a testvideo.mp4 which will work with CleanData.csv
# running dash

python test_vid.py will work

Your welcome to use my CSV data, its data pulled from a EEG, each entry is timestamp in relative time to ensure sync with video


# Problems

1. Can't get react to update video quicker then 500ms
2. multiple graphs become very slow and laggy
3. can't control video time with dash component, most likely needs to be fixed in the JS side
4. video/data seems to slowly become out of sync? should be tested more
5. CSS styling would be awesome.
6. I have to clean and format my EEG data before its usable, this is done in python in a second script
looking to add upload functionality for CSV, then have pandas procces the data, then plot it out on a graph, this cleaning procces also includes taking a realtime marker of where the video recording started thats planted into the CSV data and changing that to the first entry in the CSV data, also converting UNIX time to relative time, and applying filtering to the data.


# Why am I building this?

To allow myself to conduct my own studies using EEG/ECG's etc, I wanted a way to sync the data to whatever video I was watching or video of myself that was going on during the study.
I needed a method of playback to relate realtime events (video) to the data coming from my brain as those events where happening.
Looking to expand this application to playback all sorts of biometric data and be able to procces multiple videos (video of what I was looking at, video of myself, etc).
Ideally I'd like this to have ~.5ms of accuraccy 

# Contributing?
Thank you! I appreciate any help I can get :)
