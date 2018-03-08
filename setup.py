from setuptools import setup

exec (open('video_engine/version.py').read())

setup(
    name='video_engine',
    version=__version__,
    author='',
    packages=['video_engine'],
    include_package_data=True,
    license='MIT',
    description='video engine built with react',
    install_requires=[]
)
